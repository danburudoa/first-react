export const ListItem = () => {
  const { id, name, age } = props;

  return (
    <p>
      {id}:{name}({age})
    </p>
  );
};