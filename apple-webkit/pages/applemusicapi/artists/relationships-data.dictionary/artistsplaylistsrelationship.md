> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/artists/relationships-data.dictionary/artistsplaylistsrelationship](https://developer.apple.com/documentation/applemusicapi/artists/relationships-data.dictionary/artistsplaylistsrelationship)

# Artists.Relationships.ArtistsPlaylistsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the artist to its playlists.

## Declaration

```
object Artists.Relationships.ArtistsPlaylistsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Playlists]` (required): The playlists for the artist.

## See Also

### Related Objects

- [Artists.Relationships.ArtistsAlbumsRelationship](artistsalbumsrelationship.md): A relationship from the artist to its albums.
- [Artists.Relationships.ArtistsGenresRelationship](artistsgenresrelationship.md): A relationship from the artist to its genres.
- [Artists.Relationships.ArtistsMusicVideosRelationship](artistsmusicvideosrelationship.md): A relationship from the artist to its music videos.
- [Artists.Relationships.ArtistsStationRelationship](artistsstationrelationship.md): A relationship from the artist to its station.
