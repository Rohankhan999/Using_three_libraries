import Ant_DesginCard from "./Ant_DesginCard";


function Ant_Desgin() {
  return (
    <div style={{ backgroundColor: "#4D4D4D", padding: "20px" }}>
      <h1
        style={{
          color: "#FEFEFE",
          fontWeight: "900",
          letterSpacing: "2px",
          padding: "4px 10px",
          borderRadius: "6px",
          width: "auto",
          textAlign: "center",
        }}
      >
        "Ant_Desgin Section"
      </h1>
      <div style={{ display: "flex" }}>
      <Ant_DesginCard />
      </div>
     
    </div>
  );
}
export default Ant_Desgin;
