> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/songs/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/songs/relationships-data.dictionary)

# Songs.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for a song resource.

## Declaration

```
object Songs.Relationships
```

## Properties

- `albums` — `Songs.Relationships.SongsAlbumsRelationship`: The albums associated with the song. By default, `albums` includes identifiers only.

  Fetch limits: 10 default, 10 maximum
- `artists` — `Songs.Relationships.SongsArtistsRelationship`: The artists associated with the song. By default, `artists` includes identifiers only.

  Fetch limits: 10 default, 10 maximum
- `composers` — `Songs.Relationships.SongsComposersRelationship`: The composers for a catalog song.
- `genres` — `Songs.Relationships.SongsGenresRelationship`: The genres associated with the song. By default, `genres` is not included.

  Fetch limits: None
- `library` — `Songs.Relationships.SongsLibraryRelationship`: Library song for a catalog song if added to library.
- `music-videos` — `Songs.Relationships.SongsMusicVideosRelationship`: Music videos for a catalog song.
- `station` — `Songs.Relationships.SongsStationRelationship`: The station associated with the song. By default, `station` is not included.

  Fetch limits: None

## Topics

### Related Objects

- [Songs.Relationships.SongsAlbumsRelationship](relationships-data.dictionary/songsalbumsrelationship.md): A relationship from the song to its albums.
- [Songs.Relationships.SongsArtistsRelationship](relationships-data.dictionary/songsartistsrelationship.md): A relationship from the song to its artists.
- [Songs.Relationships.SongsGenresRelationship](relationships-data.dictionary/songsgenresrelationship.md): A relationship from the song to its genres.
- [Songs.Relationships.SongsComposersRelationship](relationships-data.dictionary/songscomposersrelationship.md): A relationship from the song to its composers.
- [Songs.Relationships.SongsLibraryRelationship](relationships-data.dictionary/songslibraryrelationship.md): A relationship from the song to its library.
- [Songs.Relationships.SongsMusicVideosRelationship](relationships-data.dictionary/songsmusicvideosrelationship.md): A relationship from the song to its music videos.
- [Songs.Relationships.SongsStationRelationship](relationships-data.dictionary/songsstationrelationship.md): A relationship from the song to its station.

## See Also

### Related Objects

- [Songs.Attributes](attributes-data.dictionary.md): The attributes for a song resource.
