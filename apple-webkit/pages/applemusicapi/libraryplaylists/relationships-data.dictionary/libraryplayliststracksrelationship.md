> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylists/relationships-data.dictionary/libraryplayliststracksrelationship](https://developer.apple.com/documentation/applemusicapi/libraryplaylists/relationships-data.dictionary/libraryplayliststracksrelationship)

# LibraryPlaylists.Relationships.LibraryPlaylistsTracksRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the playlist to its tracks.

## Declaration

```
object LibraryPlaylists.Relationships.LibraryPlaylistsTracksRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[*]` (required): The ordered library songs and library music videos in the tracklist of the playlist.
  **Allowed types:** `LibraryMusicVideos`, `LibrarySongs`

## See Also

### Related Objects

- [LibraryPlaylists.Relationships.LibraryPlaylistsCatalogRelationship](libraryplaylistscatalogrelationship.md): A relationship from the playlist to its associated catalog content.
