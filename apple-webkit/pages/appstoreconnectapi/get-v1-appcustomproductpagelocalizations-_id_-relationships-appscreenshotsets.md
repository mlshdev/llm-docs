> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appcustomproductpagelocalizations-_id_-relationships-appscreenshotsets](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appcustomproductpagelocalizations-_id_-relationships-appscreenshotsets)

# List app screenshot sets IDs for a custom product page localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

List the app screenshot set IDs for a specific custom product page localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/{id}/relationships/appScreenshotSets
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app custom product page localization resource ID from the [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of app screenshot set resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppCustomProductPageLocalizationAppScreenshotSetsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting screenshot information

- [List App Screenshot Sets for a Custom Product Page Localization](get-v1-appcustomproductpagelocalizations-_id_-appscreenshotsets.md): List the app screenshot sets for a specific custom product page localization.
