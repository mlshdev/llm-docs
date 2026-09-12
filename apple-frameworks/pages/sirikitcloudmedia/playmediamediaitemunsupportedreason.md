> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediamediaitemunsupportedreason](https://developer.apple.com/documentation/sirikitcloudmedia/playmediamediaitemunsupportedreason)

# PlayMediaMediaItemUnsupportedReason

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

Reasons the media service can’t play the media item.

## Declaration

```
string PlayMediaMediaItemUnsupportedReason
```

## Possible Values

- `loginRequired`: The user must log in to the service.
- `subscriptionRequired`: The user must have an active subscription to play the media item.
- `unsupportedMediaType`: Your service doesn’t support the media item’s type.
- `explicitContentSettings`: The content settings don’t allow the user to play the media item.
- `restrictedContent`: The media item is restricted content.
- `regionRestriction`: The media item isn’t available in the user’s geographic location.

## See Also

### Resolving a Media Item

- [PlayMediaIntentHandlingResolveMediaItemsInvocationResponse](playmediaintenthandlingresolvemediaitemsinvocationresponse.md): Your service’s response to a request to resolve media items in a play media intent.
- [PlayMediaMediaItemResolutionResult](playmediamediaitemresolutionresult.md): A media item that matches a play media intent, or information about why your service can’t provide a media item.
