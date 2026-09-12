> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionplanavailabilitycreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionplanavailabilitycreaterequest)

# SubscriptionPlanAvailabilityCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4+

The request body you use to create a subscription plan availability.

## Declaration

```
object SubscriptionPlanAvailabilityCreateRequest
```

## Properties

- `data` — `SubscriptionPlanAvailabilityCreateRequest.Data` (required):

## Topics

### Dictionaries

- [SubscriptionPlanAvailabilityCreateRequest.Data](subscriptionplanavailabilitycreaterequest/data-data.dictionary.md): The request body you use to create a subscription plan availability.

## See Also

### Objects and types

- [SubscriptionPlanAvailability](subscriptionplanavailability.md): A configuration object for a subscription’s plan availability, specifying the plan type, the territories in which it is available, and whether it’s automatically available in new territories.
- [SubscriptionPlanAvailabilityUpdateRequest](subscriptionplanavailabilityupdaterequest.md): The request body you use to modify a subscription plan availability.
- [SubscriptionPlanAvailabilityResponse](subscriptionplanavailabilityresponse.md): The response body for endpoints that create or read a single subscription plan availability.
- [SubscriptionPlanAvailabilitiesResponse](subscriptionplanavailabilitiesresponse.md): The response body for endpoints that list subscription plan availabilities.
- [SubscriptionPlanAvailabilitiesLinkagesResponse](subscriptionplanavailabilitieslinkagesresponse.md): A response containing the resource identifiers of subscription plan availabilities.
- [SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesRequest](subscriptionplanavailabilityavailableterritorieslinkagesrequest.md): A request body you use to replace the available territories for a subscription plan availability.
- [SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesResponse](subscriptionplanavailabilityavailableterritorieslinkagesresponse.md): A response containing the resource identifiers of available territories for a subscription plan availability.
- [SubscriptionPlanType](subscriptionplantype.md): A string that indicates the billing plan type for an auto-renewable subscription.
