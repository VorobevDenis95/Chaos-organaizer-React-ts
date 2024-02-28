import { Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography, } from "@mui/material";


const Header = () => {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>
          <Typography 
          variant="h5" 
          component='span'
          sx={{flexGrow: 1 }}>
            ChaosOrganaizer
          </Typography>
          <IconButton color="inherit">
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>   
    </Box>
  ) 
}

export default Header;