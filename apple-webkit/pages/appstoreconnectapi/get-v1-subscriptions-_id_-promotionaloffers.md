> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-promotionaloffers](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-promotionaloffers)

# List all promotional offer resource ids for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of promotional offers for a specific auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/promotionalOffers
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionPromotionalOfferPrices]` — `[string]`: **Allowed values:** `territory`, `subscriptionPricePoint`
- `fields[subscriptionPromotionalOffers]` — `[string]`: **Allowed values:** `duration`, `name`, `numberOfPeriods`, `offerCode`, `offerMode`, `targetSubscriptionPlanType`, `subscription`, `prices`
- `fields[subscriptions]` — `[string]`: **Allowed values:** `name`, `productId`, `familySharable`, `state`, `subscriptionPeriod`, `reviewNote`, `groupLevel`, `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `pricePoints`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`
- `filter[territory]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `subscription`, `prices`
- `limit` — `integer`: **Maximum:** `200`
- `limit[prices]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `SubscriptionPromotionalOffersResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting promotional offers

- [List promotional offer IDs for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-promotionaloffers.md)
