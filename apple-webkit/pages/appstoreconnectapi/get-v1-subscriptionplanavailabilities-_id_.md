> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionplanavailabilities-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionplanavailabilities-_id_)

# Read subscription plan availability information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4+

Get information about a specific subscription plan availability.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionPlanAvailabilities/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `subscriptionPlanAvailability` resource ID from the [List plan availabilities for a subscription](get-v1-subscriptions-_id_-planavailabilities.md) response.

## Query Parameters

- `fields[subscriptionPlanAvailabilities]` — `[string]`: Additional fields to include for each subscription plan availability resource that the response returns.
  **Allowed values:** `availableInNewTerritories`, `planType`, `availableTerritories`
- `fields[territories]` — `[string]`: Additional fields to include for each territory resource that the response returns.
  **Allowed values:** `currency`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `availableTerritories`
- `limit[availableTerritories]` — `integer`: The maximum number of available territory resources to return.
  **Maximum:** `50`

## Response Codes

- `200` OK — `SubscriptionPlanAvailabilityResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating and modifying plan availability

- [Create a subscription plan availability](post-v1-subscriptionplanavailabilities.md): Create the plan availability configuration for an auto-renewable subscription.
- [Modify a subscription plan availability](patch-v1-subscriptionplanavailabilities-_id_.md): Update the plan availability configuration for a specific subscription.
