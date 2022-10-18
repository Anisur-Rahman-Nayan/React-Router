import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/friends' element={<Friends></Friends>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/friend/:friendId' element={<Details></Details>}></Route>
      
       <Route path='/posts' element={<Post></Post>}>
          <Route path=':postId' element={<PostDetails></PostDetails>}> </Route>
       </Route>
       
       <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
