import { useContext } from "react";
import { SqueresContext } from "./SqueresContext";

export default function Button() {
  const { handleClick } = useContext(SqueresContext);

  return <button onClick={handleClick}>Change</button>;
}
