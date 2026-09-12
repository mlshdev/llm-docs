> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongraceperiodresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongraceperiodresponse)

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
