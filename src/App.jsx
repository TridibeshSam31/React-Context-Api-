import UserContextProvider from './assets/context/UserContextProvider.jsx';
import Login from './assets/components/Login.jsx';
import Profile from './assets/components/Profile.jsx';



function App() {
  

  return (
    <UserContextProvider>
      <h1>React video for context API </h1> 
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
