> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/testnotificationtoken

# testNotificationToken

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.5+

A unique identifier for a notification test that the App Store server sends to your server.

## Declaration

```
string testNotificationToken
```

<a id="Discussion"></a>

## Discussion

You receive a `testNotificationToken` when you call the [Request a Test Notification](request-a-test-notification.md) endpoint. Use the `testNotificationToken` to learn your server’s response to the test by calling [Get Test Notification Status](get-test-notification-status.md).
