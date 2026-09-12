> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryartists/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/libraryartists/relationships-data.dictionary)

# LibraryArtists.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for a library artist resource.

## Declaration

```
object LibraryArtists.Relationships
```

## Properties

- `albums` — `LibraryArtists.Relationships.LibraryArtistsAlbumsRelationship`: The library albums associated with the artist. By default, `albums` not included. It’s available only when fetching a single library artist resource by ID.

  Fetch limits: 25 default, 100 maximum
- `catalog` — `LibraryArtists.Relationships.LibraryArtistsCatalogRelationship`: The artist in the Apple Music catalog the library artist is associated with, when known.

  Fetch limits: None (associated with, at most, one catalog artist).

## Topics

### Related Objects

- [LibraryArtists.Relationships.LibraryArtistsAlbumsRelationship](relationships-data.dictionary/libraryartistsalbumsrelationship.md): A relationship from the library artist to thier albums.
- [LibraryArtists.Relationships.LibraryArtistsCatalogRelationship](relationships-data.dictionary/libraryartistscatalogrelationship.md): A relationship from the library artist to their associated catalog content.

## See Also

### Related Objects

- [LibraryArtists.Attributes](attributes-data.dictionary.md): The attributes for a library artist resource.
