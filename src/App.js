import { AboutState, IncrementOption, OpositeButton } from './AboutState';
import { Home } from './components/Home';
import { NewHome } from './components/NewHome';
import { Console } from './components/Console';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Monkeys } from './components/Monkeys';
import { Monkey } from './components/Monkey';


function App() {
  const arr = [
    {name: "Azorel",
    age: "3",
    id: 1,
    friendly: true,    
    },
    {name: "Suzie",
    age: "8",
    id: 2,
    friendly: false,    
    },
    {name: "Thor",
    age: "5",
    id: 3,
    friendly: true,    
    }
  ]
  const monkeysArr = [
    {name: "Cita",
    age: "3",
    id: 1,
    friendly: true,    
    },
    {name: "Periuta",
    age: "8",
    id: 2,
    friendly: false,    
    },
    {name: "King Kong",
    age: "5",
    id: 3,
    friendly: true,    
    }
  ]

  return (
    <div className="App container">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/aboutstate' element = {<AboutState />}/>
          <Route path='/increment' element = {<IncrementOption />}/>
          <Route path='/oposite' element = {<OpositeButton />}/>
          <Route path='/newhome' element = {<NewHome />}/>
          <Route path='/monkeys' element = {<Monkeys />}/>
          <Route path='/monkeys/:id' element = {<Monkey />}/>
          <Route path='/console' element = {<Console array = {arr}/>}/>
          <Route path='*' element = {<p>This page can not be found.</p>}/>
        </Routes>
      </Router>     
    </div>


  );
}

export default App;
