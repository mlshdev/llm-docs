> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinitymediaitemresolutionresult/disambiguation-data.dictionary

# UpdateMediaAffinityMediaItemResolutionResult.Disambiguation

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to choose from multiple media items before proceeding.

## Declaration

```
object UpdateMediaAffinityMediaItemResolutionResult.Disambiguation
```

## Properties

- `mediaItemsToDisambiguate` — `[MediaItem]` (required): Media items that might match the user’s intent.

## See Also

### Specifying the Result

- [UpdateMediaAffinityMediaItemResolutionResult.Success](success-data.dictionary.md): A media item that successfully matches the intent.
- [UpdateMediaAffinityMediaItemResolutionResult.Unsupported](unsupported-data.dictionary.md): The reason your service can’t update information about the requested media item.
- [UpdateMediaAffinityMediaItemResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before proceeding.
