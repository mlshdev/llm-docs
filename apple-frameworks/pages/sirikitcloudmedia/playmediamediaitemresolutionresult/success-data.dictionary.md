> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediamediaitemresolutionresult/success-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/playmediamediaitemresolutionresult/success-data.dictionary)

# PlayMediaMediaItemResolutionResult.Success

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A media item that successfully matches the intent.

## Declaration

```
object PlayMediaMediaItemResolutionResult.Success
```

## Properties

- `resolvedMediaItem` — `MediaItem` (required): The song, album, podcast, or other media item that the user wants to play.

## See Also

### Specifying a Result

- [PlayMediaMediaItemResolutionResult.Unsupported](unsupported-data.dictionary.md): The reason your service can’t play the requested media item.
- [PlayMediaMediaItemResolutionResult.Disambiguation](disambiguation-data.dictionary.md): A result that requires the user to choose from multiple media items before proceeding.
- [PlayMediaMediaItemResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before proceeding.
