> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchasepricepoints-_id_-equalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchasepricepoints-_id_-equalizations)

# List All In-App Purchase Price Point Equalizations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.7+

Get a list of in-app purchase price points and their equivalent in a specified currency.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchasePricePoints/{id}/equalizations
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the in-app purchase price point resource ID from the [List all price points for an in-app purchase](get-v2-inapppurchases-_id_-pricepoints.md) response.

## Query Parameters

- `fields[inAppPurchasePricePoints]` — `[string]`: **Allowed values:** `customerPrice`, `proceeds`, `territory`, `equalizations`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `filter[inAppPurchaseV2]` — `[string]`:
- `filter[territory]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `territory`
- `limit` — `integer`: **Maximum:** `8000`

## Response Codes

- `200` OK — `csv`:
- `200` OK — `InAppPurchasePricePointsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.7 release notes](app-store-connect-api-3-7-release-notes.md)

## See Also

### Endpoints

- [Create an in-app purchase](post-v2-inapppurchases.md): Create an in-app purchase, including a consumable, non-consumable, or non-renewing subscription.
- [Read in-app purchase information](get-v2-inapppurchases-_id_.md): Get information about a specific in-app purchase.
- [List all in-app purchases for an app](get-v1-apps-_id_-inapppurchasesv2.md): Get a list of the in-app purchases for a specific app.
- [Modify an in-app purchase](patch-v2-inapppurchases-_id_.md): Update the reference name of a specific in-app purchase.
- [Delete an in-app purchase](delete-v2-inapppurchases-_id_.md): Delete a specific in-app purchase from your app.
- [List all price points for an in-app purchase](get-v2-inapppurchases-_id_-pricepoints.md): Get a list of possible price points for an in-app purchase.
- [List price point IDs for an in-app purchase](get-v2-inapppurchases-_id_-relationships-pricepoints.md): Get a list of price point IDs for a specific in-app purchase.
- [List equalization IDs for an in-app purchase price point](get-v1-inapppurchasepricepoints-_id_-relationships-equalizations.md)
- [Read promoted purchase information for an in-app purchase](get-v2-inapppurchases-_id_-promotedpurchase.md): Get details about the promoted purchase of an in-app purchase.
- [Read the promoted purchase ID for an in-app purchase](get-v2-inapppurchases-_id_-relationships-promotedpurchase.md): Get the promoted purchase ID for a specific in-app purchase.
- [List all localizations for an in-app purchase](get-v2-inapppurchases-_id_-inapppurchaselocalizations.md): Deprecated. Get a list of localized display names and descriptions for a specific in-app purchase.
- [List localization IDs for an in-app purchase](get-v2-inapppurchases-_id_-relationships-inapppurchaselocalizations.md): Deprecated. Get a list of localization IDs for a specific in-app purchase.
- [Read review screenshot information for an in-app purchase](get-v2-inapppurchases-_id_-appstorereviewscreenshot.md): Get information about a review screenshot for a specific in-app purchase.
- [Read the App Store review screenshot ID for an in-app purchase](get-v2-inapppurchases-_id_-relationships-appstorereviewscreenshot.md): Get the App Store review screenshot ID for a specific in-app purchase.
- [Create a review submission for an in-app purchase](post-v1-inapppurchasesubmissions.md): Deprecated. Create an in-app purchase submission for review.
