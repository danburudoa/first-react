// Propsの型を定義
type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
}

// Propsに型を指定
export const ListItem = (props: User) => {
  const { id, name, age, personalColor } = props;

  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age})
    </p>
  );
};