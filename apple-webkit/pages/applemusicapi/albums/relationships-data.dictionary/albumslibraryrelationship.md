> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums/relationships-data.dictionary/albumslibraryrelationship](https://developer.apple.com/documentation/applemusicapi/albums/relationships-data.dictionary/albumslibraryrelationship)

# Albums.Relationships.AlbumsLibraryRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the album to an associated library album.

## Declaration

```
object Albums.Relationships.AlbumsLibraryRelationship
```

## Properties

- `href` — `string`: The relative location to fetch the relationship directly.
- `next` — `string`: The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
- `data` — `[LibraryAlbums]` (required): The library content this album is associated with if added to the user’s library.

## See Also

### Related Objects

- [Albums.Relationships.AlbumsArtistsRelationship](albumsartistsrelationship.md): A relationship from the album to its artists.
- [Albums.Relationships.AlbumsGenresRelationship](albumsgenresrelationship.md): A relationship from the album to its genres.
- [Albums.Relationships.AlbumsTracksRelationship](albumstracksrelationship.md): A relationship from the album to its tracks.
- [Albums.Relationships.AlbumsRecordLabelsRelationship](albumsrecordlabelsrelationship.md): A relationship from the album to its associated record label.
