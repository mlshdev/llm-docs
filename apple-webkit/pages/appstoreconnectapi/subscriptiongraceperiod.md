> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongraceperiod](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongraceperiod)

# SubscriptionGracePeriod

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A grace period configuration for a subscription, allowing subscribers continued access while payment issues are resolved.

## Declaration

```
object SubscriptionGracePeriod
```

## Properties

- `attributes` — `SubscriptionGracePeriod.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `subscriptionGracePeriods`

## Topics

### Objects

- [SubscriptionGracePeriod.Attributes](subscriptiongraceperiod/attributes-data.dictionary.md): Attributes that describe a subscription grace period resource.

## See Also

### Object

- [SubscriptionGracePeriodDuration](subscriptiongraceperiodduration.md): A string that represents the grace period duration for a subscription.
- [SubscriptionGracePeriodResponse](subscriptiongraceperiodresponse.md): A response containing a single grace period configuration for a subscription.
- [SubscriptionGracePeriodUpdateRequest](subscriptiongraceperiodupdaterequest.md): The request body you use to update a subscription grace period update request.
- [AppSubscriptionGracePeriodLinkageResponse](appsubscriptiongraceperiodlinkageresponse.md)
