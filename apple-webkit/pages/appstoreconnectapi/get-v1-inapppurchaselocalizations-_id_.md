> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaselocalizations-_id_

# Read In-App Purchase localization information (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Get the display name and description for a specific locale for an In-App Purchase.

> This endpoint is deprecated. Use [Read In-App Purchase localization information](get-v2-inapppurchaselocalizations-_id_.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchaseLocalizations]` — `[string]`: **Allowed values:** `name`, `locale`, `description`, `state`, `inAppPurchaseV2`
- `include` — `[string]`: **Allowed values:** `inAppPurchaseV2`
- `fields[inAppPurchases]` — `[string]`: **Allowed values:** `name`, `productId`, `inAppPurchaseType`, `state`, `reviewNote`, `familySharable`, `contentHosting`, `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`

## Response Codes

- `200` OK — `InAppPurchaseLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [List all localizations for an In-App Purchase](get-v2-inapppurchases-_id_-inapppurchaselocalizations.md): Deprecated. Get a list of localized display names and descriptions for a specific In-App Purchase.
- [Create an In-App Purchase localization (v1)](post-v1-inapppurchaselocalizations.md): Deprecated. Create a localized display name and description for an In-App Purchase.
- [Modify an In-App Purchase localization (v1)](patch-v1-inapppurchaselocalizations-_id_.md): Deprecated. Update the display name and description for a specific locale of an In-App Purchase.
- [Delete an In-App Purchase localization (v1)](delete-v1-inapppurchaselocalizations-_id_.md): Deprecated. Delete the metadata for a single In-App Purchase localization.
