> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryalbums/relationships-data.dictionary/libraryalbumstracksrelationship](https://developer.apple.com/documentation/applemusicapi/libraryalbums/relationships-data.dictionary/libraryalbumstracksrelationship)

# LibraryAlbums.Relationships.LibraryAlbumsTracksRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the library album to its tracks.

## Declaration

```
object LibraryAlbums.Relationships.LibraryAlbumsTracksRelationship
```

## Properties

- `href` — `string`: The relative location to fetch the relationship directly.
- `next` — `string`: The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
- `data` — `[*]` (required): The songs and music videos from the library album’s tracklist added to the user’s library.
  **Allowed types:** `LibraryMusicVideos`, `LibrarySongs`

## See Also

### Related Objects

- [LibraryAlbums.Relationships.LibraryAlbumsArtistsRelationship](libraryalbumsartistsrelationship.md): A relationship from the library album to its artist.
- [LibraryAlbums.Relationships.LibraryAlbumsCatalogRelationship](libraryalbumscatalogrelationship.md): A relationship from the library album to its associated catalog content.
