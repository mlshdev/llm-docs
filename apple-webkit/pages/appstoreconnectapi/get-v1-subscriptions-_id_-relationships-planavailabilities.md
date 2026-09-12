> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-planavailabilities](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-planavailabilities)

# List plan availability IDs for a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4+

Get a list of plan availability resource IDs for a specific auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/relationships/planAvailabilities
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `subscription` resource ID from the [List all subscriptions for a subscription group](get-v1-subscriptiongroups-_id_-subscriptions.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of subscription plan availability resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `SubscriptionPlanAvailabilitiesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading plan availability from a subscription

- [List plan availabilities for a subscription](get-v1-subscriptions-_id_-planavailabilities.md): List all plan availabilities for a specific auto-renewable subscription.
