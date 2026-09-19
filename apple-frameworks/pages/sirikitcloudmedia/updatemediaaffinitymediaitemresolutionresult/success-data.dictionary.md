> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinitymediaitemresolutionresult/success-data.dictionary

# UpdateMediaAffinityMediaItemResolutionResult.Success

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A media item that successfully matches the intent.

## Declaration

```
object UpdateMediaAffinityMediaItemResolutionResult.Success
```

## Properties

- `resolvedMediaItem` — `MediaItem` (required): The song, album, podcast, or other media item that the user expresses a preference for.

## See Also

### Specifying the Result

- [UpdateMediaAffinityMediaItemResolutionResult.Unsupported](unsupported-data.dictionary.md): The reason your service can’t update information about the requested media item.
- [UpdateMediaAffinityMediaItemResolutionResult.Disambiguation](disambiguation-data.dictionary.md): A result that requires the user to choose from multiple media items before proceeding.
- [UpdateMediaAffinityMediaItemResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before proceeding.
