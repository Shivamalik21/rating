
import './App.css';
import List from './componet/List';
import Navbar from './componet/Navbar';
const arr=require('./componet/Data.json')
function App() {

  return (
    <div className="App">
   <Navbar/>
     <List arr={arr}/>
    </div>
  );
}

export default App;
