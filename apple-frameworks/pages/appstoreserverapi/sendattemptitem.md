> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/sendattemptitem](https://developer.apple.com/documentation/appstoreserverapi/sendattemptitem)

# sendAttemptItem

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.8+

The success or error information and the date the App Store server records when it attempts to send a server notification to your server.

## Declaration

```
object sendAttemptItem
```

## Properties

- `attemptDate` — `attemptDate`: The date the App Store server attempts to send the notification.
- `sendAttemptResult` — `sendAttemptResult`: The success or error information the App Store server records when it attempts to send an App Store server notification to your server.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

## Topics

### Data types

- [attemptDate](attemptdate.md): The date the App Store server attempts to send a notification.
- [sendAttemptResult](sendattemptresult.md): The success or error information the App Store server records when it attempts to send an App Store server notification to your server.

## See Also

### Data types

- [signedPayload](signedpayload.md): A cryptographically signed payload, in JSON Web Signature (JWS) format, containing the response body for a version 2 notification.
