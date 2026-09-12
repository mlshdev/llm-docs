> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums/relationships-data.dictionary/albumsartistsrelationship](https://developer.apple.com/documentation/applemusicapi/albums/relationships-data.dictionary/albumsartistsrelationship)

# Albums.Relationships.AlbumsArtistsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the album to its artists.

## Declaration

```
object Albums.Relationships.AlbumsArtistsRelationship
```

## Properties

- `href` — `string`: The relative location to fetch the relationship directly.
- `next` — `string`: The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
- `data` — `[Artists]` (required): The artists for the album.

## See Also

### Related Objects

- [Albums.Relationships.AlbumsGenresRelationship](albumsgenresrelationship.md): A relationship from the album to its genres.
- [Albums.Relationships.AlbumsTracksRelationship](albumstracksrelationship.md): A relationship from the album to its tracks.
- [Albums.Relationships.AlbumsLibraryRelationship](albumslibraryrelationship.md): A relationship from the album to an associated library album.
- [Albums.Relationships.AlbumsRecordLabelsRelationship](albumsrecordlabelsrelationship.md): A relationship from the album to its associated record label.
