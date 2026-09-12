> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediamediadestinationresolutionresult/success-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/addmediamediadestinationresolutionresult/success-data.dictionary)

# AddMediaMediaDestinationResolutionResult.Success

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A media destination that successfully matches an intent.

## Declaration

```
object AddMediaMediaDestinationResolutionResult.Success
```

## Properties

- `resolvedMediaDestination` — `MediaDestination` (required): The user’s library or a playlist the user wants to add media items to.

## See Also

### Providing a Destination

- [MediaDestination](../mediadestination.md): The user’s library or a playlist.
- [MediaDestinationLibrary](../mediadestinationlibrary.md): The user’s library as a destination for an add media intent.
- [MediaDestinationPlaylist](../mediadestinationplaylist.md): A playlist as a destination for an add media intent.
