> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/songs/relationships-data.dictionary/songsartistsrelationship](https://developer.apple.com/documentation/applemusicapi/songs/relationships-data.dictionary/songsartistsrelationship)

# Songs.Relationships.SongsArtistsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the song to its artists.

## Declaration

```
object Songs.Relationships.SongsArtistsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Artists]` (required): The artists associated with the song.

## See Also

### Related Objects

- [Songs.Relationships.SongsAlbumsRelationship](songsalbumsrelationship.md): A relationship from the song to its albums.
- [Songs.Relationships.SongsGenresRelationship](songsgenresrelationship.md): A relationship from the song to its genres.
- [Songs.Relationships.SongsComposersRelationship](songscomposersrelationship.md): A relationship from the song to its composers.
- [Songs.Relationships.SongsLibraryRelationship](songslibraryrelationship.md): A relationship from the song to its library.
- [Songs.Relationships.SongsMusicVideosRelationship](songsmusicvideosrelationship.md): A relationship from the song to its music videos.
- [Songs.Relationships.SongsStationRelationship](songsstationrelationship.md): A relationship from the song to its station.
