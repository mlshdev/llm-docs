> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/playlists/relationships-data.dictionary/playlistscuratorrelationship](https://developer.apple.com/documentation/applemusicapi/playlists/relationships-data.dictionary/playlistscuratorrelationship)

# Playlists.Relationships.PlaylistsCuratorRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the playlist to its curator.

## Declaration

```
object Playlists.Relationships.PlaylistsCuratorRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[*]` (required): The curator for the playlist.
  **Allowed types:** `Activities`, `AppleCurators`, `Curators`

## See Also

### Related Objects

- [Playlists.Relationships.PlaylistsTracksRelationship](playliststracksrelationship.md): A relationship from the playlist to its tracks.
- [Playlists.Relationships.PlaylistsLibraryRelationship](playlistslibraryrelationship.md): A relationship from the playlist to its library.
