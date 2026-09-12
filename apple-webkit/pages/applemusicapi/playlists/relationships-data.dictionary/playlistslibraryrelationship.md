> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/playlists/relationships-data.dictionary/playlistslibraryrelationship](https://developer.apple.com/documentation/applemusicapi/playlists/relationships-data.dictionary/playlistslibraryrelationship)

# Playlists.Relationships.PlaylistsLibraryRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the playlist to its library.

## Declaration

```
object Playlists.Relationships.PlaylistsLibraryRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[LibraryPlaylists]` (required): The library for the playlist.

## See Also

### Related Objects

- [Playlists.Relationships.PlaylistsCuratorRelationship](playlistscuratorrelationship.md): A relationship from the playlist to its curator.
- [Playlists.Relationships.PlaylistsTracksRelationship](playliststracksrelationship.md): A relationship from the playlist to its tracks.
