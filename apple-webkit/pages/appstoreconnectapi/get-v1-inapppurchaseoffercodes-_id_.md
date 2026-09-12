> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchaseoffercodes-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseoffercodes-_id_)

# Read In-App Purchase Offer Code Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.2+

Get information about a specific in-app purchase offer code.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseOfferCodes/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchaseOfferCodeCustomCodes]` — `[string]`: **Allowed values:** `customCode`, `numberOfCodes`, `createdDate`, `expirationDate`, `active`, `createdByActor`, `deactivatedByActor`
- `fields[inAppPurchaseOfferCodeOneTimeUseCodes]` — `[string]`: **Allowed values:** `numberOfCodes`, `createdDate`, `expirationDate`, `active`, `environment`, `values`, `createdByActor`, `deactivatedByActor`
- `fields[inAppPurchaseOfferCodes]` — `[string]`: **Allowed values:** `name`, `customerEligibilities`, `productionCodeCount`, `sandboxCodeCount`, `active`, `oneTimeUseCodes`, `customCodes`, `prices`
- `fields[inAppPurchaseOfferPrices]` — `[string]`: **Allowed values:** `territory`, `pricePoint`
- `include` — `[string]`: **Allowed values:** `oneTimeUseCodes`, `customCodes`, `prices`
- `limit[customCodes]` — `integer`: **Maximum:** `50`
- `limit[oneTimeUseCodes]` — `integer`: **Maximum:** `50`
- `limit[prices]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `InAppPurchaseOfferCodeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Managing In-App Purchase Offer Codes

- [Create an In-App Purchase Offer Code](post-v1-inapppurchaseoffercodes.md): Create an offer code for an in-app purchase.
- [Modify an In-App Purchase Offer Code](patch-v1-inapppurchaseoffercodes-_id_.md): Update a specific in-app purchase offer code.
- [List All Prices for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-prices.md): Get a list of prices for a specific in-app purchase offer code.
- [Get All Price IDs for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-relationships-prices.md): Get a list of price resource IDs for a specific in-app purchase offer code.
