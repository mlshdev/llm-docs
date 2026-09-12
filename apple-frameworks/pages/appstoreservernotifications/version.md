> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/version](https://developer.apple.com/documentation/appstoreservernotifications/version)

# version

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.5+

A string that indicates the notification’s App Store Server Notifications version number.

## Declaration

```
string version
```

<a id="Discussion"></a>

## Discussion

The version string is `“2.0”`. It’s present in [responseBodyV2DecodedPayload](responsebodyv2decodedpayload.md) for version 2 notifications.

For more information about App Store Server Notification changes, see [App Store Server Notifications changelog](app-store-server-notifications-changelog.md).

## See Also

### Response types

- [notificationType](notificationtype.md): The type that describes the In-App Purchase or external purchase event for which the App Store sends the version 2 notification.
- [subtype](subtype.md): A string that provides details about select notification types in version 2.
- [signedDate](signeddate.md): The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
- [notificationUUID](notificationuuid.md): A unique identifier for the notification.
