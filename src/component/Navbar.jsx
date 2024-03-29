import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import { SearchBar } from "./";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex: 50,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="logo"
          height={47}
          style={{ borderRadius: "50%" }}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
