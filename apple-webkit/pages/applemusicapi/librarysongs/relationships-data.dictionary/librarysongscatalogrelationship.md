> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/librarysongs/relationships-data.dictionary/librarysongscatalogrelationship](https://developer.apple.com/documentation/applemusicapi/librarysongs/relationships-data.dictionary/librarysongscatalogrelationship)

# LibrarySongs.Relationships.LibrarySongsCatalogRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the library song to its associated catalog content.

## Declaration

```
object LibrarySongs.Relationships.LibrarySongsCatalogRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Songs]` (required): The song from the Apple Music catalog associated with the library song, if any.

## See Also

### Related Objects

- [LibrarySongs.Relationships.LibrarySongsAlbumsRelationship](librarysongsalbumsrelationship.md): A relationship from the library song to its albums.
- [LibrarySongs.Relationships.LibrarySongsArtistsRelationship](librarysongsartistsrelationship.md): A relationship from the library song to its artists.
