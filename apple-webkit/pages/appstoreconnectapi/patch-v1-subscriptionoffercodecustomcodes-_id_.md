> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptionoffercodecustomcodes-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptionoffercodecustomcodes-_id_)

# Deactivate custom offer codes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Deactivate a batch of custom offer codes for an auto-renewable subscription.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionOfferCodeCustomCodes/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionOfferCodeCustomCodeUpdateRequest`

## Response Codes

- `200` OK — `SubscriptionOfferCodeCustomCodeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Custom Offer Codes

- [Create custom offer codes](post-v1-subscriptionoffercodecustomcodes.md): Create custom offer codes for an auto-renewable subscription offer.
- [List all custom offer codes for an auto-renewable subscription](get-v1-subscriptionoffercodes-_id_-customcodes.md): Get details about a custom code for a specific subscription offer for an auto-renewable subscription.
- [List custom code IDs for a subscription offer code](get-v1-subscriptionoffercodes-_id_-relationships-customcodes.md)
- [Read custom offer code information](get-v1-subscriptionoffercodecustomcodes-_id_.md): Get details about a specific offer code for an auto-renewable subscription.
