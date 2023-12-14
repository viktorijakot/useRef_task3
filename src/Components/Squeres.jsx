import { useContext } from "react";
import { SqueresContext } from "./SqueresContext";

export default function Squeres() {
  const { squere1, squere2, squere3 } = useContext(SqueresContext);

  return (
    <div className="squeresBox">
      <div className="squere" ref={squere1}></div>
      <div className="squere" ref={squere2}></div>
      <div className="squere" ref={squere3}></div>
    </div>
  );
}
