// import { Container } from "@mui/material";
import{ Card, CardMedia,Typography, CardContent, Container, Grid, TextField} from "@mui/material";


export default function Recipes(){
    return(
        <Container sx={{my: '2rem'}} maxWidth="sm">
          
         <TextField 
         fullWidth
         id="outlined-basic" label="Enter a keyword to search recipes and hit enter"
          variant="outlined" 


          />  
          <Grid sx={{mt: "1rem"}}
           container spacing={3}>
            <Grid item xs={4}>
            <Card>
                
                <CardMedia 
                sx={{height:140}}
               
                image= "https://media.istockphoto.com/id/1599002141/photo/woman-serving-two-bowls-of-pumpkin-soup-for-thanksgiving-meal.jpg?s=1024x1024&w=is&k=20&c=KXQ-z_CjgdJO9n46plLfDbdudn-uhMcCiO4fIAjPLTQ=" />
               
            </Card>
            <CardContent>
                <Typography variant= "h5">Recipe Name</Typography>
            </CardContent>
            </Grid>
            
          </Grid>
        </Container>
         
            

    );
}