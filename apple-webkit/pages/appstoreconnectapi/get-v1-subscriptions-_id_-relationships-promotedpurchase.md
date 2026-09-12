> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-promotedpurchase](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-promotedpurchase)

# Get the promoted purchase ID for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/relationships/promotedPurchase
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `SubscriptionPromotedPurchaseLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting the promoted purchase

- [Read promoted purchase information for a subscription](get-v1-subscriptions-_id_-promotedpurchase.md): Get details about the promoted purchase of an auto-renewable subscription.
