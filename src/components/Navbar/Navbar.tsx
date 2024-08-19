import { AppBar, Toolbar, Typography } from "@mui/material"


const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gentleman programming React TEST
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar