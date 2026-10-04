> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/subscriptionavailabilityresponse

# SubscriptionAvailabilityResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+ (deprecated in 4.4)

A response containing a single territory availability configuration for a subscription.

> This object is deprecated.

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
