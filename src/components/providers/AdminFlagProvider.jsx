import  { createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;

  // 動作確認のために適当なオブジェクトを定義
  const sampleobj = { sampleValue: "テスト" };
  
  // AdminFlagContextの中にProviderがあるので、それでchildrenを囲む
  // valueの中にグローバルに扱う実際の値を設定
  return (
    <AdminFlagContext.Provider value={sampleobj}>
      { children }
    </AdminFlagContext.Provider>
  );
};