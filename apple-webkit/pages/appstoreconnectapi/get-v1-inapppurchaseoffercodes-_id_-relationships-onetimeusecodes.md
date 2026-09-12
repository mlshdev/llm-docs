> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchaseoffercodes-_id_-relationships-onetimeusecodes](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseoffercodes-_id_-relationships-onetimeusecodes)

# Get All One-Time Use Code IDs for an In-App Purchase Offer Code

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.2+

Get a list of one-time use code resource IDs for a specific in-app purchase offer code.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseOfferCodes/{id}/relationships/oneTimeUseCodes
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `InAppPurchaseOfferCodeOneTimeUseCodesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing One-Time Use Offer Codes

- [Create an In-App Purchase Offer Code One-Time Use Code](post-v1-inapppurchaseoffercodeonetimeusecodes.md): Create a one-time use code for an in-app purchase offer code.
- [Read In-App Purchase Offer Code One-Time Use Code Information](get-v1-inapppurchaseoffercodeonetimeusecodes-_id_.md): Get information about a specific in-app purchase offer code one-time use code.
- [Modify an In-App Purchase Offer Code One-Time Use Code](patch-v1-inapppurchaseoffercodeonetimeusecodes-_id_.md): Update a specific in-app purchase offer code one-time use code.
- [List All One-Time Use Codes for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-onetimeusecodes.md): Get a list of one-time use codes for a specific in-app purchase offer code.
- [List All Values for an In-App Purchase Offer Code One-Time Use Code](get-v1-inapppurchaseoffercodeonetimeusecodes-_id_-values.md): Get a list of values for a specific in-app purchase offer code one-time use code.
