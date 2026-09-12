> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/checktestnotificationresponse](https://developer.apple.com/documentation/appstoreserverapi/checktestnotificationresponse)

# CheckTestNotificationResponse

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.5+

A response that contains the contents of the App Store server’s test notification and the result from your server.

## Declaration

```
object CheckTestNotificationResponse
```

## Properties

- `sendAttempts` — `[sendAttemptItem]`: An array of information the App Store server records for its attempts to send the `TEST` notification to your server. The array may contain a maximum of six [sendAttemptItem](sendattemptitem.md) objects.
- `signedPayload` — `signedPayload`: The signed payload, in JWS format, that contains the `TEST` notification that the App Store server sent to your server.
- `firstSendAttemptResult` — `string`: The result of the App Store server’s first attempt to send the `TEST` notification to your server.

  Use the first [sendAttemptItem](sendattemptitem.md) in the `sendAttempts` array instead.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

The [Get Test Notification Status](get-test-notification-status.md) endpoint returns this response.

The `sendAttempts` array contains up to six [sendAttemptItem](sendattemptitem.md) items: one for the initial attempt, and up to five for the retries. Use this information to troubleshoot your server if it doesn’t receive notifications at its [App Store Server Notifications V2](../appstoreservernotifications/app-store-server-notifications-v2.md) endpoint successfully.

The `signedPayload` contains the `TEST` notification that the App Store server attempted to send to your server.

## Topics

### Data types

- [sendAttemptItem](sendattemptitem.md): The success or error information and the date the App Store server records when it attempts to send a server notification to your server.
- [signedPayload](signedpayload.md): A cryptographically signed payload, in JSON Web Signature (JWS) format, containing the response body for a version 2 notification.

## See Also

### App Store Server Notifications testing

- [Request a Test Notification](request-a-test-notification.md): Ask App Store Server Notifications to send a test notification to your server.
- [Get Test Notification Status](get-test-notification-status.md): Check the status of the test App Store server notification sent to your server.
- [SendTestNotificationResponse](sendtestnotificationresponse.md): A response that contains the test notification token.
