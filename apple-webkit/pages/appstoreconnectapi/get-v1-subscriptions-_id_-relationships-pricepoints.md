> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-pricepoints](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-pricepoints)

# List price point IDs for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/relationships/pricePoints
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `8000`

## Response Codes

- `200` OK — `SubscriptionPricePointsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting price points and prices

- [List all price points for a subscription](get-v1-subscriptions-_id_-pricepoints.md): Get a list of price points for an auto-renewable subscription by territory.
- [List all prices for a subscription](get-v1-subscriptions-_id_-prices.md): Get a list of prices for an auto-renewable subscription, by territory.
- [List all subscription price ids for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-prices.md): Get a list of resource IDs representing subscription prices for an auto-renewable subscription.
- [Delete prices from a subscription](delete-v1-subscriptions-_id_-relationships-prices.md): Delete a scheduled subscription price change for an auto-renewable subscription.
