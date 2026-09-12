> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediamediaitemresolutionresult/disambiguation-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/addmediamediaitemresolutionresult/disambiguation-data.dictionary)

# AddMediaMediaItemResolutionResult.Disambiguation

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to choose which media item they want to add to their library or to a playlist.

## Declaration

```
object AddMediaMediaItemResolutionResult.Disambiguation
```

## Properties

- `mediaItemsToDisambiguate` — `[MediaItem]` (required): Media items that might match the user’s intent.

## See Also

### Clarifying a Possible Match

- [AddMediaMediaItemResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before you add it to their library or to a playlist.
