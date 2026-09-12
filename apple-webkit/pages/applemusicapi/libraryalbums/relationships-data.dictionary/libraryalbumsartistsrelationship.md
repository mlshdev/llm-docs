> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryalbums/relationships-data.dictionary/libraryalbumsartistsrelationship](https://developer.apple.com/documentation/applemusicapi/libraryalbums/relationships-data.dictionary/libraryalbumsartistsrelationship)

# LibraryAlbums.Relationships.LibraryAlbumsArtistsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the library album to its artist.

## Declaration

```
object LibraryAlbums.Relationships.LibraryAlbumsArtistsRelationship
```

## Properties

- `href` — `string`: The relative location to fetch the relationship directly.
- `next` — `string`: The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
- `data` — `[LibraryArtists]` (required): The library artists for the library album.

## See Also

### Related Objects

- [LibraryAlbums.Relationships.LibraryAlbumsCatalogRelationship](libraryalbumscatalogrelationship.md): A relationship from the library album to its associated catalog content.
- [LibraryAlbums.Relationships.LibraryAlbumsTracksRelationship](libraryalbumstracksrelationship.md): A relationship from the library album to its tracks.
