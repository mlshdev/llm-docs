> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionavailabilities-_id_-relationships-availableterritories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionavailabilities-_id_-relationships-availableterritories)

# List available territory IDs for a subscription availability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.3+ (deprecated in 4.4)

> This endpoint is deprecated. Use [List available territories for a subscription plan availability](get-v1-subscriptionplanavailabilities-_id_-availableterritories.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/{id}/relationships/availableTerritories
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `SubscriptionAvailabilityAvailableTerritoriesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read the availability of a subscription](get-v1-subscriptionavailabilities-_id_.md): Deprecated. Get information about the territory availability for a subscription.
- [List the territory availability of a subscription](get-v1-subscriptionavailabilities-_id_-availableterritories.md): Deprecated. List the territory availability and currency of a specific subscription.
- [Modify the territory availability of a subscription](post-v1-subscriptionavailabilities.md): Deprecated. Update the territory availability of a specific subscription.
