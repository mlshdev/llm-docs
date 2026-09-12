> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/playlists/relationships-data.dictionary/playliststracksrelationship](https://developer.apple.com/documentation/applemusicapi/playlists/relationships-data.dictionary/playliststracksrelationship)

# Playlists.Relationships.PlaylistsTracksRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the playlist to its tracks.

## Declaration

```
object Playlists.Relationships.PlaylistsTracksRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[*]` (required): The ordered songs and music videos in the tracklist of the playlist.
  **Allowed types:** `MusicVideos`, `Songs`

## See Also

### Related Objects

- [Playlists.Relationships.PlaylistsCuratorRelationship](playlistscuratorrelationship.md): A relationship from the playlist to its curator.
- [Playlists.Relationships.PlaylistsLibraryRelationship](playlistslibraryrelationship.md): A relationship from the playlist to its library.
