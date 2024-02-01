export default function App() {
  const [price, setPrice] = React.useState(100);

  function handleClicker() {
    setPrice(75);
  }

  return (
    <div>
      <p data-testid="price">${price}</p>
      <button onClick={handleClicker}>Apply Discount</button>
    </div>
  );
}
