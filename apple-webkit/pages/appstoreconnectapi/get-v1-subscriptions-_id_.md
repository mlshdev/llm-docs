> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_)

# Read subscription information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get information about a specific auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[promotedPurchases]` — `[string]`: **Allowed values:** `visibleForAllUsers`, `enabled`, `state`, `inAppPurchaseV2`, `subscription`
- `fields[subscriptionIntroductoryOffers]` — `[string]`: **Allowed values:** `startDate`, `endDate`, `duration`, `offerMode`, `numberOfPeriods`, `targetSubscriptionPlanType`, `subscription`, `territory`, `subscriptionPricePoint`
- `fields[subscriptionLocalizations]` — `[string]`: **Allowed values:** `name`, `locale`, `description`, `state`, `subscription`
- `fields[subscriptionOfferCodes]` — `[string]`: **Allowed values:** `name`, `customerEligibilities`, `offerEligibility`, `duration`, `offerMode`, `numberOfPeriods`, `totalNumberOfCodes`, `productionCodeCount`, `sandboxCodeCount`, `active`, `autoRenewEnabled`, `targetSubscriptionPlanType`, `subscription`, `oneTimeUseCodes`, `customCodes`, `prices`
- `fields[subscriptionPrices]` — `[string]`: **Allowed values:** `startDate`, `preserved`, `planType`, `territory`, `subscriptionPricePoint`
- `fields[subscriptions]` — `[string]`: **Allowed values:** `name`, `productId`, `familySharable`, `state`, `subscriptionPeriod`, `reviewNote`, `groupLevel`, `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `pricePoints`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`
- `include` — `[string]`: **Allowed values:** `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`
- `limit[introductoryOffers]` — `integer`: **Maximum:** `50`
- `limit[offerCodes]` — `integer`: **Maximum:** `50`
- `limit[prices]` — `integer`: **Maximum:** `50`
- `limit[subscriptionLocalizations]` — `integer`: **Maximum:** `50`
- `fields[subscriptionPromotionalOffers]` — `[string]`: **Allowed values:** `duration`, `name`, `numberOfPeriods`, `offerCode`, `offerMode`, `targetSubscriptionPlanType`, `subscription`, `prices`
- `fields[subscriptionAppStoreReviewScreenshots]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `subscription`
- `limit[promotionalOffers]` — `integer`: **Maximum:** `50`
- `fields[subscriptionAvailabilities]` — `[string]`: **Allowed values:** `availableInNewTerritories`, `availableTerritories`
- `fields[subscriptionGroups]` — `[string]`: **Allowed values:** `referenceName`, `subscriptions`, `subscriptionGroupLocalizations`, `versions`
- `fields[subscriptionImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `assetToken`, `imageAsset`, `uploadOperations`, `state`, `subscription`
- `fields[subscriptionPlanAvailabilities]` — `[string]`: **Allowed values:** `availableInNewTerritories`, `planType`, `availableTerritories`
- `fields[subscriptionVersions]` — `[string]`: **Allowed values:** `version`, `state`, `subscription`, `image`, `images`, `localizations`
- `fields[winBackOffers]` — `[string]`: **Allowed values:** `referenceName`, `offerId`, `duration`, `offerMode`, `periodCount`, `customerEligibilityPaidSubscriptionDurationInMonths`, `customerEligibilityTimeSinceLastSubscribedInMonths`, `customerEligibilityWaitBetweenOffersInMonths`, `startDate`, `endDate`, `priority`, `promotionIntent`, `targetSubscriptionPlanType`, `prices`
- `limit[images]` — `integer`: **Maximum:** `50`
- `limit[planAvailabilities]` — `integer`: **Maximum:** `50`
- `limit[versions]` — `integer`: **Maximum:** `50`
- `limit[winBackOffers]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `SubscriptionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and managing subscriptions

- [Create an auto-renewable subscription](post-v1-subscriptions.md): Create an auto-renewable subscription for your app.
- [Modify an auto-renewable subscription](patch-v1-subscriptions-_id_.md): Update a specific auto-renewable subscription.
- [Delete a subscription](delete-v1-subscriptions-_id_.md): Delete a specific auto-renewable subscription that you configured for an app.
