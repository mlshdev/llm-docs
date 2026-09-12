> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongroupsubmission](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongroupsubmission)

# SubscriptionGroupSubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A submission of a subscription group to App Store review, required before offering subscriptions to customers.

> This object is deprecated. Use the review submissions workflow instead.

## Declaration

```
object SubscriptionGroupSubmission
```

## Properties

- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `subscriptionGroupSubmissions`

## See Also

### Objects

- [SubscriptionGroupSubmissionCreateRequest](subscriptiongroupsubmissioncreaterequest.md): Deprecated. The request body you use to create a subscription group submission.
- [SubscriptionGroupSubmissionResponse](subscriptiongroupsubmissionresponse.md): Deprecated. A response confirming the submission of a subscription group for App Store review.
- [SubscriptionSubmissionCreateRequest](subscriptionsubmissioncreaterequest.md): Deprecated. The request body you use to create a subscription submission.
- [SubscriptionSubmission](subscriptionsubmission.md): Deprecated. A submission of an auto-renewable subscription to App Store review.
- [SubscriptionSubmissionResponse](subscriptionsubmissionresponse.md): Deprecated. A response confirming the submission of a subscription for App Store review.
