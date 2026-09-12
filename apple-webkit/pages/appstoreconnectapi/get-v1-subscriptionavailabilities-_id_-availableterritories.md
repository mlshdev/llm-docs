> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionavailabilities-_id_-availableterritories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionavailabilities-_id_-availableterritories)

# List the territory availability of a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.3+ (deprecated in 4.4)

List the territory availability and currency of a specific subscription.

> This endpoint is deprecated. Use [List available territories for a subscription plan availability](get-v1-subscriptionplanavailabilities-_id_-availableterritories.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/{id}/availableTerritories
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the subscription resource ID from the [List all subscriptions for a subscription group](get-v1-subscriptiongroups-_id_-subscriptions.md) response.

## Query Parameters

- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `TerritoriesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6447589418/availableTerritories?limit=5
```

**Response**

```json
{
  "data" : [ {
    "type" : "territories",
    "id" : "SLV",
    "attributes" : {
      "currency" : "USD"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/territories/SLV"
    }
  }, {
    "type" : "territories",
    "id" : "BRB",
    "attributes" : {
      "currency" : "USD"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/territories/BRB"
    }
  }, {
    "type" : "territories",
    "id" : "CYM",
    "attributes" : {
      "currency" : "USD"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/territories/CYM"
    }
  }, {
    "type" : "territories",
    "id" : "NIC",
    "attributes" : {
      "currency" : "USD"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/territories/NIC"
    }
  }, {
    "type" : "territories",
    "id" : "NAM",
    "attributes" : {
      "currency" : "USD"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/territories/NAM"
    }
  } ],
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6447589418/availableTerritories?limit=5",
    "next" : "https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities/6447589418/availableTerritories?cursor=BQ.AO4JFxQ&limit=5"
  },
  "meta" : {
    "paging" : {
      "total" : 175,
      "limit" : 5
    }
  }
}
```

## See Also

### Endpoints

- [Read the availability of a subscription](get-v1-subscriptionavailabilities-_id_.md): Deprecated. Get information about the territory availability for a subscription.
- [List available territory IDs for a subscription availability](get-v1-subscriptionavailabilities-_id_-relationships-availableterritories.md): Deprecated.
- [Modify the territory availability of a subscription](post-v1-subscriptionavailabilities.md): Deprecated. Update the territory availability of a specific subscription.
