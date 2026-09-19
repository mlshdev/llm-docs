> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/playbackrepeatmoderesolutionresult/success-data.dictionary

# PlaybackRepeatModeResolutionResult.Success

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A playback mode that successfully matches the intent.

## Declaration

```
object PlaybackRepeatModeResolutionResult.Success
```

## Properties

- `resolvedPlaybackRepeatMode` — `PlaybackRepeatMode` (required): The playback mode to apply when handling the intent.

## See Also

### Specifying a Result

- [PlaybackRepeatModeResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the playback mode before proceeding.
