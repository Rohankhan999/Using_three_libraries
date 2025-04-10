import { FaGithub } from "react-icons/fa6";

function Header() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backgroundColor: "#1E1E1E",
          fontFamily: "Segoe UI, sans-serif",
          boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ color: "#FF6B6B", fontSize: "26px", fontWeight: "bold" }}>
          ReactElements
        </div>
        <div style={{ display: "flex", gap: "30px", fontSize: "18px" }}>
          <a
            href="#"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#4ECDC4")}
            onMouseOut={(e) => (e.target.style.color = "#FFFFFF")}
          >
            Home
          </a>
          <a
            href="#"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#4ECDC4")}
            onMouseOut={(e) => (e.target.style.color = "#FFFFFF")}
          >
            About
          </a>
          <a
            href="#"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#4ECDC4")}
            onMouseOut={(e) => (e.target.style.color = "#FFFFFF")}
          >
            Contact
          </a>
        </div>
        <div style={{ fontSize: "32px" }}>
          <a
            href="https://github.com/Rohankhan999"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#FF6B6B")}
            onMouseOut={(e) => (e.target.style.color = "#FFFFFF")}
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
