import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Notifications } from "@mui/icons-material";
const StyledToolbar = styled(Toolbar)({
  display: " flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "2px 2px 2px 15px",
  width: "30%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar color="">
        <DirectionsCarIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          DriveTn
        </Typography>
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <EmailIcon></EmailIcon>
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://femmedinfluence.fr/wp-content/uploads/2019/01/Capture-d%E2%80%99%C3%A9cran-2019-01-17-%C3%A0-17.26.00.jpg"
            onClick={(e) => setOpen(!open)}
          ></Avatar>
        </Icons>
        <UserBox onClick={(e) => setOpen(!open)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://femmedinfluence.fr/wp-content/uploads/2019/01/Capture-d%E2%80%99%C3%A9cran-2019-01-17-%C3%A0-17.26.00.jpg"
          ></Avatar>
          <Typography variant="span">Jhon Doe</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
