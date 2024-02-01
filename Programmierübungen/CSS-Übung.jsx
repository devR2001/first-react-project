export default function App() {
  const [styling, setStyling] = React.useState(false);

  function setStyle() {
    setStyling(true);
  }

  return (
    <div>
      <p className={styling === true ? "active" : ""}>Style me!</p>
      <button onClick={setStyle}>Toggle style</button>
    </div>
  );
}
