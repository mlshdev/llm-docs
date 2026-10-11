> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appcustomproductpagelocalizations-_id_-relationships-placements

# List the placement IDs for an app custom product page localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Get a list of placement resource IDs for a specific app custom product page localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/{id}/relationships/placements
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `limit` — `integer`: The maximum number of app asset library placement resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppCustomProductPageLocalizationPlacementsLinkagesResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting asset library placements

- [List related placements](get-v1-appcustomproductpagelocalizations-_id_-placements.md): List the placements for an app custom product page localization.
