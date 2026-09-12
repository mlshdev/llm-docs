> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionimagecreaterequest/data-data.dictionary/relationships-data.dictionary/subscription-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionimagecreaterequest/data-data.dictionary/relationships-data.dictionary/subscription-data.dictionary/data-data.dictionary)

# SubscriptionImageCreateRequest.Data.Relationships.Subscription.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+ (deprecated in 4.4.1)

The resource linkage data identifying the subscription for which a new image is being created.

> This object is deprecated. Use [SubscriptionImageV2CreateRequest](../../../../subscriptionimagev2createrequest.md) instead.

## Declaration

```
object SubscriptionImageCreateRequest.Data.Relationships.Subscription.Data
```

## Properties

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `subscriptions` resource ID from the [List all subscriptions for a subscription group](../../../../get-v1-subscriptiongroups-_id_-subscriptions.md) response.
- `type` — `string` (required): **Allowed values:** `subscriptions`
