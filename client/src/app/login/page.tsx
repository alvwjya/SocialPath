"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
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
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          width="100%"
          sx={{
            minHeight: 500,
            borderRadius: "0.5rem",
            flexDirection: "column",
            display: "flex",
            boxShadow: 3,
            padding: 5,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            SocialPath
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "medium" }}
            color="primary.light"
          >
            Log in to continue your journey
          </Typography>
          <Stack component="form" flex={1} width="100%" sx={{ mt: 3 }}>
            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              margin="normal"
              type="email"
              autoComplete="email"
              required
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              margin="normal"
              autoComplete="current-password"
              required
              fullWidth
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
            <Stack direction="row" sx={{ mb: 1 }}>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember Me"
              /> */}
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forgot password?
              </Button>
            </Stack>
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ textTransform: "none" }}
            >
              Log in
            </Button>
            <Stack direction="row" sx={{ mt: 3, alignItems: "center" }}>
              <Typography>New to SocialPath?</Typography>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Join now
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
