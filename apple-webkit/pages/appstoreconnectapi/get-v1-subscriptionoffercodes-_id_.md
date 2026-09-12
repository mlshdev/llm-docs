> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_)

# Read subscription offer code information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get details about a specific subscription offer that has offer codes for an auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionOfferCodes/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionOfferCodeCustomCodes]` — `[string]`: **Allowed values:** `customCode`, `numberOfCodes`, `createdDate`, `expirationDate`, `active`, `offerCode`
- `fields[subscriptionOfferCodeOneTimeUseCodes]` — `[string]`: **Allowed values:** `numberOfCodes`, `createdDate`, `expirationDate`, `active`, `environment`, `offerCode`, `values`
- `fields[subscriptionOfferCodePrices]` — `[string]`: **Allowed values:** `territory`, `subscriptionPricePoint`
- `fields[subscriptionOfferCodes]` — `[string]`: **Allowed values:** `name`, `customerEligibilities`, `offerEligibility`, `duration`, `offerMode`, `numberOfPeriods`, `totalNumberOfCodes`, `productionCodeCount`, `sandboxCodeCount`, `active`, `autoRenewEnabled`, `targetSubscriptionPlanType`, `subscription`, `oneTimeUseCodes`, `customCodes`, `prices`
- `include` — `[string]`: **Allowed values:** `subscription`, `oneTimeUseCodes`, `customCodes`, `prices`
- `limit[customCodes]` — `integer`: **Maximum:** `50`
- `limit[oneTimeUseCodes]` — `integer`: **Maximum:** `50`
- `limit[prices]` — `integer`: **Maximum:** `50`
- `fields[subscriptions]` — `[string]`: **Allowed values:** `name`, `productId`, `familySharable`, `state`, `subscriptionPeriod`, `reviewNote`, `groupLevel`, `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `pricePoints`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`

## Response Codes

- `200` OK — `SubscriptionOfferCodeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Managing Subscription Offers

- [Create a subscription offer](post-v1-subscriptionoffercodes.md): Create a subscription offer that provides offer codes for an auto-renewable subscription.
- [Deactivate a subscription offer with offer codes](patch-v1-subscriptionoffercodes-_id_.md): Deactivate a subscription offer that has offer codes for an auto-renewable subscription.
- [List all subscription offer code prices](get-v1-subscriptionoffercodes-_id_-prices.md): Get a list of price tiers for a subscription offer code.
- [List price IDs for a subscription offer code](get-v1-subscriptionoffercodes-_id_-relationships-prices.md): Get a list of price resource IDs for a specific subscription offer code.
