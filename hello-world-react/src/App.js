import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';


function App() {
  return (
      <div className="App">
      
       <Greet className={'Ali'} heroName={'Abuturab'} />
<p>A Children Prop</p>

       <Welcome className="Clark" />
       <Hello className="aun" />
     <Message/>
<Counter/>
      </div>
  );
}

export default App;
