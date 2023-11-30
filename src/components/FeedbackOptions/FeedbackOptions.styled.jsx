import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const List = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const FeedbackButton = styled(Button)`
  background-color: #ff9100;
  color: #252525;
  &:hover {
    color: #fafafa;
    background-color: #5e3500;
  }
`;
