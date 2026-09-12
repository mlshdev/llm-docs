> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylisttracksrequest](https://developer.apple.com/documentation/applemusicapi/libraryplaylisttracksrequest)

# LibraryPlaylistTracksRequest

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A request to add tracks to a library playlist.

## Declaration

```
object LibraryPlaylistTracksRequest
```

## Properties

- `data` — `[LibraryPlaylistTracksRequest.Data]` (required): A list of dictionaries with information about the tracks to add.

## Topics

### Related Objects

- [LibraryPlaylistTracksRequest.Data](libraryplaylisttracksrequest/data-data.dictionary.md): An object that represents a single track when added to a library playlist in a request.

## See Also

### Creating and Modifying User Playlists

- [Create a New Library Playlist](create-a-new-library-playlist.md): Create a new playlist in a user’s library.
- [Add Tracks to a Library Playlist](add-tracks-to-a-library-playlist.md): Add new tracks to the end of a library playlist.
- [Add a Resource to a Library](add-a-resource-to-a-library.md): Add a catalog resource to a user’s iCloud Music Library.
- [LibraryPlaylistCreationRequest](libraryplaylistcreationrequest.md): A request to create a new playlist in a user’s library.
