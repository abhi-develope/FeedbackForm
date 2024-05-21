import React, { useState } from 'react';
import { Fab, Tooltip, IconButton, Box, Paper, Typography, TextField, Button, FormControlLabel, Checkbox, Divider } from '@mui/material';
import { Feedback, BugReport, Lightbulb, ContactMail, Close } from '@mui/icons-material';
import { styled } from '@mui/system';

const feedbackOptions = [
  { icon: <BugReport />, label: 'Report an issue', form: 'IssueForm' },
  { icon: <Feedback />, label: 'Share Feedback', form: 'FeedbackForm' },
  { icon: <Lightbulb />, label: 'Give Suggestion', form: 'SuggestionForm' },
  { icon: <ContactMail />, label: 'Contact Us', form: 'ContactForm' }
];

const FabButton = styled(Fab)({
  position: 'fixed',
  bottom: 32,
  right: 32,
  backgroundColor: '#F8F8F8',
  color: '#0F0F0F',
  '&:hover': {
    backgroundColor: '#808080',
  },
});

const FabOptions = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  bottom: 80,
  right: 32,
});

const FabOptionButton = styled(IconButton)({
  backgroundColor: '#F8F8F8',
  color: '#0F0F0F',
  margin: '8px 0',
  '&:hover': {
    backgroundColor: '#808080',
  },
});

const FeedbackContainer = styled(Paper)({
  position: 'fixed',
  bottom: 100,
  right: 32,
  padding: 16,
  maxWidth: 400,
  zIndex: 10,
});

const FeedbackFab = () => {
  const [open, setOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const handleToggle = () => {
    setOpen(!open);
    if (open) setActiveForm(null);
  };

  const handleOptionClick = (form) => {
    setActiveForm(form);
  };

  return (
    <>
      <FabButton onClick={handleToggle}>
        {open ? <Close /> : <Feedback />}
      </FabButton>
      {open && (
        <FabOptions>
          {feedbackOptions.map((option, index) => (
            <Tooltip title={option.label} key={index}>
              <FabOptionButton onClick={() => handleOptionClick(option.form)}>
                {option.icon}
              </FabOptionButton>
            </Tooltip>
          ))}
        </FabOptions>
      )}
      {activeForm && (
        <FeedbackContainer>
          <FormComponent formType={activeForm} />
        </FeedbackContainer>
      )}
    </>
  );
};

const FormComponent = ({ formType }) => {
  switch (formType) {
    case 'IssueForm':
      return <IssueForm />;
    case 'FeedbackForm':
      return <FeedbackForm />;
    case 'SuggestionForm':
      return <SuggestionForm />;
    case 'ContactForm':
      return <ContactForm />;
    default:
      return null;
  }
};

const IssueForm = () => (
  <>
    <Typography variant="h6">Report an Issue</Typography>
    <Divider />
    <TextField label="Choose a section" fullWidth select>
      {/* Options here */}
    </TextField>
    <TextField label="Describe the issue in detail" fullWidth multiline rows={4} />
    <Button variant="contained" color="primary">Submit</Button>
  </>
);

const FeedbackForm = () => (
  <>
    <Typography variant="h6">Share Feedback</Typography>
    <Divider />
    <TextField label="Write here..." fullWidth multiline rows={4} />
    <FormControlLabel control={<Checkbox />} label="Send feedback anonymously" />
    <Button variant="contained" color="primary">Submit</Button>
  </>
);

const SuggestionForm = () => (
  <>
    <Typography variant="h6">Give Suggestion</Typography>
    <Divider />
    <TextField label="Write here..." fullWidth multiline rows={4} />
    <Button variant="contained" color="primary">Submit</Button>
  </>
);

const ContactForm = () => (
  <>
    <Typography variant="h6">Contact Us</Typography>
    <Divider />
    <TextField label="Your Name" fullWidth />
    <TextField label="Your Email" fullWidth />
    <TextField label="Your Mobile Number" fullWidth />
    <TextField label="What would you like to ask?" fullWidth multiline rows={4} />
    <Button variant="contained" color="primary">Submit</Button>
  </>
);

export default FeedbackFab;
