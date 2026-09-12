> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-promotedpurchases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-promotedpurchases)

# List promoted purchase ids for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of resource IDs representing promoted purchases for an auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/promotedPurchases
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of promoted purchase resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppPromotedPurchasesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Promote a purchase](post-v1-promotedpurchases.md): Add an existing in-app purchase or auto-renewable subscription to the promoted in-app purchases on an app listing in the App Store.
- [List all promoted purchases for an app](get-v1-apps-_id_-promotedpurchases.md): Get a list of promoted in-app purchases, including promoted auto-renewable subscriptions, for an app.
- [Read promoted purchase information](get-v1-promotedpurchases-_id_.md): Get details about a specific promoted in-app purchase.
- [Modify a promoted in-app purchase](patch-v1-promotedpurchases-_id_.md): Update the visibility of a promoted in-app purchase.
- [Modify the order of a promoted purchase for an app](patch-v1-apps-_id_-relationships-promotedpurchases.md): Update the order of promoted purchases.
- [Remove a promoted purchase](delete-v1-promotedpurchases-_id_.md): Remove a promotion for an in-app purchase or auto-renewable subscription from the App Store listing.
