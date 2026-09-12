> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptiongroupsubmissions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptiongroupsubmissions)

# Create a review submission for a subscription group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Create a subscription group submission for review.

> This endpoint is deprecated. Use the review submissions workflow at [Review submissions](review-submissions.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionGroupSubmissions
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionGroupSubmissionCreateRequest`

## Response Codes

- `201` Created — `SubscriptionGroupSubmissionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)

## See Also

### Endpoints

- [Create a review submission for a subscription](post-v1-subscriptionsubmissions.md): Deprecated. Create a review submission for an auto-renewable subscription.
