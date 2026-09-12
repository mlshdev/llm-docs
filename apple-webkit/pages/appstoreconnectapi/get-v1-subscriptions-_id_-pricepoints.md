> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-pricepoints](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-pricepoints)

# List all price points for a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of price points for an auto-renewable subscription by territory.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/pricePoints
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionPricePoints]` — `[string]`: **Allowed values:** `customerPrice`, `proceeds`, `proceedsYear2`, `territory`, `equalizations`, `adjustedEqualizations`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `filter[territory]` — `[string]`: Use this filter with all requests.
- `include` — `[string]`: **Allowed values:** `territory`
- `limit` — `integer`: **Maximum:** `8000`
- `filter[planType]` — `[string]`:
- `filter[upfrontPricePointId]` — `[string]`:

## Response Codes

- `200` OK — `SubscriptionPricePointsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 2.4 release notes](app-store-connect-api-2-4-release-notes.md)
- [App Store Connect API 3.6 release notes](app-store-connect-api-3-6-release-notes.md)
- [Configuring subscription prices across territories](configuring-subscription-prices-across-territories.md)
- [Managing auto-renewable subscriptions](managing-auto-renewable-subscriptions.md)

<a id="Discussion"></a>

### Discussion

> **Important**

>  Use the `territory` filter on all requests. This will be required in a future release.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/subscriptions/6470878936/pricePoints?filter[territory]=USA&include=territory&limit=2
```

**Response**

```json
{
  "data" : [ {
    "type" : "subscriptionPricePoints",
    "id" : "eyJzIjoiNjQ3MDg3ODkzNiIsInQiOiJVU0EiLCJwIjoiMTAwMDEifQ",
    "attributes" : {
      "customerPrice" : "0.29",
      "proceeds" : "0.21",
      "proceedsYear2" : "0.25"
    },
    "relationships" : {
      "territory" : {
        "data" : { "type" : "territories", "id" : "USA" }
      },
      "adjustedEqualizations" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/subscriptionPricePoints/eyJzIjoiNjQ3MDg3ODkzNiIsInQiOiJVU0EiLCJwIjoiMTAwMDEifQ/relationships/adjustedEqualizations",
          "related" : "https://api.appstoreconnect.apple.com/v1/subscriptionPricePoints/eyJzIjoiNjQ3MDg3ODkzNiIsInQiOiJVU0EiLCJwIjoiMTAwMDEifQ/adjustedEqualizations"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/subscriptionPricePoints/eyJzIjoiNjQ3MDg3ODkzNiIsInQiOiJVU0EiLCJwIjoiMTAwMDEifQ"
    }
  } ],
  "included" : [ {
    "type" : "territories",
    "id" : "USA",
    "attributes" : { "currency" : "USD" }
  } ],
  "meta" : {
    "paging" : { "total" : 900, "limit" : 2 }
  }
}
```

## See Also

### Getting price points and prices

- [List price point IDs for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-pricepoints.md)
- [List all prices for a subscription](get-v1-subscriptions-_id_-prices.md): Get a list of prices for an auto-renewable subscription, by territory.
- [List all subscription price ids for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-prices.md): Get a list of resource IDs representing subscription prices for an auto-renewable subscription.
- [Delete prices from a subscription](delete-v1-subscriptions-_id_-relationships-prices.md): Delete a scheduled subscription price change for an auto-renewable subscription.
