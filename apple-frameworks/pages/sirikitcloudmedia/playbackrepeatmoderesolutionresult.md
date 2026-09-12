> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playbackrepeatmoderesolutionresult](https://developer.apple.com/documentation/sirikitcloudmedia/playbackrepeatmoderesolutionresult)

# PlaybackRepeatModeResolutionResult

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Information about whether your service can identify the specified repeat mode.

## Declaration

```
object PlaybackRepeatModeResolutionResult
```

## Properties

- `class` — `string`: The specific type of result.
  **Allowed values:** `PlaybackRepeatModeResolutionResult`
- `success` — `PlaybackRepeatModeResolutionResult.Success`: A repeat mode that successfully matches the intent.
- `confirmationRequired` — `PlaybackRepeatModeResolutionResult.ConfirmationRequired`: A repeat mode that the user must confirm or reject.

<a id="Discussion"></a>

## Discussion

Only provide one of the optional properties. If a client receives a result with more than one outcome, such as `needsValue` and `success`, it arbitrarily chooses one and ignores the rest.

## Topics

### Specifying a Result

- [PlaybackRepeatModeResolutionResult.Success](playbackrepeatmoderesolutionresult/success-data.dictionary.md): A playback mode that successfully matches the intent.
- [PlaybackRepeatModeResolutionResult.ConfirmationRequired](playbackrepeatmoderesolutionresult/confirmationrequired-data.dictionary.md): A result that requires the user to confirm the playback mode before proceeding.

## Relationships

### Inherits From

- [IntentResolutionResult](intentresolutionresult.md)

## See Also

### Resolving the Intended Repeat Mode

- [PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse](playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse.md): Your service’s response to a request to resolve the repeat mode in a play media intent.
- [PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse.Result](playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse/result-data.dictionary.md): The result of resolving the repeat mode for a play media intent.
- [PlaybackRepeatMode](playbackrepeatmode.md): The possible repeat modes for a media queue.
