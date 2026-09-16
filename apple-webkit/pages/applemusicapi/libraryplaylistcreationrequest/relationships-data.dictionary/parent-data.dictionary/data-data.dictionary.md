> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemusicapi/libraryplaylistcreationrequest/relationships-data.dictionary/parent-data.dictionary/data-data.dictionary

# LibraryPlaylistCreationRequest.Relationships.Parent.Data

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

Data of the library playlist folder which contains the created library playlist that the user creates.

## Declaration

```
object LibraryPlaylistCreationRequest.Relationships.Parent.Data
```

## Properties

- `id` — `string` (required): The unique identifier for the library playlist folder.
- `type` — `string` (required): The type of the track to be added.
  **Allowed values:** `library-playlist-folders`
