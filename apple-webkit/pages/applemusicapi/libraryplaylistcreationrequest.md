> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylistcreationrequest](https://developer.apple.com/documentation/applemusicapi/libraryplaylistcreationrequest)

# LibraryPlaylistCreationRequest

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A request to create a new playlist in a user’s library.

## Declaration

```
object LibraryPlaylistCreationRequest
```

## Properties

- `attributes` — `LibraryPlaylistCreationRequest.Attributes` (required): A dictionary that includes strings for the name and description of the new playlist.
- `relationships` — `LibraryPlaylistCreationRequest.Relationships`: An optional key including tracks for the new playlist.

## Topics

### Related Objects

- [LibraryPlaylistCreationRequest.Attributes](libraryplaylistcreationrequest/attributes-data.dictionary.md): The attributes for a library playlist creation request object.
- [LibraryPlaylistCreationRequest.Relationships](libraryplaylistcreationrequest/relationships-data.dictionary.md): The relationships for a library playlist creation request object.

## See Also

### Creating and Modifying User Playlists

- [Create a New Library Playlist](create-a-new-library-playlist.md): Create a new playlist in a user’s library.
- [Add Tracks to a Library Playlist](add-tracks-to-a-library-playlist.md): Add new tracks to the end of a library playlist.
- [Add a Resource to a Library](add-a-resource-to-a-library.md): Add a catalog resource to a user’s iCloud Music Library.
- [LibraryPlaylistTracksRequest](libraryplaylisttracksrequest.md): A request to add tracks to a library playlist.
