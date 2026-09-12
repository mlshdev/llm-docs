> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediadestinationlibrary](https://developer.apple.com/documentation/sirikitcloudmedia/mediadestinationlibrary)

# MediaDestinationLibrary

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The user’s library as a destination for an add media intent.

## Declaration

```
object MediaDestinationLibrary
```

## Properties

- `mediaDestinationType` — `string` (required): The type of collection the user wants to store their media items in.
  **Allowed values:** `library`

## Relationships

### Inherits From

- [MediaDestination](mediadestination.md)

## See Also

### Providing a Destination

- [AddMediaMediaDestinationResolutionResult.Success](addmediamediadestinationresolutionresult/success-data.dictionary.md): A media destination that successfully matches an intent.
- [MediaDestination](mediadestination.md): The user’s library or a playlist.
- [MediaDestinationPlaylist](mediadestinationplaylist.md): A playlist as a destination for an add media intent.
