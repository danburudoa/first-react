//reactからuseContextimport
import { useContext } from "react";

// 作成したContextをimport
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px"
};

export const EditButton = props => {
  const { isAdmin } = props;

  // useContextの引数に参照するContextを指定する
  const contextValue = useContext(AdminFlagContext);
  console.log(contextValue); // {sampleValue: "テスト"}
  
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};