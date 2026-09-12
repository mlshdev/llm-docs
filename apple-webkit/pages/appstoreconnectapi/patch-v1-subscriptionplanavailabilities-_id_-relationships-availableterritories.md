> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptionplanavailabilities-_id_-relationships-availableterritories](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptionplanavailabilities-_id_-relationships-availableterritories)

# Replace the available territories for a subscription plan availability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4+

Replace the list of available territories for a specific subscription plan availability.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionPlanAvailabilities/{id}/relationships/availableTerritories
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `subscriptionPlanAvailability` resource ID from the [List plan availabilities for a subscription](get-v1-subscriptions-_id_-planavailabilities.md) response.

## HTTP Body

Content type: `application/json`

Type: `SubscriptionPlanAvailabilityAvailableTerritoriesLinkagesRequest`

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring subscription prices across territories](configuring-subscription-prices-across-territories.md)

## See Also

### Managing available territories

- [List available territories for a subscription plan availability](get-v1-subscriptionplanavailabilities-_id_-availableterritories.md): List all territories where a specific subscription plan is available.
- [List available territory IDs for a subscription plan availability](get-v1-subscriptionplanavailabilities-_id_-relationships-availableterritories.md): Get a list of available territory resource IDs for a specific subscription plan availability.
