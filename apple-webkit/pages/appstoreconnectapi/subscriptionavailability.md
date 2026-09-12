> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionavailability](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionavailability)

# SubscriptionAvailability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+

The territory availability configuration for a subscription, specifying which App Store regions it’s offered in.

## Declaration

```
object SubscriptionAvailability
```

## Properties

- `attributes` — `SubscriptionAvailability.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `SubscriptionAvailability.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionAvailabilities`

## Topics

### Objects

- [SubscriptionAvailability.Attributes](subscriptionavailability/attributes-data.dictionary.md): Deprecated. Attributes that describe a subscription availability resource.
- [SubscriptionAvailability.Relationships](subscriptionavailability/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionAvailabilityCreateRequest](subscriptionavailabilitycreaterequest.md): Deprecated. The request body you use to create a subscription availability.
- [SubscriptionAvailabilityResponse](subscriptionavailabilityresponse.md): Deprecated. A response containing a single territory availability configuration for a subscription.
- [SubscriptionAvailabilityAvailableTerritoriesLinkagesResponse](subscriptionavailabilityavailableterritorieslinkagesresponse.md): Deprecated.
