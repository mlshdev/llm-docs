> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongroupsubmissionresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongroupsubmissionresponse)

# SubscriptionGroupSubmissionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A response confirming the submission of a subscription group for App Store review.

> This object is deprecated. Use the review submissions workflow instead.

## Declaration

```
object SubscriptionGroupSubmissionResponse
```

## Properties

- `data` — `SubscriptionGroupSubmission` (required):
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [SubscriptionGroupSubmissionCreateRequest](subscriptiongroupsubmissioncreaterequest.md): Deprecated. The request body you use to create a subscription group submission.
- [SubscriptionGroupSubmission](subscriptiongroupsubmission.md): Deprecated. A submission of a subscription group to App Store review, required before offering subscriptions to customers.
- [SubscriptionSubmissionCreateRequest](subscriptionsubmissioncreaterequest.md): Deprecated. The request body you use to create a subscription submission.
- [SubscriptionSubmission](subscriptionsubmission.md): Deprecated. A submission of an auto-renewable subscription to App Store review.
- [SubscriptionSubmissionResponse](subscriptionsubmissionresponse.md): Deprecated. A response confirming the submission of a subscription for App Store review.
