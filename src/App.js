import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//The line above imports all the necessary css files similar to the way done in html.
//Imports in React are neccessary whenever you want to reference an outside file or library.
import Feed from './Components/Feed';
import Navigbar from './Components/Navigbar';


function App() {
  return (
    <div className="App">
      {/* Your Navigation Bar that you imported as component should be here, look at 
      how the Feed Component is imported as a reference point.
      Remember that React Components must start with a capital letter.*/}
      <h1>Blockstagram</h1>
      <Navigbar />
      <Feed></Feed>
    </div>
  );
}

export default App;
