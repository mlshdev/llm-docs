> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/sendtestnotificationresponse](https://developer.apple.com/documentation/appstoreserverapi/sendtestnotificationresponse)

# SendTestNotificationResponse

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.0+

A response that contains the test notification token.

## Declaration

```
object SendTestNotificationResponse
```

## Properties

- `testNotificationToken` — `testNotificationToken`: The test notification token that uniquely identifies the notification test that App Store Server Notifications sends to your server.

<a id="Discussion"></a>

## Discussion

The [Request a Test Notification](request-a-test-notification.md) endpoint returns this response, which includes a [testNotificationToken](https://developer.apple.com/documentation/appstoreserverapi/sendtestnotificationresponse/testnotificationtoken) value to reference the test associated with your request. When you request a test notification, the App Store server sends a notification with the `TEST` [notificationType](../appstoreservernotifications/notificationtype.md) to your server. To learn the result of the App Store server’s attempt to send the `TEST` notification, call [Get Test Notification Status](get-test-notification-status.md) with the [testNotificationToken](https://developer.apple.com/documentation/appstoreserverapi/sendtestnotificationresponse/testnotificationtoken).

For more information about notifications, see [App Store Server Notifications](../appstoreservernotifications.md).

## Topics

### Data types

- [testNotificationToken](testnotificationtoken.md): A unique identifier for a notification test that the App Store server sends to your server.

## See Also

### App Store Server Notifications testing

- [Request a Test Notification](request-a-test-notification.md): Ask App Store Server Notifications to send a test notification to your server.
- [Get Test Notification Status](get-test-notification-status.md): Check the status of the test App Store server notification sent to your server.
- [CheckTestNotificationResponse](checktestnotificationresponse.md): A response that contains the contents of the App Store server’s test notification and the result from your server.
