> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/artists/relationships-data.dictionary/artistsgenresrelationship](https://developer.apple.com/documentation/applemusicapi/artists/relationships-data.dictionary/artistsgenresrelationship)

# Artists.Relationships.ArtistsGenresRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the artist to its genres.

## Declaration

```
object Artists.Relationships.ArtistsGenresRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Genres]` (required): The artist’s associated genres.

## See Also

### Related Objects

- [Artists.Relationships.ArtistsAlbumsRelationship](artistsalbumsrelationship.md): A relationship from the artist to its albums.
- [Artists.Relationships.ArtistsMusicVideosRelationship](artistsmusicvideosrelationship.md): A relationship from the artist to its music videos.
- [Artists.Relationships.ArtistsPlaylistsRelationship](artistsplaylistsrelationship.md): A relationship from the artist to its playlists.
- [Artists.Relationships.ArtistsStationRelationship](artistsstationrelationship.md): A relationship from the artist to its station.
