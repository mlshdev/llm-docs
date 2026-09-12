> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylistfolders](https://developer.apple.com/documentation/applemusicapi/libraryplaylistfolders)

# LibraryPlaylistFolders

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a library playlist folder.

## Declaration

```
object LibraryPlaylistFolders
```

## Properties

- `id` — `string` (required): The identifier for the library playlist folder.
- `type` — `string` (required): This value is always `library-playlist-folders`.
  **Allowed values:** `library-playlist-folders`
- `href` — `string` (required): The relative location for the library playlist folder resource.
- `attributes` — `LibraryPlaylistFolders.Attributes`: The attributes for the library-playlist-folders resource type.
- `relationships` — `LibraryPlaylistFolders.Relationships`: The relationships from library-playlist-folders to other resources.

## Topics

### Related Objects

- [LibraryPlaylistFolders.Attributes](libraryplaylistfolders/attributes-data.dictionary.md): A resource object that represents the attributes for a library playlist folder.
- [LibraryPlaylistFolders.Relationships](libraryplaylistfolders/relationships-data.dictionary.md): A resource Object that represents the relationships for a library playlist folder.

## See Also

### Handling the Response

- [Playlists](playlists.md): A resource object that represents a playlist.
- [PlaylistsResponse](playlistsresponse.md): The response to a playlists request.
- [LibraryPlaylists](libraryplaylists.md): A resource object that represents a library playlist.
- [LibraryPlaylistsResponse](libraryplaylistsresponse.md): The response to a library playlists request.
- [LibraryPlaylistsTracksRelationshipResponse](libraryplayliststracksrelationshipresponse.md): The response to a library playlists tracks relationship request.
- [LibraryPlaylistFoldersResponse](libraryplaylistfoldersresponse.md): The response to a library playlist folders request.
