console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const handleRemoveAll = (e) => {
  e.preventDefault();
  app.options = [];
  renderApp();
}

const handleFormSubmit = (e)=> {
  e.preventDefault(); 
  //e.target => el form 
  //e.target.elements => el input y el button
  //e.target.elements.option => elementos del form con name option
  //e.target.elements.option.value => valor del input
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
}
const handleMakeDecision = (e) => {
  e.preventDefault(); 
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}
const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={handleMakeDecision}>What should I do?</button>
      <button onClick={handleRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((e,i) => <li key={i}>{e}</li>)
        }
      </ol>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot);
}

renderApp();