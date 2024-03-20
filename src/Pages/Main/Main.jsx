import "./Main.css";
import materials from "../../data/materials.json";
import Articles from "../../components/Articles";

export default function Main() {
  return (
    <div className="main">
      <Articles data={materials} />
    </div>
  );
}
