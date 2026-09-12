> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionavailabilities-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionavailabilities-_id_)

# Read the availability of a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.3+ (deprecated in 4.4)

Get information about the territory availability for a subscription.

> This endpoint is deprecated. Use [Read subscription plan availability information](get-v1-subscriptionplanavailabilities-_id_.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the subscription resource ID from the [List all subscriptions for a subscription group](get-v1-subscriptiongroups-_id_-subscriptions.md) response.

## Query Parameters

- `fields[subscriptionAvailabilities]` — `[string]`: **Allowed values:** `availableInNewTerritories`, `availableTerritories`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `include` — `[string]`: **Allowed values:** `availableTerritories`
- `limit[availableTerritories]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `SubscriptionAvailabilityResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.7 release notes](app-store-connect-api-3-7-release-notes.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6447589418
```

**Response**

```json
{
  "data" : {
    "type" : "subscriptionAvailabilities",
    "id" : "6447589418",
    "attributes" : {
      "availableInNewTerritories" : false
    },
    "relationships" : {
      "availableTerritories" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6447589418/relationships/availableTerritories",
          "related" : "https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6447589418/availableTerritories"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6447589418"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6447589418"
  }
}
```

## See Also

### Endpoints

- [List the territory availability of a subscription](get-v1-subscriptionavailabilities-_id_-availableterritories.md): Deprecated. List the territory availability and currency of a specific subscription.
- [List available territory IDs for a subscription availability](get-v1-subscriptionavailabilities-_id_-relationships-availableterritories.md): Deprecated.
- [Modify the territory availability of a subscription](post-v1-subscriptionavailabilities.md): Deprecated. Update the territory availability of a specific subscription.
