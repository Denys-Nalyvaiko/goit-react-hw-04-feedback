import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FeedbackList } from './Statistic.styled';
import { Notification } from 'components/Notification/Notification';
import { StatisticTitle } from './Statistic.styled';

export const Statistic = props => {
  return (
    <>
      <StatisticTitle>Statistic</StatisticTitle>

      {Object.values(props).some(prop => prop) ? (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <nav aria-label="main mailbox folders">
            <FeedbackList>
              {Object.keys(props).map(prop => {
                return (
                  <ListItem disablePadding key={prop}>
                    <ListItemButton>
                      <ListItemText primary={createFeedbackItem(props, prop)} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </FeedbackList>
          </nav>
        </Box>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

function createFeedbackItem(props, prop) {
  return prop === 'positivePercentage'
    ? 'Positive feedback: ' + props[prop] + '%'
    : prop + ': ' + props[prop];
}
