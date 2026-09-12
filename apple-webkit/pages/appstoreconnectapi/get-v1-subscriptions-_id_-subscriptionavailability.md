> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-subscriptionavailability](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-subscriptionavailability)

# Read information about the availability of a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.4+

Get information about the territory availability for a subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/subscriptionAvailability
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the in-app purchase resource ID from the [List all subscriptions for a subscription group](get-v1-subscriptiongroups-_id_-subscriptions.md) response.

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

- [App Store Connect API 2.4 release notes](app-store-connect-api-2-4-release-notes.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/subscriptions/6448262369/subscriptionAvailability
```

**Response**

```json
{
  “data”: {
    “type”: “subscriptionAvailabilities”,
    “id”: “6448262369”,
    “attributes”: {
      “availableInNewTerritories”: false
    },
    “relationships”: {
      “availableTerritories”: {
        “links”: {
          “self”: “https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6448262369/relationships/availableTerritories”,
          “related”: “https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6448262369/availableTerritories”
        }
      }
    },
    “links”: {
      “self”: “https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6448262369”
    }
  },
  “links”: {
    “self”: “https://api.appstoreconnect.apple.com/v1/subscriptions/6448262369/subscriptionAvailability”
  }
}

```

## See Also

### Getting subscription availability

- [Get the subscription availability ID for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-subscriptionavailability.md): Deprecated.
- [List plan availabilities for a subscription](get-v1-subscriptions-_id_-planavailabilities.md): List all plan availabilities for a specific auto-renewable subscription.
- [List plan availability IDs for a subscription](get-v1-subscriptions-_id_-relationships-planavailabilities.md): Get a list of plan availability resource IDs for a specific auto-renewable subscription.
