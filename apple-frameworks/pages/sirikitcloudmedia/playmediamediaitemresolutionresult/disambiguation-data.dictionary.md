> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediamediaitemresolutionresult/disambiguation-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/playmediamediaitemresolutionresult/disambiguation-data.dictionary)

# PlayMediaMediaItemResolutionResult.Disambiguation

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to choose from multiple media items before proceeding.

## Declaration

```
object PlayMediaMediaItemResolutionResult.Disambiguation
```

## Properties

- `mediaItemsToDisambiguate` — `[MediaItem]` (required): Media items that might match the user’s intent.

## See Also

### Specifying a Result

- [PlayMediaMediaItemResolutionResult.Success](success-data.dictionary.md): A media item that successfully matches the intent.
- [PlayMediaMediaItemResolutionResult.Unsupported](unsupported-data.dictionary.md): The reason your service can’t play the requested media item.
- [PlayMediaMediaItemResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before proceeding.
