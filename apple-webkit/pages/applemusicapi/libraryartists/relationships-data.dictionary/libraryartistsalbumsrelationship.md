> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryartists/relationships-data.dictionary/libraryartistsalbumsrelationship](https://developer.apple.com/documentation/applemusicapi/libraryartists/relationships-data.dictionary/libraryartistsalbumsrelationship)

# LibraryArtists.Relationships.LibraryArtistsAlbumsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the library artist to thier albums.

## Declaration

```
object LibraryArtists.Relationships.LibraryArtistsAlbumsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[LibraryAlbums]` (required): The albums for the library artist present in the user’s library.

## See Also

### Related Objects

- [LibraryArtists.Relationships.LibraryArtistsCatalogRelationship](libraryartistscatalogrelationship.md): A relationship from the library artist to their associated catalog content.
