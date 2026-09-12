> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylisttracksrequest/data-data.dictionary](https://developer.apple.com/documentation/applemusicapi/libraryplaylisttracksrequest/data-data.dictionary)

# LibraryPlaylistTracksRequest.Data

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

An object that represents a single track when added to a library playlist in a request.

## Declaration

```
object LibraryPlaylistTracksRequest.Data
```

## Properties

- `id` — `string` (required): The unique identifier of the library playlist track.
- `type` — `string` (required): The type of the track to be added. The possible values are `library-music-videos`, `library-songs`,  `music-videos`, or `songs`.
  **Allowed values:** `library-music-videos`, `library-songs`, `music-videos`, `songs`
