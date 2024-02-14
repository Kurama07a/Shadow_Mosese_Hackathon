import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  Grid,
  CardActions,
  ThemeProvider,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Create a dark theme instance specifically for this component if not using a global theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const CreateProfile = () => {
  const [newUserProfile, setNewUserProfile] = useState({
    username: '',
    firstName: '',
    lastName: '',
    age: '',
    userDescription: '',
    userType: '', // Student or Alumni
    yearOfPassing: '',
    currentYear: '',
    branch: '',
    fieldsOfInterest: '',
    proficiency: '',
    currentField: '',
    workExperience: '',
    currentEmployment: '',
    linkedinProfile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUserProfile);
    // Implement the profile creation logic here
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <Navbar isActive={false} />
        <Box sx={{ display: 'flex', width: '100%' }}>
        <Sidebar isActive={false} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ flexGrow: 1, mt: 6 }}
    >
      <Card raised sx={{ p: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create New Profile
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={newUserProfile.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={newUserProfile.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={newUserProfile.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={newUserProfile.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="User Description"
                name="userDescription"
                multiline
                rows={4}
                value={newUserProfile.userDescription}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">I am a</FormLabel>
                <RadioGroup
                  row
                  name="userType"
                  value={newUserProfile.userType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Student"
                    control={<Radio />}
                    label="Student"
                  />
                  <FormControlLabel
                    value="Alumni"
                    control={<Radio />}
                    label="Alumni"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* Conditional Fields */}
            {newUserProfile.userType && (
              <Grid item xs={12}>
                <Card variant="outlined" sx={{ p: 2 }}>
                  {newUserProfile.userType === 'Student' ? (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Year of Passing"
                          name="yearOfPassing"
                          value={newUserProfile.yearOfPassing}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Current Year"
                          name="currentYear"
                          value={newUserProfile.currentYear}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Branch"
                          name="branch"
                          value={newUserProfile.branch}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Fields of Interest"
                          name="fieldsOfInterest"
                          multiline
                          rows={3}
                          value={newUserProfile.fieldsOfInterest}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Currently Proficient In"
                          name="proficiency"
                          multiline
                          rows={3}
                          value={newUserProfile.proficiency}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Year of Passing"
                          name="yearOfPassing"
                          value={newUserProfile.yearOfPassing}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Branch"
                          name="branch"
                          value={newUserProfile.branch}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Current Field"
                          name="currentField"
                          value={newUserProfile.currentField}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Work Experience"
                          name="workExperience"
                          multiline
                          rows={3}
                          value={newUserProfile.workExperience}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Currently Employed At/Working On"
                          name="currentEmployment"
                          value={newUserProfile.currentEmployment}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  )}
                </Card>
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="label"
                startIcon={<PhotoCamera />}
                sx={{ mr: 2, width: '100%' }}
              >
                Upload Picture
                <input
                  type="file"
                  hidden
                  onChange={(e) => {
                    // Handle file upload here
                  }}
                />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="LinkedIn Profile"
                name="linkedinProfile"
                value={newUserProfile.linkedinProfile}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        href={newUserProfile.linkedinProfile}
                        target="_blank"
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
            Create Profile
          </Button>
        </CardActions>
      </Card>
    </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CreateProfile;
