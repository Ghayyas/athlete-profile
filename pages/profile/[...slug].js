import React from 'react'
import { Typography } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Profile = () => {
  return (
    <div className='profile'>
      <Typography className='profile_heading'>Profile</Typography>
      <Typography className='profile_subheading'>I am Farhan Ahmed</Typography>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* {Array.from(Array(6)).map((_, index) => ( */}
        <Grid xs={4} sm={8} md={4} >
            <Item className='profile_image'>
              <div>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BwYl1Svb2h_YRhj9tcnZk0yAuIHh3oBM03dzDa8f&s" className='profile_image__avatar'/>
            </div>
            <h3 className='profile_image__heading'>Hello I'm Farhan Ahmed</h3>
            <p className='profile_image__summary'>
            After hydration, Next.js will trigger an update to your application to provide the route parameters in the query object.
            </p>
            </Item>
          </Grid>
          <Grid xs={4} sm={8} md={4} >
            <Item className='profile_details'>
              <Typography variant='h5' className='profile_details__heading'>Details</Typography>
              <p className='profile_details__heading'>Name:</p>
              <p>Farhan Ahmed</p>
              <p className='profile_details__heading'>Date Of Birth:</p>
              <p>23-09-2023</p>
              <p className='profile_details__heading'>Location:</p>
              <p>1907/2 azizabad FB Area Karachi</p>
            </Item>
          </Grid>
          <Grid xs={4} sm={8} md={4} >
            <Item className='profile_about'>
            <Typography variant='h5' className='profile_about__heading'>About me</Typography>
            <p>
            On the other hand, useEffect offers a cleanup function; it works asynchronously and runs the cleanup function before performing a new effect. It unsubscribes the functions, values and boosts the component performance by preventing the memory leak.
            </p>
            </Item>
          </Grid>
        
        {/* ))} */}
      </Grid>
    </Box>
    </div>
  )
}

export default Profile
export async function getServerSideProps({res,req,params}) {
  console.log(params.slug[0],"<===params")
  return {
    props: {}, // will be passed to the page component as props
  }
}