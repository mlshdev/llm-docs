> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-inapppurchases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-inapppurchases)

# List in-app purchases ids for an app v1

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a list of all in-app purchases IDs for a specific app V1.

> Use [GET /v1/apps/{id}/relationships/inAppPurchasesV2](get-v1-apps-_id_-relationships-inapppurchasesv2.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/inAppPurchases
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of in-app purchase resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppInAppPurchasesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting in-app purchase information

- [List all in-app purchases for an app](get-v1-apps-_id_-inapppurchasesv2.md): Get a list of the in-app purchases for a specific app.
- [GET /v1/apps/{id}/relationships/inAppPurchasesV2](get-v1-apps-_id_-relationships-inapppurchasesv2.md)
- [List all in-app purchases for an app v1](get-v1-apps-_id_-inapppurchases.md): Deprecated. List the in-app purchases that are available for your app.
