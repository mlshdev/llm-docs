> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionpromotionaloffers-_id_-prices](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionpromotionaloffers-_id_-prices)

# List all promotional offer prices for a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of prices of a promotional offer for an auto-renewable subscription, for a specified territory.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionPromotionalOffers/{id}/prices
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionPricePoints]` — `[string]`: **Allowed values:** `customerPrice`, `proceeds`, `proceedsYear2`, `territory`, `equalizations`, `adjustedEqualizations`
- `fields[subscriptionPromotionalOfferPrices]` — `[string]`: **Allowed values:** `territory`, `subscriptionPricePoint`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `include` — `[string]`: **Allowed values:** `territory`, `subscriptionPricePoint`
- `limit` — `integer`: **Maximum:** `200`
- `filter[territory]` — `[string]`:

## Response Codes

- `200` OK — `SubscriptionPromotionalOfferPricesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a promotional offer](post-v1-subscriptionpromotionaloffers.md): Create a promotional offer for an auto-renewable subscription.
- [List price IDs for a subscription promotional offer](get-v1-subscriptionpromotionaloffers-_id_-relationships-prices.md)
- [Read promotional offer information](get-v1-subscriptionpromotionaloffers-_id_.md): Get details about a specific promotional offer for an auto-renewable subscription.
- [Modify a promotional offer](patch-v1-subscriptionpromotionaloffers-_id_.md): Update the prices for a specific promotional offer for an auto-renewable subscription.
- [Delete a promotional offer from a subscription](delete-v1-subscriptionpromotionaloffers-_id_.md): Delete a specific promotional offer from an auto-renewable subscription.
