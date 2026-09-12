> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionavailabilitycreaterequest/data-data.dictionary/relationships-data.dictionary/subscription-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionavailabilitycreaterequest/data-data.dictionary/relationships-data.dictionary/subscription-data.dictionary/data-data.dictionary)

# SubscriptionAvailabilityCreateRequest.Data.Relationships.Subscription.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+

The request body you use to create a subscription availability.

## Declaration

```
object SubscriptionAvailabilityCreateRequest.Data.Relationships.Subscription.Data
```

## Properties

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the subscription resource ID from the [List all subscriptions for a subscription group](../../../../get-v1-subscriptiongroups-_id_-subscriptions.md) response.
- `type` — `string` (required): **Allowed values:** `subscriptions`
