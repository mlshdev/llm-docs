> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_-relationships-prices](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_-relationships-prices)

# List price IDs for a subscription offer code

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4+

Get a list of price resource IDs for a specific subscription offer code.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionOfferCodes/{id}/relationships/prices
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `SubscriptionOfferCodePricesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Managing Subscription Offers

- [Create a subscription offer](post-v1-subscriptionoffercodes.md): Create a subscription offer that provides offer codes for an auto-renewable subscription.
- [Read subscription offer code information](get-v1-subscriptionoffercodes-_id_.md): Get details about a specific subscription offer that has offer codes for an auto-renewable subscription.
- [Deactivate a subscription offer with offer codes](patch-v1-subscriptionoffercodes-_id_.md): Deactivate a subscription offer that has offer codes for an auto-renewable subscription.
- [List all subscription offer code prices](get-v1-subscriptionoffercodes-_id_-prices.md): Get a list of price tiers for a subscription offer code.
