> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylistcreationrequest/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/libraryplaylistcreationrequest/relationships-data.dictionary)

# LibraryPlaylistCreationRequest.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for a library playlist creation request object.

## Declaration

```
object LibraryPlaylistCreationRequest.Relationships
```

## Properties

- `tracks` — `LibraryPlaylistCreationRequest.Relationships.Tracks` (required): The songs and music videos the user adds to the playlist for the creation request.
- `parent` — `LibraryPlaylistCreationRequest.Relationships.Parent` (required): The library playlist folder which contains the created playlist.

## Topics

### Related Objects

- [LibraryPlaylistCreationRequest.Relationships.Parent](relationships-data.dictionary/parent-data.dictionary.md): Library playlist folder which contains the playlist that the user creates.
- [LibraryPlaylistCreationRequest.Relationships.Tracks](relationships-data.dictionary/tracks-data.dictionary.md): The songs and music videos to add to the created playlist’s tracklist.

## See Also

### Related Objects

- [LibraryPlaylistCreationRequest.Attributes](attributes-data.dictionary.md): The attributes for a library playlist creation request object.
