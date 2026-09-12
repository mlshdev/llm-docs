> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-inapppurchaseoffercodecustomcodes](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-inapppurchaseoffercodecustomcodes)

# Create an In-App Purchase Offer Code Custom Code

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.2+

Create a custom code for an in-app purchase offer code.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/inAppPurchaseOfferCodeCustomCodes
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseOfferCodeCustomCodeCreateRequest`

## Response Codes

- `201` Created — `InAppPurchaseOfferCodeCustomCodeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md)

## See Also

### Managing Custom Offer Codes

- [List All Custom Codes for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-customcodes.md): Get a list of custom codes for a specific in-app purchase offer code.
- [Get All Custom Code IDs for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-relationships-customcodes.md): Get a list of custom code resource IDs for a specific in-app purchase offer code.
- [Read In-App Purchase Offer Code Custom Code Information](get-v1-inapppurchaseoffercodecustomcodes-_id_.md): Get information about a specific in-app purchase offer code custom code.
- [Modify an In-App Purchase Offer Code Custom Code](patch-v1-inapppurchaseoffercodecustomcodes-_id_.md): Update a specific in-app purchase offer code custom code.
