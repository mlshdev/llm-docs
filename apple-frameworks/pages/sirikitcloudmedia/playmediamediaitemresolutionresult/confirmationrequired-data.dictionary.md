> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediamediaitemresolutionresult/confirmationrequired-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/playmediamediaitemresolutionresult/confirmationrequired-data.dictionary)

# PlayMediaMediaItemResolutionResult.ConfirmationRequired

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to confirm the media item before proceeding.

## Declaration

```
object PlayMediaMediaItemResolutionResult.ConfirmationRequired
```

## Properties

- `mediaItemToConfirm` — `MediaItem` (required): A media item for the user to confirm or reject.

<a id="Discussion"></a>

## Discussion

Prefer to provide a successful result, even if you aren’t sure that you’re identifying the media item accurately. The user can cancel playback and try asking again.

## See Also

### Specifying a Result

- [PlayMediaMediaItemResolutionResult.Success](success-data.dictionary.md): A media item that successfully matches the intent.
- [PlayMediaMediaItemResolutionResult.Unsupported](unsupported-data.dictionary.md): The reason your service can’t play the requested media item.
- [PlayMediaMediaItemResolutionResult.Disambiguation](disambiguation-data.dictionary.md): A result that requires the user to choose from multiple media items before proceeding.
