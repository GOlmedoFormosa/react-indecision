
class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: props.count
    }
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    // this.setState({count: this.state.count+1});
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleMinusOne() {
    this.setState({count: this.state.count-1})    
  }
  handleReset() {
    this.setState({count: 0})   
    // this.setState({count: this.state.count + 1});
    // this.setState(()=> {
    //   return {
    //     count: 0
    //   }
    // });

    // this.setState((prevState) => {
    //   return {
    //     count:prevState.count + 1
    //   }
    // });

    
  }
  componentDidUpdate(prevProps,prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count',this.state.count);
    }
  }
  componentDidMount() {
    try {
      const count = Number(localStorage.getItem('count'));
      if(count) {
        this.setState(()=> ({count}));
      }
    } catch(e) {
      // Do nothing at all.
    } 
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));