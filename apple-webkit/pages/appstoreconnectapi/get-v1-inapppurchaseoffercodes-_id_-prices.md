> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchaseoffercodes-_id_-prices](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseoffercodes-_id_-prices)

# List All Prices for an In-App Purchase Offer Code

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.2+

Get a list of prices for a specific in-app purchase offer code.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseOfferCodes/{id}/prices
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchaseOfferPrices]` — `[string]`: **Allowed values:** `territory`, `pricePoint`
- `fields[inAppPurchasePricePoints]` — `[string]`: **Allowed values:** `customerPrice`, `proceeds`, `territory`, `equalizations`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `filter[territory]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `territory`, `pricePoint`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `InAppPurchaseOfferPricesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Managing In-App Purchase Offer Codes

- [Create an In-App Purchase Offer Code](post-v1-inapppurchaseoffercodes.md): Create an offer code for an in-app purchase.
- [Read In-App Purchase Offer Code Information](get-v1-inapppurchaseoffercodes-_id_.md): Get information about a specific in-app purchase offer code.
- [Modify an In-App Purchase Offer Code](patch-v1-inapppurchaseoffercodes-_id_.md): Update a specific in-app purchase offer code.
- [Get All Price IDs for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-relationships-prices.md): Get a list of price resource IDs for a specific in-app purchase offer code.
