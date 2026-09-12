> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_-relationships-customcodes](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_-relationships-customcodes)

# List custom code IDs for a subscription offer code

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionOfferCodes/{id}/relationships/customCodes
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `SubscriptionOfferCodeCustomCodesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Custom Offer Codes

- [Create custom offer codes](post-v1-subscriptionoffercodecustomcodes.md): Create custom offer codes for an auto-renewable subscription offer.
- [List all custom offer codes for an auto-renewable subscription](get-v1-subscriptionoffercodes-_id_-customcodes.md): Get details about a custom code for a specific subscription offer for an auto-renewable subscription.
- [Read custom offer code information](get-v1-subscriptionoffercodecustomcodes-_id_.md): Get details about a specific offer code for an auto-renewable subscription.
- [Deactivate custom offer codes](patch-v1-subscriptionoffercodecustomcodes-_id_.md): Deactivate a batch of custom offer codes for an auto-renewable subscription.
