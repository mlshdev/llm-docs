> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintenthandlingresolveplaybackqueuelocationinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolveplaybackqueuelocationinvocationresponse)

# PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to resolve the queue location in a play media intent.

## Declaration

```
object PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse
```

## Properties

- `result` — `PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse.Result` (required): The result of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `PlayMediaIntentHandling.resolvePlaybackQueueLocation`

## Topics

### Specifying a Result

- [PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse.Result](playmediaintenthandlingresolveplaybackqueuelocationinvocationresponse/result-data.dictionary.md): The result of resolving the queue location for a play media intent.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Resolving the Intended Queue Location

- [PlaybackQueueLocationResolutionResult](playbackqueuelocationresolutionresult.md): Information about whether your service can resolve the specified queue location.
- [PlaybackQueueLocation](playbackqueuelocation.md): Possible locations in a playback queue to insert a media item.
