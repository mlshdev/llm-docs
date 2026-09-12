> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-offercodes](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-offercodes)

# List all offer codes for a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of subscription offer codes for a specific auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/offerCodes
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionOfferCodeCustomCodes]` — `[string]`: **Allowed values:** `customCode`, `numberOfCodes`, `createdDate`, `expirationDate`, `active`, `offerCode`
- `fields[subscriptionOfferCodeOneTimeUseCodes]` — `[string]`: **Allowed values:** `numberOfCodes`, `createdDate`, `expirationDate`, `active`, `environment`, `offerCode`, `values`
- `fields[subscriptionOfferCodePrices]` — `[string]`: **Allowed values:** `territory`, `subscriptionPricePoint`
- `fields[subscriptionOfferCodes]` — `[string]`: **Allowed values:** `name`, `customerEligibilities`, `offerEligibility`, `duration`, `offerMode`, `numberOfPeriods`, `totalNumberOfCodes`, `productionCodeCount`, `sandboxCodeCount`, `active`, `autoRenewEnabled`, `targetSubscriptionPlanType`, `subscription`, `oneTimeUseCodes`, `customCodes`, `prices`
- `fields[subscriptions]` — `[string]`: **Allowed values:** `name`, `productId`, `familySharable`, `state`, `subscriptionPeriod`, `reviewNote`, `groupLevel`, `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `pricePoints`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`
- `filter[territory]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `subscription`, `oneTimeUseCodes`, `customCodes`, `prices`
- `limit` — `integer`: **Maximum:** `200`
- `limit[customCodes]` — `integer`: **Maximum:** `50`
- `limit[oneTimeUseCodes]` — `integer`: **Maximum:** `50`
- `limit[prices]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `SubscriptionOfferCodesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting offer codes

- [List offer code IDs for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-offercodes.md)
