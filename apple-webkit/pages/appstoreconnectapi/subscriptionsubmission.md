> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionsubmission](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionsubmission)

# SubscriptionSubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A submission of an auto-renewable subscription to App Store review.

> This object is deprecated. Use the review submissions workflow instead.

## Declaration

```
object SubscriptionSubmission
```

## Properties

- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `SubscriptionSubmission.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionSubmissions`

## Topics

### Objects

- [SubscriptionSubmission.Relationships](subscriptionsubmission/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionGroupSubmissionCreateRequest](subscriptiongroupsubmissioncreaterequest.md): Deprecated. The request body you use to create a subscription group submission.
- [SubscriptionGroupSubmission](subscriptiongroupsubmission.md): Deprecated. A submission of a subscription group to App Store review, required before offering subscriptions to customers.
- [SubscriptionGroupSubmissionResponse](subscriptiongroupsubmissionresponse.md): Deprecated. A response confirming the submission of a subscription group for App Store review.
- [SubscriptionSubmissionCreateRequest](subscriptionsubmissioncreaterequest.md): Deprecated. The request body you use to create a subscription submission.
- [SubscriptionSubmissionResponse](subscriptionsubmissionresponse.md): Deprecated. A response confirming the submission of a subscription for App Store review.
