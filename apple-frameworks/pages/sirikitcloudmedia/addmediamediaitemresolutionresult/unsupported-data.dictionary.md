> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediamediaitemresolutionresult/unsupported-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/addmediamediaitemresolutionresult/unsupported-data.dictionary)

# AddMediaMediaItemResolutionResult.Unsupported

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The reason your service can’t add the media item to the user’s library or to a playlist.

## Declaration

```
object AddMediaMediaItemResolutionResult.Unsupported
```

## Properties

- `reason` — `AddMediaMediaItemUnsupportedReason`: The reason your service can’t add the media item to the user’s library or to a playlist.

<a id="Discussion"></a>

## Discussion

If you can’t find the media item the user specifies, don’t provide a reason. When the client receives an [AddMediaMediaItemResolutionResult.Unsupported](unsupported-data.dictionary.md) object without a reason, the client provides a generic failure message to the user.

## See Also

### Reporting a Problem

- [AddMediaMediaItemUnsupportedReason](../addmediamediaitemunsupportedreason.md): Reasons the media service can’t add the media item to the user’s library or to a playlist.
