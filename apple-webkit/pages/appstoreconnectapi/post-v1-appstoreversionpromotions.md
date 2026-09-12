> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appstoreversionpromotions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appstoreversionpromotions)

# Create an app store version promotion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Promote a specific App Store version.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appStoreVersionPromotions
```

## HTTP Body

Content type: `application/json`

Type: `AppStoreVersionPromotionCreateRequest`

## Response Codes

- `201` Created — `AppStoreVersionPromotionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:
