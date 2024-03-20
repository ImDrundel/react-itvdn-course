export default function Topics(props) {
  const definitions = props.props;
  return (
    <>
      {definitions.map((item, idx) => (
        <li key={idx}>
          <a href={item.href}>{item.title}</a>
        </li>
      ))}
    </>
  );
}
