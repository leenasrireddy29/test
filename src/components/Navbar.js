import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "#fff" }}>
      <h2>Social Media</h2>
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Home</Link>
        <Link to="/login" style={{ color: "#fff", marginRight: "15px" }}>Login</Link>
        <Link to="/register" style={{ color: "#fff" }}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
