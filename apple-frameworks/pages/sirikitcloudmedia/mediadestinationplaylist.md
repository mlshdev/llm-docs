> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediadestinationplaylist](https://developer.apple.com/documentation/sirikitcloudmedia/mediadestinationplaylist)

# MediaDestinationPlaylist

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A playlist as a destination for an add media intent.

## Declaration

```
object MediaDestinationPlaylist
```

## Properties

- `mediaDestinationType` — `string` (required): The type of collection the user wants to store their media items in.
  **Allowed values:** `playlist`
- `playlistName` — `string` (required): The name of the playlist.
  **Minimum length:** `1`  
  **Maximum length:** `1000`

## Relationships

### Inherits From

- [MediaDestination](mediadestination.md)

## See Also

### Providing a Destination

- [AddMediaMediaDestinationResolutionResult.Success](addmediamediadestinationresolutionresult/success-data.dictionary.md): A media destination that successfully matches an intent.
- [MediaDestination](mediadestination.md): The user’s library or a playlist.
- [MediaDestinationLibrary](mediadestinationlibrary.md): The user’s library as a destination for an add media intent.
