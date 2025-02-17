import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Tooltip
        title=" Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: 30 },
        }}
        onClick={(e) => setOpen(!open)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"white"}
          p={3}
          borderRadius={0.5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h5" color="gray" textAlign={"center"}>
            Create post
          </Typography>
          <UserBox gap={1}>
            <Avatar
              src="https://media.istockphoto.com/id/157439183/photo/soldier-in-gas-mask.jpg?s=612x612&w=0&k=20&c=e62DjY3b8vCD02szv2lvBtVGeUa4TxlZm4tP1nVWKQk="
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Jhon Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="filled-multiline-static"
            multiline
            rows={3}
            placeholder="Write something..."
            variant="filled"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default Add;
