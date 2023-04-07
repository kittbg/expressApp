DROP TABLE IF EXISTS albums CASCADE;
DROP TABLE IF EXISTS artist CASCADE;

CREATE TABLE artist (
    id serial PRIMARY KEY,
    artist varchar(30)
);

CREATE TABLE albums (
    album_id serial PRIMARY KEY,
    album varchar(30),
    year integer,
    songs text [],
    artist_id integer REFERENCES artist(id) NOT NULL
)