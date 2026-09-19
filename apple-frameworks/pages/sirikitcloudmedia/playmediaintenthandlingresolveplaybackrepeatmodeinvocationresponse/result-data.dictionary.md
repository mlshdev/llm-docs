> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse/result-data.dictionary

# PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse.Result

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The result of resolving the repeat mode for a play media intent.

## Declaration

```
object PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse.Result
```

## Properties

- `resolutionResult` — `PlaybackRepeatModeResolutionResult` (required): The result of resolving the repeat mode for a play media intent.

## See Also

### Resolving the Intended Repeat Mode

- [PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse](../playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse.md): Your service’s response to a request to resolve the repeat mode in a play media intent.
- [PlaybackRepeatModeResolutionResult](../playbackrepeatmoderesolutionresult.md): Information about whether your service can identify the specified repeat mode.
- [PlaybackRepeatMode](../playbackrepeatmode.md): The possible repeat modes for a media queue.
