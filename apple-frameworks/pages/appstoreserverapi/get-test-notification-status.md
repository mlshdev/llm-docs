> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/get-test-notification-status](https://developer.apple.com/documentation/appstoreserverapi/get-test-notification-status)

# Get Test Notification Status

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.5+

Check the status of the test App Store server notification sent to your server.

## URL

```http
GET https://api.storekit.apple.com/inApps/v1/notifications/test/{testNotificationToken}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/notifications/test/{testNotificationToken}
```

## Path Parameters

- `testNotificationToken` — `testNotificationToken` (required): The token that uniquely identifies a test, that you receive when you call [Request a Test Notification](request-a-test-notification.md).

## Response Codes

- `200` OK — `CheckTestNotificationResponse`: Success.
- `400` Bad Request — `InvalidTestNotificationTokenError`: The test notification token is invalid. Use a valid token that you receive in the [SendTestNotificationResponse](sendtestnotificationresponse.md).
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `TestNotificationNotFoundError`: The status isn’t yet available or the test notification token wasn’t found.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit.
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`: Server error. Try again later.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint using the [testNotificationToken](https://developer.apple.com/documentation/appstoreserverapi/get-test-notification-status/testnotificationtoken) you receive when you call [Request a Test Notification](request-a-test-notification.md). You can check the status using the [testNotificationToken](https://developer.apple.com/documentation/appstoreserverapi/get-test-notification-status/testnotificationtoken) for up to six months. Use the information in the [CheckTestNotificationResponse](checktestnotificationresponse.md) to troubleshoot your server if it’s unable to receive App Store Server Notifications successfully.

## See Also

### App Store Server Notifications testing

- [Request a Test Notification](request-a-test-notification.md): Ask App Store Server Notifications to send a test notification to your server.
- [SendTestNotificationResponse](sendtestnotificationresponse.md): A response that contains the test notification token.
- [CheckTestNotificationResponse](checktestnotificationresponse.md): A response that contains the contents of the App Store server’s test notification and the result from your server.
