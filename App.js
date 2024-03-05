import './App.css';
import Search from './components/search';

const handleOnSearchChange = (searchData) =>{
  console.log(searchData)
}

function App() {
  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
    </div>
  );
}

export default App;
