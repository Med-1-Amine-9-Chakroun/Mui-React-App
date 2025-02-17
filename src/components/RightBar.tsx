import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MMFFGxdHjohoPOwZQsrC5OWTR4MhgoKCz0mpaujgG6HNtuOfeve1qq-ZeqSL-wl2yPo&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MMFFGxdHjohoPOwZQsrC5OWTR4MhgoKCz0mpaujgG6HNtuOfeve1qq-ZeqSL-wl2yPo&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MMFFGxdHjohoPOwZQsrC5OWTR4MhgoKCz0mpaujgG6HNtuOfeve1qq-ZeqSL-wl2yPo&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MMFFGxdHjohoPOwZQsrC5OWTR4MhgoKCz0mpaujgG6HNtuOfeve1qq-ZeqSL-wl2yPo&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MMFFGxdHjohoPOwZQsrC5OWTR4MhgoKCz0mpaujgG6HNtuOfeve1qq-ZeqSL-wl2yPo&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MMFFGxdHjohoPOwZQsrC5OWTR4MhgoKCz0mpaujgG6HNtuOfeve1qq-ZeqSL-wl2yPo&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MMFFGxdHjohoPOwZQsrC5OWTR4MhgoKCz0mpaujgG6HNtuOfeve1qq-ZeqSL-wl2yPo&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MMFFGxdHjohoPOwZQsrC5OWTR4MhgoKCz0mpaujgG6HNtuOfeve1qq-ZeqSL-wl2yPo&usqp=CAU" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
