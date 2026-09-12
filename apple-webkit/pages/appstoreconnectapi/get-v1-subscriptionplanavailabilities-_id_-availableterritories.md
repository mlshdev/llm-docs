> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionplanavailabilities-_id_-availableterritories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionplanavailabilities-_id_-availableterritories)

# List available territories for a subscription plan availability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4+

List all territories where a specific subscription plan is available.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionPlanAvailabilities/{id}/availableTerritories
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `subscriptionPlanAvailability` resource ID from the [List plan availabilities for a subscription](get-v1-subscriptions-_id_-planavailabilities.md) response.

## Query Parameters

- `fields[territories]` — `[string]`: Additional fields to include for each territory resource that the response returns.
  **Allowed values:** `currency`
- `limit` — `integer`: The maximum number of territory resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `TerritoriesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Managing available territories

- [List available territory IDs for a subscription plan availability](get-v1-subscriptionplanavailabilities-_id_-relationships-availableterritories.md): Get a list of available territory resource IDs for a specific subscription plan availability.
- [Replace the available territories for a subscription plan availability](patch-v1-subscriptionplanavailabilities-_id_-relationships-availableterritories.md): Replace the list of available territories for a specific subscription plan availability.
