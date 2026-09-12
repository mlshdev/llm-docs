> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylistcreationrequest/relationships-data.dictionary/tracks-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/applemusicapi/libraryplaylistcreationrequest/relationships-data.dictionary/tracks-data.dictionary/data-data.dictionary)

# LibraryPlaylistCreationRequest.Relationships.Tracks.Data

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

Data of the tracks too add to the created library playlist.

## Declaration

```
object LibraryPlaylistCreationRequest.Relationships.Tracks.Data
```

## Properties

- `id` — `string` (required): The unique identifier for the track. This ID can be a catalog identifier or a library identifier, depending on the track type.
- `type` — `string` (required): The type of the track to be added.
  **Allowed values:** `library-music-videos`, `library-songs`, `music-videos`, `songs`
