
let state = {
  showDetails: false
}
const handleToggle = (e) => {
  e.preventDefault();
  state.showDetails = !state.showDetails;
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visible Toggle</h1>
      <button onClick={handleToggle}>{ state.showDetails ? 'Hide details' : 'Show details' }</button>
      {state.showDetails && <p>Hey. These are some details you can now see!</p>}
    </div>
  );

  ReactDOM.render(template,appRoot);
}

render();
