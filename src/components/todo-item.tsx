export default function TodoItem({
  content,
  onRemove,
} // setTodos,
: {
  content: string;
  onRemove: () => void;
  // setTodos: (value: React.SetStateAction<string[]>) => void;
}) {
  return (
    <li>
      {content}
      <button
        type="button"
        // onClick={() => {
        //   setTodos((t) => t.filter((iter) => iter !== content));
        // }}
        onClick={onRemove}
      >
        X
      </button>
    </li>
  );
}
