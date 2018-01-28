import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: props.options,
      selectedOption: undefined,
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(()=> ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({ 
        options: prevState.options.filter((option) => option !== optionToRemove)
      })
    );
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=> ({selectedOption: option}));
  }
  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 
    this.setState((prevState)=> ({ options: [...prevState.options,option] }));
  }
  handleClearSelectedOption = () => {
    this.setState((prevState)=> ({ selectedOption: undefined }));    
  }
  componentDidUpdate(prevProps,prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
        this.setState(()=>({ options }));
      }
    } catch (e) {
      //Do nothing at all.
    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle}/>

        <div className="container">
          <Action hasOptions={this.state.options.length > 0}
                  handlePick={this.handlePick}/>
          <div className="widget">
            <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}/>

            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal 
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
          />
      </div>
    )
  }
}
IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;