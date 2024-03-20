import "./Sidebar.css";
import materials from "../../data/materials.json";
import Topics from "../../components/Topics";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <Topics props={materials} />
        </ul>
      </nav>
    </div>
  );
}
