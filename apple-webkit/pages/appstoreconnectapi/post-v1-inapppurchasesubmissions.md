> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-inapppurchasesubmissions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-inapppurchasesubmissions)

# Create a review submission for an in-app purchase

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Create an in-app purchase submission for review.

> This endpoint is deprecated. Use the review submissions workflow at [Review submissions](review-submissions.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/inAppPurchaseSubmissions
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseSubmissionCreateRequest`

## Response Codes

- `201` Created — `InAppPurchaseSubmissionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing in-app purchases](managing-in-app-purchases.md)
