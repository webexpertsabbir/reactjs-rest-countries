import logo from './logo.svg';
import './App.css';
import Countries from './countries/Countries';
import Country from './Country/Country';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Country></Country>
      
    </div>
  );
}

// function LoadCountries(){
//   const [countris, setCountries] = useState([]);

//   useEffect( () =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])

//   return(
//     <div>
//       <h1>Countries</h1>
//       <h2>Avalable country: {countris.length}</h2>
//       {
//         // countris.map(country => <h1>{country.name.common}</h1>)
//         countris.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }

//     </div>
//   )
// }


// function Country(props){
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h2>Population: {props.population}</h2>
//     </div>
//   )
// }


export default App;
