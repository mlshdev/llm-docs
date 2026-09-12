> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playbackqueuelocationresolutionresult](https://developer.apple.com/documentation/sirikitcloudmedia/playbackqueuelocationresolutionresult)

# PlaybackQueueLocationResolutionResult

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Information about whether your service can resolve the specified queue location.

## Declaration

```
object PlaybackQueueLocationResolutionResult
```

## Properties

- `class` — `string`: The specific type of result.
  **Allowed values:** `PlaybackQueueLocationResolutionResult`
- `success` — `PlaybackQueueLocationResolutionResult.Success`: A queue location that matches the intent.
- `confirmationRequired` — `PlaybackQueueLocationResolutionResult.ConfirmationRequired`: A queue location for the user to confirm or reject before proceeding.

<a id="Discussion"></a>

## Discussion

Only provide one of the optional properties. If a client receives a result with more than one outcome, such as `needsValue` and `success`, it arbitrarily chooses one and ignores the rest.

## Topics

### Specifying a Result

- [PlaybackQueueLocationResolutionResult.Success](playbackqueuelocationresolutionresult/success-data.dictionary.md): A queue location that matches the intent.
- [PlaybackQueueLocationResolutionResult.ConfirmationRequired](playbackqueuelocationresolutionresult/confirmationrequired-data.dictionary.md): A result that requires the user to confirm the playback mode before proceeding.

## Relationships

### Inherits From

- [IntentResolutionResult](intentresolutionresult.md)

## See Also

### Resolving the Intended Queue Location

- [PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse](playmediaintenthandlingresolveplaybackqueuelocationinvocationresponse.md): Your service’s response to a request to resolve the queue location in a play media intent.
- [PlaybackQueueLocation](playbackqueuelocation.md): Possible locations in a playback queue to insert a media item.
