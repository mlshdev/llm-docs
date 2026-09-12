> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionoffercodeonetimeusecodes-_id_-values](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionoffercodeonetimeusecodes-_id_-values)

# List one-time use offer code values

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of one-time use offer codes for an auto-renewable subscription in CSV format.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionOfferCodeOneTimeUseCodes/{id}/values
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `csv`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing One-Time Use Offer Codes

- [Create one-time use offer codes](post-v1-subscriptionoffercodeonetimeusecodes.md): Create one-time use codes for an auto-renewable subscription offer.
- [Read one-time use offer code information](get-v1-subscriptionoffercodeonetimeusecodes-_id_.md): Get details about a specific one-time use offer code for an auto-renewable subscription.
- [Deactivate one-time use offer codes](patch-v1-subscriptionoffercodeonetimeusecodes-_id_.md): Deactivate a batch of one-time use offer codes for an auto-renewable subscription.
- [List all one-time use offer codes for an auto-renewable subscription](get-v1-subscriptionoffercodes-_id_-onetimeusecodes.md): Get details about a one-time use code for a specific subscription offer for an auto-renewable subscription.
- [List one-time use code IDs for a subscription offer code](get-v1-subscriptionoffercodes-_id_-relationships-onetimeusecodes.md): Get a list of one-time use code resource IDs for a specific subscription offer code.
