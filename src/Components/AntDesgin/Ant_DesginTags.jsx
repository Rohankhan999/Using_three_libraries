import { Tag } from "antd";
function Ant_DesginTags() {
    return(
        <div style={{ display: "flex",flexDirection:"column", gap: "1px", marginTop: "10px" }}>
  <Tag style={{marginBottom:"5px" , marginTop:"10px"}} color="magenta">Pta-Approved ✅</Tag>
      <Tag style={{marginBottom:"5px"}} color="red">1 Year Warranty ⌚</Tag>
      <Tag style={{marginBottom:"5px"}} color="volcano">Best Price 🔥</Tag>
        </div>
    )
    
}
export default Ant_DesginTags;