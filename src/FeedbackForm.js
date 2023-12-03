import React, { useState } from "react";

function FeedbackForm({ onSubmit }) {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience is not good"
    : "Optional Feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ score, comment });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label htmlFor="scoreInput">Score: {score}</label>
            <input
              id="scoreInput"
              value={score}
              onChange={(e) => {
                setScore(e.target.value);
              }}
              type="range"
              min="0"
              max="10"
            />
          </div>
          <div className="Field">
            <label htmlFor="commentInput">Comments:</label>
            <textarea
              id="commentInput"
              placeholder={textAreaPlaceholder}
              name="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
        </fieldset>
        <button type="submit" disabled={isDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
