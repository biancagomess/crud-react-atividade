import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NavMenu from './components/NavMenu';
import UserList from './components/UserList';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='title'>
            <BsFillPersonPlusFill />
            <h1>
              CRUD com React
            </h1>
          </div>
          <div className='menu'>
            <NavMenu />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:userId" element={<EditUser />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
