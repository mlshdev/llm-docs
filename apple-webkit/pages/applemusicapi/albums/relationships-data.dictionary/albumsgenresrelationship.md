> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums/relationships-data.dictionary/albumsgenresrelationship](https://developer.apple.com/documentation/applemusicapi/albums/relationships-data.dictionary/albumsgenresrelationship)

# Albums.Relationships.AlbumsGenresRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the album to its genres.

## Declaration

```
object Albums.Relationships.AlbumsGenresRelationship
```

## Properties

- `href` — `string`: The relative location to fetch the relationship directly.
- `next` — `string`: The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
- `data` — `[Genres]` (required): The album’s associated genre.

## See Also

### Related Objects

- [Albums.Relationships.AlbumsArtistsRelationship](albumsartistsrelationship.md): A relationship from the album to its artists.
- [Albums.Relationships.AlbumsTracksRelationship](albumstracksrelationship.md): A relationship from the album to its tracks.
- [Albums.Relationships.AlbumsLibraryRelationship](albumslibraryrelationship.md): A relationship from the album to an associated library album.
- [Albums.Relationships.AlbumsRecordLabelsRelationship](albumsrecordlabelsrelationship.md): A relationship from the album to its associated record label.
