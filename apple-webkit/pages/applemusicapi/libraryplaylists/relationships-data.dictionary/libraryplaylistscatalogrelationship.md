> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylists/relationships-data.dictionary/libraryplaylistscatalogrelationship](https://developer.apple.com/documentation/applemusicapi/libraryplaylists/relationships-data.dictionary/libraryplaylistscatalogrelationship)

# LibraryPlaylists.Relationships.LibraryPlaylistsCatalogRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the playlist to its associated catalog content.

## Declaration

```
object LibraryPlaylists.Relationships.LibraryPlaylistsCatalogRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Playlists]` (required): The playlist from the Apple Music catalog associated with the library playlist, if any.

## See Also

### Related Objects

- [LibraryPlaylists.Relationships.LibraryPlaylistsTracksRelationship](libraryplayliststracksrelationship.md): A relationship from the playlist to its tracks.
