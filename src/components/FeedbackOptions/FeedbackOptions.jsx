import { List, FeedbackButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <List>
    {Object.keys(options).map(option => (
      <li key={option}>
        <FeedbackButton
          variant="contained"
          color="secondary"
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      </li>
    ))}
  </List>
);
