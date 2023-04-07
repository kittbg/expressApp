const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const { Client } = require('pg');
const client = new Client({connectionString: process.env.DATABASE_URL});
client.connect();

app.get('/music/albums', async (req, res) => {
    try {
        const results = await client.query('SELECT * FROM albums');
        res.send(results.rows)
    } catch (err){
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
});

app.get('/music/artist', async (req, res)=>{
    try {
        const result = await client.query('SELECT * FROM artist');
        res.send(results.rows)
    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
})

app.post('/music/albums', async (req, res)=>{
    let album = req.body.album;
    let year = req.body.year;
    let songs = req.body.songs;
    let artist_id = req.body.artist_id;
    try {
        const songsValues = songs.map((song)=> `'${song}'`).join(', ');
        await client.query(`INSERT INTO albums (album, year, songs, artist_id) VALUES ($1, $2, array[${songsValues}], $3)`, [album, year, artist_id]);
        res.send('Album added successfully!')
    } catch (err) {
        console.error(err)
        res.status(400).send("Failed to add album")
    }
})
 
app.put('/music/albums/:albumID', async (req, res) => {
    let album = req.body.album;
    let year = req.body.year;
    let songs = req.body.songs;
    let artist_id = req.body.artist_id;
    try {
      const songsValues = songs.map((song)=> `'${song}'`).join(', ');  
      await client.query(`UPDATE albums SET album = $1, year = $2, songs = array[${songsValues}], artist_id = $3 WHERE album_ID = ${req.params.albumID};`, [album, year, artist_id]);
      res.send('Album entry replaced')
    } catch (err) {
        console.error(err);
        res.status(400).send("")
    }
})

app.patch('/music/albums/:albumID', (req, res)=> {
    let album_id = req.params.album_id
    let key = Object.key(req.body)[0];
    let value = Object.value(req.body)[0];
    try {
       let results = client.query(`UPDATE album SET ${key} = $1 WHERE album_id = $2`, [value, album_id]);
       if (results.rowCount === 0){
        res.status(404).send(`Album with ${album_id} was not found.`)
       } else {
        res.send(results.rows);
       }
    } catch (err){
        console.error(err);
        res.status(400).send("Item replaced")
    }
})

app.listen(port, (error) => {
    console.log(`The server is listening to port ${port}.`)
})