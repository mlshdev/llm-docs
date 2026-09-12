> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongraceperiodduration](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongraceperiodduration)

# SubscriptionGracePeriodDuration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 2.2+

A string that represents the grace period duration for a subscription.

## Declaration

```
string SubscriptionGracePeriodDuration
```

## Possible Values

- `THREE_DAYS`: A string that represents 3 days.
- `SIXTEEN_DAYS`: A string that represents 16 days.
- `TWENTY_EIGHT_DAYS`: A string that represents 28 days.

## See Also

### Object

- [SubscriptionGracePeriodResponse](subscriptiongraceperiodresponse.md): A response containing a single grace period configuration for a subscription.
- [SubscriptionGracePeriod](subscriptiongraceperiod.md): A grace period configuration for a subscription, allowing subscribers continued access while payment issues are resolved.
- [SubscriptionGracePeriodUpdateRequest](subscriptiongraceperiodupdaterequest.md): The request body you use to update a subscription grace period update request.
- [AppSubscriptionGracePeriodLinkageResponse](appsubscriptiongraceperiodlinkageresponse.md)
