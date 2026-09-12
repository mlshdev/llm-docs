> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchaseoffercodecustomcodes-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseoffercodecustomcodes-_id_)

# Read In-App Purchase Offer Code Custom Code Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.2+

Get information about a specific in-app purchase offer code custom code.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseOfferCodeCustomCodes/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchaseOfferCodeCustomCodes]` — `[string]`: **Allowed values:** `customCode`, `numberOfCodes`, `createdDate`, `expirationDate`, `active`, `createdByActor`, `deactivatedByActor`
- `include` — `[string]`: **Allowed values:** `createdByActor`, `deactivatedByActor`
- `fields[actors]` — `[string]`: **Allowed values:** `actorType`, `userFirstName`, `userLastName`, `userEmail`, `apiKeyId`

## Response Codes

- `200` OK — `InAppPurchaseOfferCodeCustomCodeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Custom Offer Codes

- [Create an In-App Purchase Offer Code Custom Code](post-v1-inapppurchaseoffercodecustomcodes.md): Create a custom code for an in-app purchase offer code.
- [List All Custom Codes for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-customcodes.md): Get a list of custom codes for a specific in-app purchase offer code.
- [Get All Custom Code IDs for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-relationships-customcodes.md): Get a list of custom code resource IDs for a specific in-app purchase offer code.
- [Modify an In-App Purchase Offer Code Custom Code](patch-v1-inapppurchaseoffercodecustomcodes-_id_.md): Update a specific in-app purchase offer code custom code.
