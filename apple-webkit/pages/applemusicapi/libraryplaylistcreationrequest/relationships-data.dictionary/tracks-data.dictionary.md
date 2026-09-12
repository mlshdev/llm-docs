> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylistcreationrequest/relationships-data.dictionary/tracks-data.dictionary](https://developer.apple.com/documentation/applemusicapi/libraryplaylistcreationrequest/relationships-data.dictionary/tracks-data.dictionary)

# LibraryPlaylistCreationRequest.Relationships.Tracks

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The songs and music videos to add to the created playlist’s tracklist.

## Declaration

```
object LibraryPlaylistCreationRequest.Relationships.Tracks
```

## Properties

- `data` — `[LibraryPlaylistCreationRequest.Relationships.Tracks.Data]` (required): A dictionary that includes strings for the `identifier` and `type` of the new playlist.

## Topics

### Related Objects

- [LibraryPlaylistCreationRequest.Relationships.Tracks.Data](tracks-data.dictionary/data-data.dictionary.md): Data of the tracks too add to the created library playlist.

## See Also

### Related Objects

- [LibraryPlaylistCreationRequest.Relationships.Parent](parent-data.dictionary.md): Library playlist folder which contains the playlist that the user creates.
