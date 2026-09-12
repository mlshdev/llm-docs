> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptionplanavailabilities](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptionplanavailabilities)

# Create a subscription plan availability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4+

Create the plan availability configuration for an auto-renewable subscription.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionPlanAvailabilities
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionPlanAvailabilityCreateRequest`

## Response Codes

- `201` Created — `SubscriptionPlanAvailabilityResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring subscription prices across territories](configuring-subscription-prices-across-territories.md)

## See Also

### Creating and modifying plan availability

- [Read subscription plan availability information](get-v1-subscriptionplanavailabilities-_id_.md): Get information about a specific subscription plan availability.
- [Modify a subscription plan availability](patch-v1-subscriptionplanavailabilities-_id_.md): Update the plan availability configuration for a specific subscription.
