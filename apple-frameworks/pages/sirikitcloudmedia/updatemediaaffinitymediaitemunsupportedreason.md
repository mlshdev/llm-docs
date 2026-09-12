> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinitymediaitemunsupportedreason](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinitymediaitemunsupportedreason)

# UpdateMediaAffinityMediaItemUnsupportedReason

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

Reasons the media service can’t update information about the media item.

## Declaration

```
string UpdateMediaAffinityMediaItemUnsupportedReason
```

## Possible Values

- `loginRequired`: The user must log in to the service.
- `subscriptionRequired`: The user must have an active subscription.
- `unsupportedMediaType`: Your service doesn’t support tthe media item’s type.
- `explicitContentSettings`: The content settings don’t allow the user to access the media item.
- `regionRestriction`:
- `restrictedContent`:
- `serviceUnavailable`:

## See Also

### Identifying the Intended Media Items

- [UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse](updatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse.md): Your service’s response to a request to resolve media items in an update media affinity intent.
- [UpdateMediaAffinityMediaItemResolutionResult](updatemediaaffinitymediaitemresolutionresult.md): A media item that matches an update media affinity intent, or information about why your service can’t provide a media item.
