> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-inapppurchasesv2](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-inapppurchasesv2)

# GET /v1/apps/{id}/relationships/inAppPurchasesV2

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/inAppPurchasesV2
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of in-app purchase resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppInAppPurchasesV2LinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting in-app purchase information

- [List all in-app purchases for an app](get-v1-apps-_id_-inapppurchasesv2.md): Get a list of the in-app purchases for a specific app.
- [List all in-app purchases for an app v1](get-v1-apps-_id_-inapppurchases.md): Deprecated. List the in-app purchases that are available for your app.
- [List in-app purchases ids for an app v1](get-v1-apps-_id_-relationships-inapppurchases.md): Deprecated. Get a list of all in-app purchases IDs for a specific app V1.
