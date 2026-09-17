> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongraceperiodresponse

# SubscriptionGracePeriodResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A response containing a single grace period configuration for a subscription.

## Declaration

```
object SubscriptionGracePeriodResponse
```

## Properties

- `data` — `SubscriptionGracePeriod` (required):
- `links` — `DocumentLinks` (required):

## See Also

### Object

- [SubscriptionGracePeriodDuration](subscriptiongraceperiodduration.md): A string that represents the grace period duration for a subscription.
- [SubscriptionGracePeriod](subscriptiongraceperiod.md): A grace period configuration for a subscription, allowing subscribers continued access while payment issues are resolved.
- [SubscriptionGracePeriodUpdateRequest](subscriptiongraceperiodupdaterequest.md): The request body you use to update a subscription grace period update request.
- [AppSubscriptionGracePeriodLinkageResponse](appsubscriptiongraceperiodlinkageresponse.md)
