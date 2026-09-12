> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylists](https://developer.apple.com/documentation/applemusicapi/libraryplaylists)

# LibraryPlaylists

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a library playlist.

## Declaration

```
object LibraryPlaylists
```

## Properties

- `id` — `string` (required): The identifier for the library playlist.
- `type` — `string` (required): This value is always `library-playlists`.
  **Allowed values:** `library-playlists`
- `href` — `string` (required): The relative location for the library playlist resource.
- `attributes` — `LibraryPlaylists.Attributes`: The attributes for the library playlist.
- `relationships` — `LibraryPlaylists.Relationships`: The relationships for the library playlist.

## Topics

### Related Objects

- [LibraryPlaylists.Attributes](libraryplaylists/attributes-data.dictionary.md): The attributes for a library playlist resource.
- [LibraryPlaylists.Relationships](libraryplaylists/relationships-data.dictionary.md): The relationships for a library playlist resource.

## See Also

### Handling the Response

- [Playlists](playlists.md): A resource object that represents a playlist.
- [PlaylistsResponse](playlistsresponse.md): The response to a playlists request.
- [LibraryPlaylistsResponse](libraryplaylistsresponse.md): The response to a library playlists request.
- [LibraryPlaylistsTracksRelationshipResponse](libraryplayliststracksrelationshipresponse.md): The response to a library playlists tracks relationship request.
- [LibraryPlaylistFolders](libraryplaylistfolders.md): A resource object that represents a library playlist folder.
- [LibraryPlaylistFoldersResponse](libraryplaylistfoldersresponse.md): The response to a library playlist folders request.
