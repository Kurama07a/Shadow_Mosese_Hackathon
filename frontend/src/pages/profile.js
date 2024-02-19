import React, { useState } from 'react';
import {
  Box, Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography, ThemeProvider, createTheme, Avatar
} from '@mui/material';
import Navbar from '../components/navbar'; // Assuming this is the path to your Navbar component
import Sidebar from '../components/sidebar'; // Assuming this is the path to your Sidebar component
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ProfilePage = () => {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Platform Settings
                </Typography>
                {/* Platform settings content goes here */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Profile Information
                </Typography>
                <Avatar alt="Alec M. Thompson" src="/static/images/avatar/1.jpg" />
                <Typography variant="subtitle1" gutterBottom>
                  Alec M. Thompson
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Mobile: (44) 123 1234 123
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Email: alecthompson@mail.com
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Location: USA
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Social:
                  <FacebookIcon />
                  <TwitterIcon />
                  <InstagramIcon />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Projects
                </Typography>
                {/* Project cards go here */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default ProfilePage;
