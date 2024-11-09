import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Contact List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
