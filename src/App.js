import './App.css';
import OurCoolerFooter from './footer';
import OurCoolerHeader from './header.js';
import IngredientList from './ingredient-list.js';
import Recipe from './recipe.js';
import Image from './ImageSection.js';

function App() {
  return (
    <div className="App">
      <OurCoolerHeader />
      <Image />
      <Recipe />
      <IngredientList />
      <OurCoolerFooter />
      {/* <header className="App-header">
        <img src={bigLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
