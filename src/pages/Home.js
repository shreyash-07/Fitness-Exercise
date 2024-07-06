import React from 'react';
import { Box } from '@mui/material'
import Exercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/Exercises';

const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
    </Box>
  )
}

export default Home
