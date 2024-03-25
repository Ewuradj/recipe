import { AppBar,Toolbar, Typography,Button} from "@mui/material";
// import{Menu as MenuIcon} from "@mui/icons-material"
export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Recipe App
        </Typography>
        <Button href="/add-recipe" color="inherit">Form</Button>
      </Toolbar>
    </AppBar>
  );
}
