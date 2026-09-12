> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionplantype](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionplantype)

# SubscriptionPlanType

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 4.4+

A string that indicates the billing plan type for an auto-renewable subscription.

## Declaration

```
string SubscriptionPlanType
```

## Possible Values

- `MONTHLY`: The user pays a monthly subscription price with a 12-month commitment.
- `UPFRONT`: The user pays the full subscription price up front.

## Mentioned In

- [Configuring subscription prices across territories](configuring-subscription-prices-across-territories.md)

## See Also

### Objects and types

- [SubscriptionPlanAvailability](subscriptionplanavailability.md): A configuration object for a subscription’s plan availability, specifying the plan type, the territories in which it is available, and whether it’s automatically available in new territories.
- [SubscriptionPlanAvailabilityCreateRequest](subscriptionplanavailabilitycreaterequest.md): The request body you use to create a subscription plan availability.
- [SubscriptionPlanAvailabilityUpdateRequest](subscriptionplanavailabilityupdaterequest.md): The request body you use to modify a subscription plan availability.
- [SubscriptionPlanAvailabilityResponse](subscriptionplanavailabilityresponse.md): The response body for endpoints that create or read a single subscription plan availability.
- [SubscriptionPlanAvailabilitiesResponse](subscriptionplanavailabilitiesresponse.md): The response body for endpoints that list subscription plan availabilities.
- [SubscriptionPlanAvailabilitiesLinkagesResponse](subscriptionplanavailabilitieslinkagesresponse.md): A response containing the resource identifiers of subscription plan availabilities.
- [SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesRequest](subscriptionplanavailabilityavailableterritorieslinkagesrequest.md): A request body you use to replace the available territories for a subscription plan availability.
- [SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesResponse](subscriptionplanavailabilityavailableterritorieslinkagesresponse.md): A response containing the resource identifiers of available territories for a subscription plan availability.
