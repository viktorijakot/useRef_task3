import { createContext, useRef } from "react";

export const SqueresContext = createContext();

export const SqueresProvider = ({ children }) => {

  const squere1 = useRef();
  const squere2 = useRef();
  const squere3 = useRef();

  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClick = () => {
    const div1 = squere1.current;
    const div2 = squere2.current;
    const div3 = squere3.current;
    const number1 = rand(0, 223);
    const number2 = rand(0, 223);
    const number3 = rand(0, 223);
    const number4 = rand(0, 223);
    div1.style.backgroundColor = `rgba(${number1},${number2},${number1})`;
    div1.focus();
    div2.style.backgroundColor = `rgba(${number3},${number4},${number1})`;
    div2.focus();
    div3.style.backgroundColor = `rgba(${number2},${number1},${number4})`;
    div3.focus();
  };

  return (
    <SqueresContext.Provider
      value={{ squere1, squere2, squere3, rand, handleClick }}
    >
      {children}
    </SqueresContext.Provider>
  );
};
