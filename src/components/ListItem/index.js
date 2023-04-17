function ListItem({ text, handleDelete }) {
  console.log("ListItem rerender");
  return (
    <li>
      {text} <button onClick={handleDelete}>x</button>
    </li>
  );
}

export default ListItem;
