import ListItem from "../ListItem";

function List({ toDos, handleDelete }) {
  console.log("List rerender");
  return (
    <ul>
      {toDos.map((todo, i) => (
        <ListItem key={i} text={todo} handleDelete={() => handleDelete(i)} />
      ))}
    </ul>
  );
}

export default List;
