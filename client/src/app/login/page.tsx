"use client";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MouseEvent } from "react";
import {
  Check,
  CheckBox,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          minHeight: 500,
          borderRadius: "1rem",
          bgcolor: "primary.light",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} component="form" flex={1} padding={5}>
          <Typography variant="h4" sx={{ fontWeight: "medium" }}>
            Welcome to SocialPath
          </Typography>
          <Typography variant="body1">
            Please log-in to your account to continue your journey
          </Typography>
          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            required
            type="email"
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            required
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Stack direction='row' spacing={2}>
            <CheckBox />
            <Typography variant="body1" sx={{fontWeight:"medium"}}>Remember Me</Typography>
          </Stack>
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Log in
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
