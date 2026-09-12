> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylists/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/libraryplaylists/relationships-data.dictionary)

# LibraryPlaylists.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for a library playlist resource.

## Declaration

```
object LibraryPlaylists.Relationships
```

## Properties

- `catalog` — `LibraryPlaylists.Relationships.LibraryPlaylistsCatalogRelationship`: The corresponding playlist in the Apple Music catalog the playlist is associated with.

  Fetch limits: None (associated with at most one catalog playlist).
- `tracks` — `LibraryPlaylists.Relationships.LibraryPlaylistsTracksRelationship`: The library songs and library music videos included in the playlist. By default, `tracks` not included. Only available when fetching a single library playlist resource by ID.

  Fetch limits: 100 default, 100 maximum.

## Topics

### Related Objects

- [LibraryPlaylists.Relationships.LibraryPlaylistsCatalogRelationship](relationships-data.dictionary/libraryplaylistscatalogrelationship.md): A relationship from the playlist to its associated catalog content.
- [LibraryPlaylists.Relationships.LibraryPlaylistsTracksRelationship](relationships-data.dictionary/libraryplayliststracksrelationship.md): A relationship from the playlist to its tracks.

## See Also

### Related Objects

- [LibraryPlaylists.Attributes](attributes-data.dictionary.md): The attributes for a library playlist resource.
