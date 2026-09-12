> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-buildbetanotifications](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-buildbetanotifications)

# Send notification of an available build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Send a notification to all assigned beta testers that a build is available for testing.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/buildBetaNotifications
```

## HTTP Body

Content type: `application/json`

Type: `BuildBetaNotificationCreateRequest`

## Response Codes

- `201` Created — `BuildBetaNotificationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:
