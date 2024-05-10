import logo from './logo.svg';
import './App.css';
import BusinessCardParent from './components/BusinessCardParent';
import BusinessCardForm from './components/BusinessCardForm';


function App() {
  return (
    <div className="App">
        <BusinessCardForm/>
        <BusinessCardParent/>
    </div>
  );
}

export default App;
