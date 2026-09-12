> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptionoffercodes](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptionoffercodes)

# Create a subscription offer

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Create a subscription offer that provides offer codes for an auto-renewable subscription.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionOfferCodes
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionOfferCodeCreateRequest`

## Response Codes

- `201` Created — `SubscriptionOfferCodeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Managing Subscription Offers

- [Read subscription offer code information](get-v1-subscriptionoffercodes-_id_.md): Get details about a specific subscription offer that has offer codes for an auto-renewable subscription.
- [Deactivate a subscription offer with offer codes](patch-v1-subscriptionoffercodes-_id_.md): Deactivate a subscription offer that has offer codes for an auto-renewable subscription.
- [List all subscription offer code prices](get-v1-subscriptionoffercodes-_id_-prices.md): Get a list of price tiers for a subscription offer code.
- [List price IDs for a subscription offer code](get-v1-subscriptionoffercodes-_id_-relationships-prices.md): Get a list of price resource IDs for a specific subscription offer code.
