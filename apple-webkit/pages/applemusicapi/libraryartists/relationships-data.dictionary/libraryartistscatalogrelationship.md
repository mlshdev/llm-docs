> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryartists/relationships-data.dictionary/libraryartistscatalogrelationship](https://developer.apple.com/documentation/applemusicapi/libraryartists/relationships-data.dictionary/libraryartistscatalogrelationship)

# LibraryArtists.Relationships.LibraryArtistsCatalogRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the library artist to their associated catalog content.

## Declaration

```
object LibraryArtists.Relationships.LibraryArtistsCatalogRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Artists]` (required): The artist from the Apple Music catalog associated with the library artist, if any.

## See Also

### Related Objects

- [LibraryArtists.Relationships.LibraryArtistsAlbumsRelationship](libraryartistsalbumsrelationship.md): A relationship from the library artist to thier albums.
