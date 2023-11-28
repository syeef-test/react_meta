import "./App.css";

const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$7.00",
  },
];

function App() {
  const listItems = data.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li>{itemText}</li>;
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
