> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptionpromotionaloffers-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptionpromotionaloffers-_id_)

# Modify a promotional offer

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Update the prices for a specific promotional offer for an auto-renewable subscription.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionPromotionalOffers/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionPromotionalOfferUpdateRequest`

## Response Codes

- `200` OK — `SubscriptionPromotionalOfferResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a promotional offer](post-v1-subscriptionpromotionaloffers.md): Create a promotional offer for an auto-renewable subscription.
- [List all promotional offer prices for a subscription](get-v1-subscriptionpromotionaloffers-_id_-prices.md): Get a list of prices of a promotional offer for an auto-renewable subscription, for a specified territory.
- [List price IDs for a subscription promotional offer](get-v1-subscriptionpromotionaloffers-_id_-relationships-prices.md)
- [Read promotional offer information](get-v1-subscriptionpromotionaloffers-_id_.md): Get details about a specific promotional offer for an auto-renewable subscription.
- [Delete a promotional offer from a subscription](delete-v1-subscriptionpromotionaloffers-_id_.md): Delete a specific promotional offer from an auto-renewable subscription.
