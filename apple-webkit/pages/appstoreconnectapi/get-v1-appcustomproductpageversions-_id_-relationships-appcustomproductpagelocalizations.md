> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appcustomproductpageversions-_id_-relationships-appcustomproductpagelocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appcustomproductpageversions-_id_-relationships-appcustomproductpagelocalizations)

# List localization IDs for a custom product page version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of localization IDs for a specific custom product page version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appCustomProductPageVersions/{id}/relationships/appCustomProductPageLocalizations
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app custom product page version resource ID from the [List Custom Product Page Versions](get-v1-appcustomproductpages-_id_-appcustomproductpageversions.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of app custom product page localization resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppCustomProductPageVersionAppCustomProductPageLocalizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read Custom Product Page Version Information](get-v1-appcustomproductpageversions-_id_.md): Get information about a specific app custom product page version.
- [List Custom Product Page Versions](get-v1-appcustomproductpages-_id_-appcustomproductpageversions.md): List the versions for a custom product page version.
- [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md): List all localizations for an app custom product page.
- [Create a Custom Product Page Version](post-v1-appcustomproductpageversions.md): Add a version for your app custom product page.
- [Modify a Custom Product Page Version](patch-v1-appcustomproductpageversions-_id_.md): Update the name and visibility status of an app custom product page.
