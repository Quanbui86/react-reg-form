import logo from './logo.svg';
import './App.css';
import Root from './component/Root';
import { RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterForm from './pages/RegisterForm';
import Login from './pages/Login';
import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
const route = createBrowserRouter(createRoutesFromElements(
<Route path='/react-reg-form' element={ < Root/> }>
  <Route index element={ <HomePage/> }/>
  <Route path='register' element={ <RegisterForm/>}/>
  <Route path='login' element={ <Login/> }/>
</Route>
))


function App() {
  return (
    <RouterProvider router={ route }/>
  );
}

export default App;
