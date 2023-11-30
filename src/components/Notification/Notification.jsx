import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { FeedbackAler } from './Notification.styled';

export const Notification = ({ message }) => (
  <Stack sx={{ width: '320px' }} spacing={2}>
    <FeedbackAler variant="outlined" severity="info">
      <AlertTitle>Info</AlertTitle>
      {message}
    </FeedbackAler>
  </Stack>
);
