> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse)

# PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to resolve the repeat mode in a play media intent.

## Declaration

```
object PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse
```

## Properties

- `result` — `PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse.Result` (required): The result of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `PlayMediaIntentHandling.resolvePlaybackRepeatMode`

## Topics

### Specifying a Result

- [PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse.Result](playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse/result-data.dictionary.md): The result of resolving the repeat mode for a play media intent.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Resolving the Intended Repeat Mode

- [PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse.Result](playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse/result-data.dictionary.md): The result of resolving the repeat mode for a play media intent.
- [PlaybackRepeatModeResolutionResult](playbackrepeatmoderesolutionresult.md): Information about whether your service can identify the specified repeat mode.
- [PlaybackRepeatMode](playbackrepeatmode.md): The possible repeat modes for a media queue.
