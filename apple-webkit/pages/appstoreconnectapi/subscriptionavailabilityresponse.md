> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionavailabilityresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionavailabilityresponse)

# SubscriptionAvailabilityResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+

A response containing a single territory availability configuration for a subscription.

## Declaration

```
object SubscriptionAvailabilityResponse
```

## Properties

- `data` — `SubscriptionAvailability` (required):
- `included` — `[Territory]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [SubscriptionAvailability](subscriptionavailability.md): Deprecated. The territory availability configuration for a subscription, specifying which App Store regions it’s offered in.
- [SubscriptionAvailabilityCreateRequest](subscriptionavailabilitycreaterequest.md): Deprecated. The request body you use to create a subscription availability.
- [SubscriptionAvailabilityAvailableTerritoriesLinkagesResponse](subscriptionavailabilityavailableterritorieslinkagesresponse.md): Deprecated.
