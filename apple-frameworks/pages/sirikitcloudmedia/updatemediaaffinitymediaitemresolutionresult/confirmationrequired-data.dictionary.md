> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinitymediaitemresolutionresult/confirmationrequired-data.dictionary

# UpdateMediaAffinityMediaItemResolutionResult.ConfirmationRequired

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to confirm the media item before proceeding.

## Declaration

```
object UpdateMediaAffinityMediaItemResolutionResult.ConfirmationRequired
```

## Properties

- `mediaItemToConfirm` — `MediaItem` (required): A media item for the user to confirm or reject.

## See Also

### Specifying the Result

- [UpdateMediaAffinityMediaItemResolutionResult.Success](success-data.dictionary.md): A media item that successfully matches the intent.
- [UpdateMediaAffinityMediaItemResolutionResult.Unsupported](unsupported-data.dictionary.md): The reason your service can’t update information about the requested media item.
- [UpdateMediaAffinityMediaItemResolutionResult.Disambiguation](disambiguation-data.dictionary.md): A result that requires the user to choose from multiple media items before proceeding.
