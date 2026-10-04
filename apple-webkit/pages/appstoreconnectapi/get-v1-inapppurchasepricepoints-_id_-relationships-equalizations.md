> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchasepricepoints-_id_-relationships-equalizations

# List equalization IDs for an In-App Purchase price point

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchasePricePoints/{id}/relationships/equalizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `8000`

## Response Codes

- `200` OK — `InAppPurchasePricePointEqualizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create an In-App Purchase](post-v2-inapppurchases.md): Create an In-App Purchase, including a consumable, non-consumable, or non-renewing subscription.
- [Read In-App Purchase information](get-v2-inapppurchases-_id_.md): Get information about a specific In-App Purchase.
- [List all In-App Purchases for an app](get-v1-apps-_id_-inapppurchasesv2.md): Get a list of the In-App Purchases for a specific app.
- [Modify an In-App Purchase](patch-v2-inapppurchases-_id_.md): Update the reference name of a specific In-App Purchase.
- [Delete an In-App Purchase](delete-v2-inapppurchases-_id_.md): Delete a specific In-App Purchase from your app.
- [List all price points for an In-App Purchase](get-v2-inapppurchases-_id_-pricepoints.md): Get a list of possible price points for an In-App Purchase.
- [List price point IDs for an In-App Purchase](get-v2-inapppurchases-_id_-relationships-pricepoints.md): Get a list of price point IDs for a specific In-App Purchase.
- [List All In-App Purchase Price Point Equalizations](get-v1-inapppurchasepricepoints-_id_-equalizations.md): Get a list of In-App Purchase price points and their equivalent in a specified currency.
- [Read promoted purchase information for an In-App Purchase](get-v2-inapppurchases-_id_-promotedpurchase.md): Get details about the promoted purchase of an In-App Purchase.
- [Read the promoted purchase ID for an In-App Purchase](get-v2-inapppurchases-_id_-relationships-promotedpurchase.md): Get the promoted purchase ID for a specific In-App Purchase.
- [List all localizations for an In-App Purchase](get-v2-inapppurchases-_id_-inapppurchaselocalizations.md): Deprecated. Get a list of localized display names and descriptions for a specific In-App Purchase.
- [List localization IDs for an In-App Purchase](get-v2-inapppurchases-_id_-relationships-inapppurchaselocalizations.md): Deprecated. Get a list of localization IDs for a specific In-App Purchase.
- [Read review screenshot information for an In-App Purchase](get-v2-inapppurchases-_id_-appstorereviewscreenshot.md): Get information about a review screenshot for a specific In-App Purchase.
- [Read the App Store review screenshot ID for an In-App Purchase](get-v2-inapppurchases-_id_-relationships-appstorereviewscreenshot.md): Get the App Store review screenshot ID for a specific In-App Purchase.
- [Create a review submission for an In-App Purchase](post-v1-inapppurchasesubmissions.md): Deprecated. Create an In-App Purchase submission for review.
