> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediamediaitemunsupportedreason](https://developer.apple.com/documentation/sirikitcloudmedia/addmediamediaitemunsupportedreason)

# AddMediaMediaItemUnsupportedReason

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

Reasons the media service can’t add the media item to the user’s library or to a playlist.

## Declaration

```
string AddMediaMediaItemUnsupportedReason
```

## Possible Values

- `loginRequired`: The user must log in to the service.
- `subscriptionRequired`: The user must have an active subscription to access the media item.
- `unsupportedMediaType`: Your service doesn’t support the media item’s type.
- `explicitContentSettings`: The content settings don’t allow the user to access the media item.
- `restrictedContent`: The media item is restricted content.
- `regionRestriction`: The media item isn’t available in the user’s geographic region.
- `serviceUnavailable`: The media service is currently unavailable.

## See Also

### Reporting a Problem

- [AddMediaMediaItemResolutionResult.Unsupported](addmediamediaitemresolutionresult/unsupported-data.dictionary.md): The reason your service can’t add the media item to the user’s library or to a playlist.
