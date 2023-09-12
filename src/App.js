import logo from './logo.svg';
import './App.css';

function App() {
const products=[
  {name:' laptop',price:'53000'},
  {name:' iphone',price:'34000'},
  {name:' Tab',price:'5000'},
  {name:' watch',price:'3000'},
]


  return (
    <div className="App">
      {
        products.map(product=><div className='allnewadd'><li>{product.name}={product.price}</li></div>)
      },
      {
        products.map(product=> <Productt name={product.name} price={product.price}></Productt>)
      }


 {/* <Productt name='laptop'price='55556'></Productt> */}
 
 
 
 
 </div>
  );
}
function Productt(props){
  return(
    <div className='divs'>
      <h1>name: {props.name}</h1>
      <p> price:{props.price}</p>
    </div>
  )
}

export default App;
