> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediadestination](https://developer.apple.com/documentation/sirikitcloudmedia/mediadestination)

# MediaDestination

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The user’s library or a playlist.

## Declaration

```
object MediaDestination
```

## Properties

- `mediaDestinationType` — `string` (required): The type of collection the user wants to store their media items in.
  **Allowed values:** `library`, `playlist`

<a id="Discussion"></a>

## Discussion

A playlist can be either a [MediaItem](mediaitem.md) or a [MediaDestination](mediadestination.md). When the user adds a song to a playlist, the playlist is the [MediaDestination](mediadestination.md). When the user adds a playlist to their library, the playlist is a [MediaItem](mediaitem.md), and the user’s library is the [MediaDestination](mediadestination.md).

## Relationships

### Inherited By

- [MediaDestinationLibrary](mediadestinationlibrary.md)
- [MediaDestinationPlaylist](mediadestinationplaylist.md)

## See Also

### Providing a Destination

- [AddMediaMediaDestinationResolutionResult.Success](addmediamediadestinationresolutionresult/success-data.dictionary.md): A media destination that successfully matches an intent.
- [MediaDestinationLibrary](mediadestinationlibrary.md): The user’s library as a destination for an add media intent.
- [MediaDestinationPlaylist](mediadestinationplaylist.md): A playlist as a destination for an add media intent.
