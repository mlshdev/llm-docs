> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-inapppurchases

# List In-App Purchases ids for an app v1

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a list of all In-App Purchases IDs for a specific app V1.

> Use [GET /v1/apps/{id}/relationships/inAppPurchasesV2](get-v1-apps-_id_-relationships-inapppurchasesv2.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/inAppPurchases
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of In-App Purchase resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppInAppPurchasesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting In-App Purchase information

- [List all In-App Purchases for an app](get-v1-apps-_id_-inapppurchasesv2.md): Get a list of the In-App Purchases for a specific app.
- [GET /v1/apps/{id}/relationships/inAppPurchasesV2](get-v1-apps-_id_-relationships-inapppurchasesv2.md)
- [List all In-App Purchases for an app v1](get-v1-apps-_id_-inapppurchases.md): Deprecated. List the In-App Purchases that are available for your app.
