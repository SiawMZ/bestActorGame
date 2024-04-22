import { useState, useEffect } from "react";
import question from "../data/question.json";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default function Question() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [linesOrder, setLinesOrder] = useState([0, 1, 2]);

  useEffect(() => {
    setLinesOrder(shuffleArray([0, 1, 2]));
  }, [currentIndex]);

  const nextQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % question.length);
  };

  const currentItem = question[currentIndex];

  return (
    <>
      <div className="m-28 grid justify-items-center ">
        <div className="shadow-xl rounded-xl">
          <div className="bg-black rounded-t-xl px-10 py-11">
            <h1 className="text-5xl font-bold text-center text-white">
              题目： {currentItem.dialog}
            </h1>
            <p className="mt-5 text-3xl font-bold text-center text-white">
              请问：{currentItem.Question}
            </p>
          </div>
          {/* answer */}
          <div className=" text-center text-2xl font-normal tracking-wider leading-loose py-11 pb-16 rounded-b-xl bg-white">
            {linesOrder.map((index) => (
              <p key={index}>
                {index === 0 && (
                  <span className="text-green-600 font-extrabold">
                    {currentItem.true}
                  </span>
                )}
                {index === 1 && currentItem.false}
                {index === 2 && currentItem["false 2"]}
              </p>
            ))}
          </div>
          <div className="pb-10 grid justify-items-center ">
            <button
              className="px-8 z-30 py-4 border-2 border-black text-black relative font-semibold font-sans after:-z-20 after:absolute after:h-full after:w-1 after:bg-black hover:text-white after:-left-1 overflow-hidden after:translate-y-full after:hover:scale-[200] after:hover:transition-all after:hover:duration-500 after:transition-all after:duration-500 transition-all duration-500 text-2xl"
              onClick={nextQuestion}
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
