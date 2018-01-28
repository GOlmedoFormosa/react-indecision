
class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDetail: false
    }
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }
  handleToggleVisibility() {
    this.setState((prevState)=> {
      return {
        showDetail: !prevState.showDetail
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.showDetail ? 'Hide details' : 'Show details'}
        </button>
        {this.state.showDetail && 
          (<div>
            <p>Hey. These are some details you can now see!</p>
          </div>)
        }

      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));