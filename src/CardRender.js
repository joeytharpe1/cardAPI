import React, { useState, useEffect } from 'react';
import Deck from './Deck'
import { getCards } from './Cards';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function CardRender() {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        (async () => {
            const { cards } = await getCards();
            setDecks(cards);
        })()
    }, [getCards])




    return (
        <Container>
            <Grid container spacing={2}>
                {decks.map((deck, index) => (
                    <Grid key={index} item xs={12} md={6}>
                        <Deck data={deck} />
                    </Grid>
                ))}
            </Grid>

        </Container>
    )
}

export default CardRender
