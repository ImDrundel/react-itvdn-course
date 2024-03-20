import "./Sidebar.css";
import materials from "../../data/materials.json";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          {materials.map((item, idx) => (
            <li key={idx}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
