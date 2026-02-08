import { useLocation, Link } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();
  if (!state) return null;

  return (
    <div className="success-card">
      <div className="success-header">
        <h2>✅ Registration Successful</h2>
        <p>Your details have been submitted</p>
      </div>

      <div className="success-list">
        {Object.entries(state).map(([k, v]) => (
          <div className="success-item" key={k}>
            <span>{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>

      <div className="success-actions">
        <Link to="/">← Fill Again</Link>
      </div>
    </div>
  );
}
