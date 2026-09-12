> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplayliststracksrelationshipresponse](https://developer.apple.com/documentation/applemusicapi/libraryplayliststracksrelationshipresponse)

# LibraryPlaylistsTracksRelationshipResponse

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The response to a library playlists tracks relationship request.

## Declaration

```
object LibraryPlaylistsTracksRelationshipResponse
```

## Properties

- `data` — `[*]` (required): The [Songs](songs.md) or [MusicVideos](musicvideos.md) included in the response for the request.
  **Allowed types:** `LibraryMusicVideos`, `LibrarySongs`
- `meta` — `LibraryPlaylistsTracksRelationshipResponse.Meta`: Meta data for this object.
- `next` — `string`: The relative location to request the next page of resources in the collection, if additional resources are available for fetching.

## Topics

### Related Objects

- [LibraryPlaylistsTracksRelationshipResponse.Meta](libraryplayliststracksrelationshipresponse/meta-data.dictionary.md): An object that represents the meta information for response to a library playlists tracks relationship request.

## See Also

### Handling the Response

- [Playlists](playlists.md): A resource object that represents a playlist.
- [PlaylistsResponse](playlistsresponse.md): The response to a playlists request.
- [LibraryPlaylists](libraryplaylists.md): A resource object that represents a library playlist.
- [LibraryPlaylistsResponse](libraryplaylistsresponse.md): The response to a library playlists request.
- [LibraryPlaylistFolders](libraryplaylistfolders.md): A resource object that represents a library playlist folder.
- [LibraryPlaylistFoldersResponse](libraryplaylistfoldersresponse.md): The response to a library playlist folders request.
