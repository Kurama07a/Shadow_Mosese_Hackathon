import React, {useState} from 'react';
import { Modal, TextField, 
  Box, Card, CardActionArea, CardContent, CardActions, Divider, Typography, Button, createTheme, ThemeProvider
} from '@mui/material';
import Navbar from '../components/navbar'; // Adjust the path as necessary
import Sidebar from '../components/sidebar'; // Adjust the path as necessary

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CreateTeamForm = ({ open, handleClose, onAddTeam }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTeam = {
      name: event.target.teamName.value,
      description: event.target.description.value,
      members: parseInt(event.target.teamMembersRequired.value, 10),
      memberNames: [], // Assuming you start with an empty list of members
    };
    onAddTeam(newTeam);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-team-modal-title"
      aria-describedby="create-team-modal-description"
    >
      <Box sx={modalStyle} component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography id="create-team-modal-title" variant="h6" component="h2">
          Create a Team
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField margin="normal" required fullWidth id="team-name" label="Team Name" name="teamName" autoFocus />
          <TextField margin="normal" required fullWidth id="description" label="Description" name="description" />
          <TextField margin="normal" required fullWidth id="team-members-required" label="No of Team Members Required" name="teamMembersRequired" type="number" />
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Create
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Updated sample data for sections with "Existing Team Members"
const MyTeam = [
  { name: "Team Alpha", members: 3, description: "A team focused on web development projects.", memberNames: ["Alice", "Bob", "Charlie"] },
  { name: "Team Beta", members: 5, description: "A team working on AI and machine learning.", memberNames: ["Dave", "Eve", "Frank"] },
  { name: "Team Gamma", members: 5, description: "A team dedicated to mobile app development.", memberNames: ["Grace", "Heidi", "Ivan"] },
];

const incomingRequestsExample = [
  { name: "Jane Doe", team: "Team Alpha", skills: "Frontend Development", existingTeamMembers: ["Alice", "Bob"] },
  { name: "John Smith", team: "Team Beta", skills: "Data Science", existingTeamMembers: ["Dave", "Eve"] },
];

const outgoingRequestsExample = [
  { teamName: "Team Delta", status: "Pending", existingTeamMembers: ["Zara", "Yan"] },
  { teamName: "Team Epsilon", status: "Accepted", existingTeamMembers: ["Xena", "Will"] },
];

const cardStyle = {
  width: 240,
  height: 'auto', // Adjust height to 'auto' to accommodate variable content
  margin: '2',
  display: 'inline-block',
  marginRight: '16px', // Adjust spacing between cards
  marginBottom: '16px',
};

const MemberNames = ({ names }) => (
  <>
    {names.map(name => (
      <Button key={name} sx={{ textTransform: 'none', justifyContent: 'flex-start', padding: 0, minWidth: 'fit-content' }} onClick={() => alert(`Clicked on ${name}`)}>
        <Typography variant="body2" color="primary" display="block" marginLeft={1}>
          {name}
        </Typography>
      </Button>
    ))}
  </>
);

// My Teams Component
const MyTeams = (team) => (
  MyTeam.map((team, index) => (
    <Card key={index} sx={cardStyle}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {team.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {team.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Existing Team Members:
          </Typography>
          <MemberNames names={team.memberNames} />
        </CardContent>
      </CardActionArea>
    </Card>
  ))
);

// Incoming Requests Component
const IncomingRequests = () => (
  incomingRequestsExample.map((request, index) => (
    <Card key={index} sx={cardStyle}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {request.name} - {request.skills}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Request to join {request.team}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Existing Team Members:
        </Typography>
        <MemberNames names={request.existingTeamMembers} />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Accept</Button>
        <Button size="small" color="secondary">Decline</Button>
      </CardActions>
    </Card>
  ))
);

// Outgoing Requests Component
const OutgoingRequests = () => (
  outgoingRequestsExample.map((request, index) => (
    <Card key={index} sx={cardStyle}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {request.teamName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {request.status}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Existing Team Members:
        </Typography>
        <MemberNames names={request.existingTeamMembers} />
      </CardContent>
    </Card>
  ))
);

export default function TeamManagement() {
  const [teams, setTeams] = useState(MyTeam);
  const [openCreateTeam, setOpenCreateTeam] = useState(false);

  const handleOpenCreateTeam = () => setOpenCreateTeam(true);
  const handleCloseCreateTeam = () => setOpenCreateTeam(false);
  const addNewTeam = (newTeam) => setTeams([...teams, newTeam]);
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
        <Navbar />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>
              Team Management
            </Typography>
            <Button variant="contained" onClick={handleOpenCreateTeam} sx={{ mb: 2 }}>
            Create Team
            </Button>
            <CreateTeamForm open={openCreateTeam} handleClose={handleCloseCreateTeam}  onAddTeam={addNewTeam}/>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h5">My Teams</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mb: 4 }}>
              <MyTeams />
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h5">Incoming Requests</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mb: 4 }}>
              <IncomingRequests />
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h5">Outgoing Requests</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <OutgoingRequests />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
