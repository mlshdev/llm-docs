> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptiongroups-_id_-subscriptions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptiongroups-_id_-subscriptions)

# List all subscriptions for a subscription group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of all auto-renewable subscriptions in a subscription group.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionGroups/{id}/subscriptions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[promotedPurchases]` — `[string]`: **Allowed values:** `visibleForAllUsers`, `enabled`, `state`, `inAppPurchaseV2`, `subscription`
- `fields[subscriptionGroups]` — `[string]`: **Allowed values:** `referenceName`, `subscriptions`, `subscriptionGroupLocalizations`, `versions`
- `fields[subscriptionIntroductoryOffers]` — `[string]`: **Allowed values:** `startDate`, `endDate`, `duration`, `offerMode`, `numberOfPeriods`, `targetSubscriptionPlanType`, `subscription`, `territory`, `subscriptionPricePoint`
- `fields[subscriptionLocalizations]` — `[string]`: **Allowed values:** `name`, `locale`, `description`, `state`, `subscription`
- `fields[subscriptionOfferCodes]` — `[string]`: **Allowed values:** `name`, `customerEligibilities`, `offerEligibility`, `duration`, `offerMode`, `numberOfPeriods`, `totalNumberOfCodes`, `productionCodeCount`, `sandboxCodeCount`, `active`, `autoRenewEnabled`, `targetSubscriptionPlanType`, `subscription`, `oneTimeUseCodes`, `customCodes`, `prices`
- `fields[subscriptionPrices]` — `[string]`: **Allowed values:** `startDate`, `preserved`, `planType`, `territory`, `subscriptionPricePoint`
- `fields[subscriptions]` — `[string]`: **Allowed values:** `name`, `productId`, `familySharable`, `state`, `subscriptionPeriod`, `reviewNote`, `groupLevel`, `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `pricePoints`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`
- `filter[name]` — `[string]`:
- `filter[productId]` — `[string]`:
- `filter[state]` — `[string]`: **Allowed values:** `MISSING_METADATA`, `READY_TO_SUBMIT`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `DEVELOPER_ACTION_NEEDED`, `PENDING_BINARY_APPROVAL`, `APPROVED`, `DEVELOPER_REMOVED_FROM_SALE`, `REMOVED_FROM_SALE`, `REJECTED`
- `include` — `[string]`: **Allowed values:** `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`
- `limit` — `integer`: **Maximum:** `200`
- `limit[introductoryOffers]` — `integer`: **Maximum:** `50`
- `limit[offerCodes]` — `integer`: **Maximum:** `50`
- `limit[prices]` — `integer`: **Maximum:** `50`
- `limit[subscriptionLocalizations]` — `integer`: **Maximum:** `50`
- `sort` — `[string]`: **Allowed values:** `name`, `-name`
- `fields[subscriptionPromotionalOffers]` — `[string]`: **Allowed values:** `duration`, `name`, `numberOfPeriods`, `offerCode`, `offerMode`, `targetSubscriptionPlanType`, `subscription`, `prices`
- `fields[subscriptionAppStoreReviewScreenshots]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `subscription`
- `limit[promotionalOffers]` — `integer`: **Maximum:** `50`
- `fields[subscriptionAvailabilities]` — `[string]`: **Allowed values:** `availableInNewTerritories`, `availableTerritories`
- `fields[subscriptionImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `assetToken`, `imageAsset`, `uploadOperations`, `state`, `subscription`
- `fields[subscriptionPlanAvailabilities]` — `[string]`: **Allowed values:** `availableInNewTerritories`, `planType`, `availableTerritories`
- `fields[subscriptionVersions]` — `[string]`: **Allowed values:** `version`, `state`, `subscription`, `image`, `images`, `localizations`
- `fields[winBackOffers]` — `[string]`: **Allowed values:** `referenceName`, `offerId`, `duration`, `offerMode`, `periodCount`, `customerEligibilityPaidSubscriptionDurationInMonths`, `customerEligibilityTimeSinceLastSubscribedInMonths`, `customerEligibilityWaitBetweenOffersInMonths`, `startDate`, `endDate`, `priority`, `promotionIntent`, `targetSubscriptionPlanType`, `prices`
- `limit[images]` — `integer`: **Maximum:** `50`
- `limit[planAvailabilities]` — `integer`: **Maximum:** `50`
- `limit[versions]` — `integer`: **Maximum:** `50`
- `limit[winBackOffers]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `SubscriptionsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a subscription group](post-v1-subscriptiongroups.md): Create a subscription group for an app.
- [List all subscription groups for an app](get-v1-apps-_id_-subscriptiongroups.md): Get a list of subscription groups for a specific app.
- [List subscription group IDs for an app](get-v1-apps-_id_-relationships-subscriptiongroups.md)
- [Read subscription group information](get-v1-subscriptiongroups-_id_.md): Get the details of a specific subscription group.
- [Modify a subscription group](patch-v1-subscriptiongroups-_id_.md): Update the reference name for a specific subscription group.
- [Delete a subscription group](delete-v1-subscriptiongroups-_id_.md): Delete a specific empty subscription group.
- [List all subscription group localizations](get-v1-subscriptiongroups-_id_-subscriptiongrouplocalizations.md): Deprecated. Get a list of all localized metadata for a specific subscription group.
- [List localization IDs for a subscription group](get-v1-subscriptiongroups-_id_-relationships-subscriptiongrouplocalizations.md): Deprecated.
- [List subscription IDs for a subscription group](get-v1-subscriptiongroups-_id_-relationships-subscriptions.md)
