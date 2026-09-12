> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/notificationuuid](https://developer.apple.com/documentation/appstoreservernotifications/notificationuuid)

# notificationUUID

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

A unique identifier for the notification.

## Declaration

```
string notificationUUID
```

<a id="Discussion"></a>

## Discussion

The App Store server assigns a unique identifer to each notification it sends. Use this value to identify, and ignore, duplicate notifications.

## See Also

### Response types

- [notificationType](notificationtype.md): The type that describes the In-App Purchase or external purchase event for which the App Store sends the version 2 notification.
- [subtype](subtype.md): A string that provides details about select notification types in version 2.
- [version](version.md): A string that indicates the notification’s App Store Server Notifications version number.
- [signedDate](signeddate.md): The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
