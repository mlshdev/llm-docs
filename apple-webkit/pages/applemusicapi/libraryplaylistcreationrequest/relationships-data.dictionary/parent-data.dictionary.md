> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylistcreationrequest/relationships-data.dictionary/parent-data.dictionary](https://developer.apple.com/documentation/applemusicapi/libraryplaylistcreationrequest/relationships-data.dictionary/parent-data.dictionary)

# LibraryPlaylistCreationRequest.Relationships.Parent

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

Library playlist folder which contains the playlist that the user creates.

## Declaration

```
object LibraryPlaylistCreationRequest.Relationships.Parent
```

## Properties

- `data` — `[LibraryPlaylistCreationRequest.Relationships.Parent.Data]` (required): A dictionary that includes strings for the `identifier` and `type` of the library playlist folder.

## Topics

### Related Objects

- [LibraryPlaylistCreationRequest.Relationships.Parent.Data](parent-data.dictionary/data-data.dictionary.md): Data of the library playlist folder which contains the created library playlist that the user creates.

## See Also

### Related Objects

- [LibraryPlaylistCreationRequest.Relationships.Tracks](tracks-data.dictionary.md): The songs and music videos to add to the created playlist’s tracklist.
