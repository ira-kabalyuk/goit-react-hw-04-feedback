import React, {useState} from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', "neutral", 'bad'];

  const onLeaveFeedback = feedbackType => {
    if (feedbackType === 'good') {
      setGood(prevState => {
        return prevState + 1;
      })
    };

    if (feedbackType === 'neutral') {
      setNeutral(prevState => {
        return prevState + 1;
      })
    };

    if (feedbackType === 'bad') {
      setBad(prevState => {
        return prevState + 1;
      })
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {  
    return (
       Math.floor((good * 100) / countTotalFeedback()) 
     )
  }


  return (
    <div>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}>
      </Statistics>
    </div>
  );
};


export { App };
