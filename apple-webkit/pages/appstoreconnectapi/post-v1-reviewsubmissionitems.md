> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-reviewsubmissionitems](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-reviewsubmissionitems)

# Create a Review Submission Item

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Create a new review submission item.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/reviewSubmissionItems
```

## HTTP Body

Content type: `application/json`

Type: `ReviewSubmissionItemCreateRequest`

## Response Codes

- `201` Created — `ReviewSubmissionItemResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md)
- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Managing in-app purchases](managing-in-app-purchases.md)
- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)

## See Also

### Endpoints

- [Update a review submission item](patch-v1-reviewsubmissionitems-_id_.md): Update a specific review submission item.
- [Remove a review submission item](delete-v1-reviewsubmissionitems-_id_.md): Remove a specific item from a review submission.
