> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_-prices](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_-prices)

# List all subscription offer code prices

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of price tiers for a subscription offer code.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionOfferCodes/{id}/prices
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionOfferCodePrices]` — `[string]`: **Allowed values:** `territory`, `subscriptionPricePoint`
- `fields[subscriptionPricePoints]` — `[string]`: **Allowed values:** `customerPrice`, `proceeds`, `proceedsYear2`, `territory`, `equalizations`, `adjustedEqualizations`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `include` — `[string]`: **Allowed values:** `territory`, `subscriptionPricePoint`
- `limit` — `integer`: **Maximum:** `200`
- `filter[territory]` — `[string]`:

## Response Codes

- `200` OK — `SubscriptionOfferCodePricesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Managing Subscription Offers

- [Create a subscription offer](post-v1-subscriptionoffercodes.md): Create a subscription offer that provides offer codes for an auto-renewable subscription.
- [Read subscription offer code information](get-v1-subscriptionoffercodes-_id_.md): Get details about a specific subscription offer that has offer codes for an auto-renewable subscription.
- [Deactivate a subscription offer with offer codes](patch-v1-subscriptionoffercodes-_id_.md): Deactivate a subscription offer that has offer codes for an auto-renewable subscription.
- [List price IDs for a subscription offer code](get-v1-subscriptionoffercodes-_id_-relationships-prices.md): Get a list of price resource IDs for a specific subscription offer code.
