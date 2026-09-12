> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryalbums/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/libraryalbums/relationships-data.dictionary)

# LibraryAlbums.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for a library album object.

## Declaration

```
object LibraryAlbums.Relationships
```

## Properties

- `artists` — `LibraryAlbums.Relationships.LibraryAlbumsArtistsRelationship`: The library artists associated with the album. By default, `artists` not included.

  Fetch limits: 10 default, 10 maximum
- `catalog` — `LibraryAlbums.Relationships.LibraryAlbumsCatalogRelationship`: The album in the Apple Music catalog the library album is associated with, when known.

  Fetch limits: None (associated with at most one catalog album)
- `tracks` — `LibraryAlbums.Relationships.LibraryAlbumsTracksRelationship`: The library songs and library music videos on the album. Only available when fetching single library album resource by ID. By default, `tracks` includes objects.

  Fetch limits: 300 default, 300 maximum.

## Topics

### Related Objects

- [LibraryAlbums.Relationships.LibraryAlbumsArtistsRelationship](relationships-data.dictionary/libraryalbumsartistsrelationship.md): A relationship from the library album to its artist.
- [LibraryAlbums.Relationships.LibraryAlbumsCatalogRelationship](relationships-data.dictionary/libraryalbumscatalogrelationship.md): A relationship from the library album to its associated catalog content.
- [LibraryAlbums.Relationships.LibraryAlbumsTracksRelationship](relationships-data.dictionary/libraryalbumstracksrelationship.md): A relationship from the library album to its tracks.

## See Also

### Related Objects

- [LibraryAlbums.Attributes](attributes-data.dictionary.md): The attributes for a library album resource.
