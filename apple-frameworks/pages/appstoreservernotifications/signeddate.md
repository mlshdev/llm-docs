> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/signeddate](https://developer.apple.com/documentation/appstoreservernotifications/signeddate)

# signedDate

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.

## Declaration

```
timestamp signedDate
```

<a id="Discussion"></a>

## Discussion

This timestamp indicates the time the system signs the data before it sends the notification to your server. The notification payload contains a snapshot of the state of the transaction at this time.

This timestamp remains the same if the system resends the notification during a retry. For more information about retries, see [Responding to App Store Server Notifications](responding-to-app-store-server-notifications.md).

If you process multiple notifications for the same transaction ID, use the notification with the most recent `signedDate`, because it contains the most recent snapshot of the transaction’s status.

## See Also

### Response types

- [notificationType](notificationtype.md): The type that describes the In-App Purchase or external purchase event for which the App Store sends the version 2 notification.
- [subtype](subtype.md): A string that provides details about select notification types in version 2.
- [version](version.md): A string that indicates the notification’s App Store Server Notifications version number.
- [notificationUUID](notificationuuid.md): A unique identifier for the notification.
