// const baseUrl = 'http://deckofcardsapi.com/api/deck/new/draw?deck_count=6'
// const deckUrl = `http://deckofcardsapi.com/api/deck/${deck_id}/draw?count=52`
export const getCards = async () => {
    try {
        const response = await fetch(`http://deckofcardsapi.com/api/deck/new/draw?count=4`);
        // console.log(response)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (err) { console.log('error', err) }
}

console.log(getCards)
