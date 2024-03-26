import { AppBar,Toolbar, Typography,Button} from "@mui/material";
import { Link } from "react-router-dom";
// import{Menu as MenuIcon} from "@mui/icons-material"
export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        
        <Typography to= "/recipes" color="inherit"  variant="h6" component={Link} sx={{ flexGrow: 1 }}>
          Recipe App
        </Typography>
        <Button to="/add-recipe" variant="outlined" component={Link} color="inherit">Add Recipe</Button>
      </Toolbar>
    </AppBar>
  );
}
