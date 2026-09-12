> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediaintent](https://developer.apple.com/documentation/sirikitcloudmedia/addmediaintent)

# AddMediaIntent

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

An object that describes the user’s request to add media items to their library or to a specific playlist.

## Declaration

```
object AddMediaIntent
```

## Properties

- `class` — `string` (required): The specific type of intent.
  **Allowed values:** `AddMediaIntent`
- `mediaItems` — `[MediaItem]`: The media items to add to the user’s library or to a playlist.
- `mediaSearch` — `MediaSearch`: Parameters that describe the media items to add to the user’s library or to a playlist.
- `mediaDestination` — `MediaDestination`: The library or playlist to modify.

## Relationships

### Inherits From

- [Intent](intent.md)

## See Also

### Processing an Add Media Intent

- [AddMediaIntentHandlingInvocation](addmediaintenthandlinginvocation.md): A request to process an add media intent.
- [AddMediaIntentHandlingInvocationResponse](addmediaintenthandlinginvocationresponse.md): The service’s response to a request to process an add media intent.
