> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-inapppurchases-_id_-inapppurchaselocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-inapppurchases-_id_-inapppurchaselocalizations)

# List all localizations for an in-app purchase

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Get a list of localized display names and descriptions for a specific in-app purchase.

> This relationship is deprecated. Use [List localizations for an in-app purchase version](get-v1-inapppurchaseversions-_id_-localizations.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/inAppPurchases/{id}/inAppPurchaseLocalizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchaseLocalizations]` — `[string]`: **Allowed values:** `name`, `locale`, `description`, `state`, `inAppPurchaseV2`
- `fields[inAppPurchases]` — `[string]`: **Allowed values:** `name`, `productId`, `inAppPurchaseType`, `state`, `reviewNote`, `familySharable`, `contentHosting`, `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`
- `include` — `[string]`: **Allowed values:** `inAppPurchaseV2`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `InAppPurchaseLocalizationsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create an in-app purchase localization (v1)](post-v1-inapppurchaselocalizations.md): Deprecated. Create a localized display name and description for an in-app purchase.
- [Read in-app purchase localization information (v1)](get-v1-inapppurchaselocalizations-_id_.md): Deprecated. Get the display name and description for a specific locale for an in-app purchase.
- [Modify an in-app purchase localization (v1)](patch-v1-inapppurchaselocalizations-_id_.md): Deprecated. Update the display name and description for a specific locale of an in-app purchase.
- [Delete an in-app purchase localization (v1)](delete-v1-inapppurchaselocalizations-_id_.md): Deprecated. Delete the metadata for a single in-app purchase localization.
