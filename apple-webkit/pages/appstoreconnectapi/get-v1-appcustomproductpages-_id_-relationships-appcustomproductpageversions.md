> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appcustomproductpages-_id_-relationships-appcustomproductpageversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appcustomproductpages-_id_-relationships-appcustomproductpageversions)

# Get all version ids for an app custom product page

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get a list of custom product page version IDs associated with a custom product page.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appCustomProductPages/{id}/relationships/appCustomProductPageVersions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppCustomProductPageAppCustomProductPageVersionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a Custom Product Page](post-v1-appcustomproductpages.md): Add a custom product page for your app.
- [Modify an App Custom Product Page](patch-v1-appcustomproductpages-_id_.md): Update the name and visibility status of an app custom product page.
- [List All Custom Product Pages for an App](get-v1-apps-_id_-appcustomproductpages.md): Get a list of all custom product pages for a specific app.
- [Read Custom Product Page Information](get-v1-appcustomproductpages-_id_.md): Get information about a specific app custom product page.
- [List Custom Product Page Versions](get-v1-appcustomproductpages-_id_-appcustomproductpageversions.md): List the versions for a custom product page version.
- [Delete an App Custom Product Page](delete-v1-appcustomproductpages-_id_.md): Delete metadata that you configured for a custom product page.
