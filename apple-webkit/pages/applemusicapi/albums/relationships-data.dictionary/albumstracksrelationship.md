> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums/relationships-data.dictionary/albumstracksrelationship](https://developer.apple.com/documentation/applemusicapi/albums/relationships-data.dictionary/albumstracksrelationship)

# Albums.Relationships.AlbumsTracksRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the album to its tracks.

## Declaration

```
object Albums.Relationships.AlbumsTracksRelationship
```

## Properties

- `data` — `[*]` (required): The ordered songs and music videos in the tracklist of the album.
  **Allowed types:** `MusicVideos`, `Songs`
- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.

## See Also

### Related Objects

- [Albums.Relationships.AlbumsArtistsRelationship](albumsartistsrelationship.md): A relationship from the album to its artists.
- [Albums.Relationships.AlbumsGenresRelationship](albumsgenresrelationship.md): A relationship from the album to its genres.
- [Albums.Relationships.AlbumsLibraryRelationship](albumslibraryrelationship.md): A relationship from the album to an associated library album.
- [Albums.Relationships.AlbumsRecordLabelsRelationship](albumsrecordlabelsrelationship.md): A relationship from the album to its associated record label.
