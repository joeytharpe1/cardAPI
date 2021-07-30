import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 360,
        width: 250,
        margin: 'auto',
        borderRadius: '10px',
        border: '1px solid black'
        
    },

    // card: {
    //     border: '1px solid #cac531',
    //     backgroundColor: '#000000',
    //     transition: "transform 0.5s ease-in-out",
    //     "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    //     cursor: 'pointer',
    // },
    // button: {
    //     '&:hover': {
    //         backgroundColor: theme.palette.primary.main,
    //         color: theme.palette.warning.main,
    //     }
    // }
}));

function Deck({ data }) {
    const { image } = data
    const classes = useStyles();



    return (
        <div>
            <CardMedia
                className={classes.media}
                image={image}
            />
        </div>
    );
}

export default Deck
