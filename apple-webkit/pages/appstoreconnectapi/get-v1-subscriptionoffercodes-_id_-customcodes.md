> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_-customcodes](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionoffercodes-_id_-customcodes)

# List all custom offer codes for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get details about a custom code for a specific subscription offer for an auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionOfferCodes/{id}/customCodes
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionOfferCodeCustomCodes]` — `[string]`: **Allowed values:** `customCode`, `numberOfCodes`, `createdDate`, `expirationDate`, `active`, `offerCode`
- `fields[subscriptionOfferCodes]` — `[string]`: **Allowed values:** `name`, `customerEligibilities`, `offerEligibility`, `duration`, `offerMode`, `numberOfPeriods`, `totalNumberOfCodes`, `productionCodeCount`, `sandboxCodeCount`, `active`, `autoRenewEnabled`, `targetSubscriptionPlanType`, `subscription`, `oneTimeUseCodes`, `customCodes`, `prices`
- `include` — `[string]`: **Allowed values:** `offerCode`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `SubscriptionOfferCodeCustomCodesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Custom Offer Codes

- [Create custom offer codes](post-v1-subscriptionoffercodecustomcodes.md): Create custom offer codes for an auto-renewable subscription offer.
- [List custom code IDs for a subscription offer code](get-v1-subscriptionoffercodes-_id_-relationships-customcodes.md)
- [Read custom offer code information](get-v1-subscriptionoffercodecustomcodes-_id_.md): Get details about a specific offer code for an auto-renewable subscription.
- [Deactivate custom offer codes](patch-v1-subscriptionoffercodecustomcodes-_id_.md): Deactivate a batch of custom offer codes for an auto-renewable subscription.
