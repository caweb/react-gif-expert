export const getGifs = async( category ) => {

    // const url = `https://api.giphy.com/v1/gifs/search?api_key=CHDe3AiiO9RrSK12SDM35gtbzC4YYGbz&q=${ category }&limit=10`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Igf9IksD9UFKLZgnoWMvVJNMtGdXO2HG&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(data);
    // console.log(gifs);
    return gifs;
}