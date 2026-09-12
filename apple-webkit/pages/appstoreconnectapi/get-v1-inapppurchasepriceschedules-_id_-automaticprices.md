> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchasepriceschedules-_id_-automaticprices](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchasepriceschedules-_id_-automaticprices)

# List Automatically Generated Prices for an In-App Purchase Price

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.3+

Get information about a price or prices automatically set based on a base territory for an in-app purchase price schedule.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/{id}/automaticPrices
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchasePricePoints]` — `[string]`: **Allowed values:** `customerPrice`, `proceeds`, `territory`, `equalizations`
- `fields[inAppPurchasePrices]` — `[string]`: **Allowed values:** `startDate`, `endDate`, `manual`, `inAppPurchasePricePoint`, `territory`
- `include` — `[string]`: **Allowed values:** `inAppPurchasePricePoint`, `territory`
- `limit` — `integer`: **Maximum:** `200`
- `filter[territory]` — `[string]`:
- `fields[territories]` — `[string]`: **Allowed values:** `currency`

## Response Codes

- `200` OK — `InAppPurchasePricesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read In-App Purchase Price Schedule Information](get-v1-inapppurchasepriceschedules-_id_.md): Get information about a specific scheduled price change for an in-app purchase.
- [Read Price Information for an In-App Purchase Price Schedule](get-v1-inapppurchasepriceschedules-_id_-manualprices.md): Get information about a set price or prices for an in-app purchase price schedule.
- [List manual price IDs for an in-app purchase price schedule](get-v1-inapppurchasepriceschedules-_id_-relationships-manualprices.md)
- [Add a Scheduled Price Change to an In-App Purchase](post-v1-inapppurchasepriceschedules.md): Create a scheduled price change for an in-app purchase.
- [List automatic price IDs for an in-app purchase price schedule](get-v1-inapppurchasepriceschedules-_id_-relationships-automaticprices.md)
- [Read the Selected Base Territory for an In-App Purchase Price Schedule](get-v1-inapppurchasepriceschedules-_id_-baseterritory.md): Get information about the selected base territory for an in-app purchase price schedule.
- [Get the base territory ID for an in-app purchase price schedule](get-v1-inapppurchasepriceschedules-_id_-relationships-baseterritory.md)
