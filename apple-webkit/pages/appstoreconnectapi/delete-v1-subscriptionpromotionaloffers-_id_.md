> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-subscriptionpromotionaloffers-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-subscriptionpromotionaloffers-_id_)

# Delete a promotional offer from a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Delete a specific promotional offer from an auto-renewable subscription.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/subscriptionPromotionalOffers/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a promotional offer](post-v1-subscriptionpromotionaloffers.md): Create a promotional offer for an auto-renewable subscription.
- [List all promotional offer prices for a subscription](get-v1-subscriptionpromotionaloffers-_id_-prices.md): Get a list of prices of a promotional offer for an auto-renewable subscription, for a specified territory.
- [List price IDs for a subscription promotional offer](get-v1-subscriptionpromotionaloffers-_id_-relationships-prices.md)
- [Read promotional offer information](get-v1-subscriptionpromotionaloffers-_id_.md): Get details about a specific promotional offer for an auto-renewable subscription.
- [Modify a promotional offer](patch-v1-subscriptionpromotionaloffers-_id_.md): Update the prices for a specific promotional offer for an auto-renewable subscription.
