import { useState } from 'react';
import { Global } from '@emotion/react';
import { Section } from './Section/Section';
import { GlobalStyles } from 'css/GlobalStyles';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistic/Statistic';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  const optionSelections = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback()) || 0;
  };

  const onLeaveFeedback = currentValue =>
    optionSelections[currentValue](prevOption => prevOption + 1);

  return (
    <>
      <Global styles={GlobalStyles} />
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
