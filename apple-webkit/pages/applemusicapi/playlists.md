> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/playlists](https://developer.apple.com/documentation/applemusicapi/playlists)

# Playlists

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a playlist.

## Declaration

```
object Playlists
```

## Properties

- `id` — `string` (required): The identifier for the playlist.
- `type` — `string` (required): This value is always `playlists`.
  **Allowed values:** `playlists`
- `href` — `string` (required): The relative location for the playlist resource.
- `attributes` — `Playlists.Attributes`: The attributes for the playlist.
- `relationships` — `Playlists.Relationships`: The relationships for the playlist.
- `views` — `Playlists.Views`: The views for associations between playlists and other resources.

## Topics

### Related Objects

- [Playlists.Attributes](playlists/attributes-data.dictionary.md): The attributes for a playlist resource.
- [Playlists.Relationships](playlists/relationships-data.dictionary.md): The relationships for a playlist resource.
- [Playlists.Views](playlists/views-data.dictionary.md): The views for a music video resource.

## See Also

### Handling the Response

- [PlaylistsResponse](playlistsresponse.md): The response to a playlists request.
- [LibraryPlaylists](libraryplaylists.md): A resource object that represents a library playlist.
- [LibraryPlaylistsResponse](libraryplaylistsresponse.md): The response to a library playlists request.
- [LibraryPlaylistsTracksRelationshipResponse](libraryplayliststracksrelationshipresponse.md): The response to a library playlists tracks relationship request.
- [LibraryPlaylistFolders](libraryplaylistfolders.md): A resource object that represents a library playlist folder.
- [LibraryPlaylistFoldersResponse](libraryplaylistfoldersresponse.md): The response to a library playlist folders request.
