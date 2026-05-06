import UserContext from './UserContext'
import Profile from './Profile'
import './App.css'

function App() {

  const user = {
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    role: 'Admin',
    college: 'MIT College',
    semester: 'Semester 6',
  }

  return (
    <UserContext.Provider value={user}>
      <div className="app">

        <div className="header">
          <h1 className="app-title">Context API Demo</h1>
          <p className="app-subtitle">Parent → Child → Nested Child</p>
        </div>

        <div className="parent-box">
          <span className="tag green">Parent — App.jsx</span>
          <p className="desc">Provides data using UserContext.Provider</p>
          <Profile />
        </div>

      </div>
    </UserContext.Provider>
  )
}

export default App
