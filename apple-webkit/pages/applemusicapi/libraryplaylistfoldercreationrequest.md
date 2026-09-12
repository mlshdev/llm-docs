> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylistfoldercreationrequest](https://developer.apple.com/documentation/applemusicapi/libraryplaylistfoldercreationrequest)

# LibraryPlaylistFolderCreationRequest

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

Request object to create a new library playlist folder.

## Declaration

```
object LibraryPlaylistFolderCreationRequest
```

## Properties

- `attributes` — `LibraryPlaylistFolderCreationRequest.Attributes` (required): The attributes of the library playlist folder creation request.
- `relationships` — `LibraryPlaylistFolderCreationRequest.Relationships`: The relationships of the library playlist folder creation request.

## Topics

### Related Objects

- [LibraryPlaylistFolderCreationRequest.Attributes](libraryplaylistfoldercreationrequest/attributes-data.dictionary.md): The attributes for a library playlist folder creation request object.
- [LibraryPlaylistFolderCreationRequest.Relationships](libraryplaylistfoldercreationrequest/relationships-data.dictionary.md): The relationships of the library playlist folder of the creation request.

## See Also

### Handling Library Playlist Folders

- [Get Root Library Playlists Folder](get-root-library-playlists-folder.md): Fetch the root library playlists folder for the user.
- [Get a Library Playlist Folder](get-a-library-playlist-folder.md): Fetch a library playlist folder by using its identifier.
- [Get a Library Playlist Folder’s Relationship Directly by Name](fetch-a-relationship-on-this-resource-by-name-r5gv.md): Fetch a library playlist folder’s relationship by using its identifier.
- [Get Multiple Library Playlist Folders](get-multiple-library-playlist-folders.md): Fetch one or more library playlist folders by using their identifiers.
- [Create a New Library Playlist Folder](create-a-new-library-playlist-folder.md): Create a new playlist folder in a user’s library.
