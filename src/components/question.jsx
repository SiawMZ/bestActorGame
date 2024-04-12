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
      <div className="m-44 grid justify-items-center">
        <div>
          <h1 className="text-5xl font-bold text-center">
            对白： {currentItem.dialog}
          </h1>
          <p className="mt-5 text-3xl font-bold text-center">
            请问：{currentItem.Question}
          </p>
          {linesOrder.map((index) => (
            <p key={index}>
              {index === 0 && (
                <span style={{ color: "green" }}>{currentItem.true}</span>
              )}
              {index === 1 && currentItem.false}
              {index === 2 && currentItem["false 2"]}
            </p>
          ))}
        </div>

        <div className="m-9">
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      </div>
    </>
  );
}
