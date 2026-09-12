> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionplanavailabilityavailableterritorieslinkagesrequest](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionplanavailabilityavailableterritorieslinkagesrequest)

# SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4+

A request body you use to replace the available territories for a subscription plan availability.

## Declaration

```
object SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesRequest
```

## Properties

- `data` — `[SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesRequest.Data]` (required):

## Topics

### Dictionaries

- [SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesRequest.Data](subscriptionplanavailabilityavailableterritorieslinkagesrequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects and types

- [SubscriptionPlanAvailability](subscriptionplanavailability.md): A configuration object for a subscription’s plan availability, specifying the plan type, the territories in which it is available, and whether it’s automatically available in new territories.
- [SubscriptionPlanAvailabilityCreateRequest](subscriptionplanavailabilitycreaterequest.md): The request body you use to create a subscription plan availability.
- [SubscriptionPlanAvailabilityUpdateRequest](subscriptionplanavailabilityupdaterequest.md): The request body you use to modify a subscription plan availability.
- [SubscriptionPlanAvailabilityResponse](subscriptionplanavailabilityresponse.md): The response body for endpoints that create or read a single subscription plan availability.
- [SubscriptionPlanAvailabilitiesResponse](subscriptionplanavailabilitiesresponse.md): The response body for endpoints that list subscription plan availabilities.
- [SubscriptionPlanAvailabilitiesLinkagesResponse](subscriptionplanavailabilitieslinkagesresponse.md): A response containing the resource identifiers of subscription plan availabilities.
- [SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesResponse](subscriptionplanavailabilityavailableterritorieslinkagesresponse.md): A response containing the resource identifiers of available territories for a subscription plan availability.
- [SubscriptionPlanType](subscriptionplantype.md): A string that indicates the billing plan type for an auto-renewable subscription.
