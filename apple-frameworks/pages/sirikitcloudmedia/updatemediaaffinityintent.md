> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinityintent](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinityintent)

# UpdateMediaAffinityIntent

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

An object that describes a user’s stated preference regarding media items.

## Declaration

```
object UpdateMediaAffinityIntent
```

## Properties

- `class` — `string` (required): The specific type of intent.
  **Allowed values:** `UpdateMediaAffinityIntent`
- `affinityType` — `MediaAffinityType`: The user’s preference for the media items.
- `mediaItems` — `[MediaItem]`: Specific media items the user expresses a preference for.
- `mediaSearch` — `MediaSearch`: The description of the media items the user expresses a preference for.

## Relationships

### Inherits From

- [Intent](intent.md)

## See Also

### Processing an Update Media Affinity Intent

- [UpdateMediaAffinityIntentHandlingInvocation](updatemediaaffinityintenthandlinginvocation.md): A request to process an update media affinity intent.
- [UpdateMediaAffinityIntentHandlingInvocationResponse](updatemediaaffinityintenthandlinginvocationresponse.md): The service’s response to a request to process an update media affinity intent.
