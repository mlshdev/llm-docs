> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptionoffercodes-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptionoffercodes-_id_)

# Deactivate a subscription offer with offer codes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Deactivate a subscription offer that has offer codes for an auto-renewable subscription.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionOfferCodes/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionOfferCodeUpdateRequest`

## Response Codes

- `200` OK — `SubscriptionOfferCodeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Managing Subscription Offers

- [Create a subscription offer](post-v1-subscriptionoffercodes.md): Create a subscription offer that provides offer codes for an auto-renewable subscription.
- [Read subscription offer code information](get-v1-subscriptionoffercodes-_id_.md): Get details about a specific subscription offer that has offer codes for an auto-renewable subscription.
- [List all subscription offer code prices](get-v1-subscriptionoffercodes-_id_-prices.md): Get a list of price tiers for a subscription offer code.
- [List price IDs for a subscription offer code](get-v1-subscriptionoffercodes-_id_-relationships-prices.md): Get a list of price resource IDs for a specific subscription offer code.
