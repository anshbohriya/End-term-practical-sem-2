import { useContext } from 'react'
import UserContext from './UserContext'

function Dashboard() {
  const user = useContext(UserContext)

  if (!user) {
    return <div style={{color:'red'}}>Context not found! Wrap App with Provider.</div>
  }

  return (
    <div className="box nested-box">
      <span className="tag">Nested Child — Dashboard.jsx</span>
      <p className="box-desc">Consumes data using <code>useContext(UserContext)</code></p>

      <div className="user-card">
        <div className="avatar">{user.name.charAt(0)}</div>
        <div className="user-info">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-role">{user.role}</p>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Email</span>
          <span className="detail-value">{user.email}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">College</span>
          <span className="detail-value">{user.college}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Semester</span>
          <span className="detail-value">{user.semester}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Role</span>
          <span className="detail-value">{user.role}</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
