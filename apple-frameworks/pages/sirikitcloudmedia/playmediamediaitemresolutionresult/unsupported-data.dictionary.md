> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediamediaitemresolutionresult/unsupported-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/playmediamediaitemresolutionresult/unsupported-data.dictionary)

# PlayMediaMediaItemResolutionResult.Unsupported

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The reason your service can’t play the requested media item.

## Declaration

```
object PlayMediaMediaItemResolutionResult.Unsupported
```

## Properties

- `reason` — `PlayMediaMediaItemUnsupportedReason`: The reason your service can’t play the requested media item.

<a id="Discussion"></a>

## Discussion

If you can’t find the media item the user specifies, don’t provide a reason. When the client receives an `Unsupported` object without a reason, it provides a generic failure message to the user.

## See Also

### Specifying a Result

- [PlayMediaMediaItemResolutionResult.Success](success-data.dictionary.md): A media item that successfully matches the intent.
- [PlayMediaMediaItemResolutionResult.Disambiguation](disambiguation-data.dictionary.md): A result that requires the user to choose from multiple media items before proceeding.
- [PlayMediaMediaItemResolutionResult.ConfirmationRequired](confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before proceeding.
