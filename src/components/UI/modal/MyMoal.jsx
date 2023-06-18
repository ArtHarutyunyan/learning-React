import React from "react";
import cl from "./MyModal.module.css";

const MyMoal = ({ children, visible, setVisible }) => {
  console.log(cl.myModal);
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }
  console.log(rootClasses);

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyMoal;
