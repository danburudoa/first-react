// importしている要素は、それがそのページの子コンポーネントを意味している。
import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from 'axios';

// ユーザー情報の型定義
type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
}

export const App = () => {
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);

  // 画面表示時にユーザー情報取得
  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res) => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.nama} age={user.age} personalColor={user.personalColor} />
      ))}
    </div>
  );
};