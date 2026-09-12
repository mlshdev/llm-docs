> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/notificationhistoryresponseitem](https://developer.apple.com/documentation/appstoreserverapi/notificationhistoryresponseitem)

# notificationHistoryResponseItem

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.5+

The App Store server notification history record, including the signed notification payload and the result of the server’s first send attempt.

## Declaration

```
object notificationHistoryResponseItem
```

## Properties

- `sendAttempts` — `[sendAttemptItem]`: An array of information the App Store server records for its attempts to send a notification to your server. The maximum number of entries in the array is six.
- `signedPayload` — `signedPayload`: The cryptographically signed payload, in JSON Web Signature (JWS) format, containing the original response body of a version 2 notification. For more information, see [signedPayload](../appstoreservernotifications/signedpayload.md) in [App Store Server Notifications](../appstoreservernotifications.md).
- `firstSendAttemptResult` — `string`: The result of the App Store server’s first attempt to send the notification to your server’s [App Store Server Notifications V2](../appstoreservernotifications/app-store-server-notifications-v2.md) endpoint.

  Use the earliest [sendAttemptItem](sendattemptitem.md) in the `sendAttempts` array instead.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

## Topics

### Data types

- [sendAttemptResult](sendattemptresult.md): The success or error information the App Store server records when it attempts to send an App Store server notification to your server.
- [sendAttemptItem](sendattemptitem.md): The success or error information and the date the App Store server records when it attempts to send a server notification to your server.
- [signedPayload](signedpayload.md): A cryptographically signed payload, in JSON Web Signature (JWS) format, containing the response body for a version 2 notification.

## See Also

### App Store Server Notifications history

- [Get Notification History](get-notification-history.md): Get a list of notifications that the App Store server attempted to send to your server.
- [NotificationHistoryRequest](notificationhistoryrequest.md): The request body for notification history.
- [NotificationHistoryResponse](notificationhistoryresponse.md): A response that contains the App Store Server Notifications history for your app.
