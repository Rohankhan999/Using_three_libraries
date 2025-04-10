import image from "../../assets/dynamic.png";

function Hero() {
  return (
    <div>
      <section
        className="hero-header"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "linear-gradient(135deg, #1E1E1E, #2E2E2E)",
          fontFamily: "Segoe UI, sans-serif",
          padding: "60px 20px",
          color: "#FFFFFF",
        }}
      >
        <div className="hero-content" style={{ marginRight: "20px" }}>
          <h1 style={{fontSize: "40px", fontWeight: "900"}}>
            Welcome to {" "}
            <span
              style={{
                color: "#FF6B6B",
                fontWeight: "900",
                letterSpacing: "2px",
                background: "#FFFFFF",
                padding: "4px 10px",
                borderRadius: "6px",
              }}
            >
              ReactElements
            </span>
          </h1>
          <p
            style={{
              width: "600px",
              marginTop: "20px",
              marginBottom: "20px",
              color: "#CCCCCC",
              lineHeight: "1.6",
              fontSize: "18px",
            }}
          >
            "ReactElements is a modern React-based UI showcase that utilizes
            three powerful component libraries — Ant Design, React-Bootstrap,
            and Material UI. It demonstrates how different design systems can be
            used together to build elegant, reusable, and responsive user
            interfaces. From structured layouts to styled components and form
            elements, ReactElements highlights the flexibility and beauty of
            combining multiple UI libraries within a single React application."
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: "#4ECDC4",
              color: "#1E1E1E",
              fontWeight: "600",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              fontSize: "16px",
            }}
          >
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img
            src={image}
            alt="Hero"
            width={400}
            style={{
              mixBlendMode: "screen",
              borderRadius: "20px",
              padding: "20px",
              backgroundColor: "#2E2E2E",
              boxShadow: "0 0 30px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
