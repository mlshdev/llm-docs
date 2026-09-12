> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playbackqueuelocationresolutionresult/confirmationrequired-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/playbackqueuelocationresolutionresult/confirmationrequired-data.dictionary)

# PlaybackQueueLocationResolutionResult.ConfirmationRequired

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to confirm the playback mode before proceeding.

## Declaration

```
object PlaybackQueueLocationResolutionResult.ConfirmationRequired
```

## Properties

- `playbackQueueLocationToConfirm` — `PlaybackQueueLocation` (required): A queue location for the user to confirm or reject.

## See Also

### Specifying a Result

- [PlaybackQueueLocationResolutionResult.Success](success-data.dictionary.md): A queue location that matches the intent.
