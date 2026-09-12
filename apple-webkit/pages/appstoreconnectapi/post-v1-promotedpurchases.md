> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-promotedpurchases](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-promotedpurchases)

# Promote a purchase

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Add an existing in-app purchase or auto-renewable subscription to the promoted in-app purchases on an app listing in the App Store.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/promotedPurchases
```

## HTTP Body

Content type: `application/json`

Type: `PromotedPurchaseCreateRequest`

## Response Codes

- `201` Created — `PromotedPurchaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing auto-renewable subscriptions](managing-auto-renewable-subscriptions.md)
- [Managing in-app purchases](managing-in-app-purchases.md)

## See Also

### Endpoints

- [List all promoted purchases for an app](get-v1-apps-_id_-promotedpurchases.md): Get a list of promoted in-app purchases, including promoted auto-renewable subscriptions, for an app.
- [List promoted purchase ids for an app](get-v1-apps-_id_-relationships-promotedpurchases.md): Get a list of resource IDs representing promoted purchases for an auto-renewable subscription.
- [Read promoted purchase information](get-v1-promotedpurchases-_id_.md): Get details about a specific promoted in-app purchase.
- [Modify a promoted in-app purchase](patch-v1-promotedpurchases-_id_.md): Update the visibility of a promoted in-app purchase.
- [Modify the order of a promoted purchase for an app](patch-v1-apps-_id_-relationships-promotedpurchases.md): Update the order of promoted purchases.
- [Remove a promoted purchase](delete-v1-promotedpurchases-_id_.md): Remove a promotion for an in-app purchase or auto-renewable subscription from the App Store listing.
