> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-inapppurchaseoffercodeonetimeusecodes](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-inapppurchaseoffercodeonetimeusecodes)

# Create an In-App Purchase Offer Code One-Time Use Code

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.2+

Create a one-time use code for an in-app purchase offer code.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/inAppPurchaseOfferCodeOneTimeUseCodes
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseOfferCodeOneTimeUseCodeCreateRequest`

## Response Codes

- `201` Created — `InAppPurchaseOfferCodeOneTimeUseCodeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md)

## See Also

### Managing One-Time Use Offer Codes

- [Read In-App Purchase Offer Code One-Time Use Code Information](get-v1-inapppurchaseoffercodeonetimeusecodes-_id_.md): Get information about a specific in-app purchase offer code one-time use code.
- [Modify an In-App Purchase Offer Code One-Time Use Code](patch-v1-inapppurchaseoffercodeonetimeusecodes-_id_.md): Update a specific in-app purchase offer code one-time use code.
- [List All One-Time Use Codes for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-onetimeusecodes.md): Get a list of one-time use codes for a specific in-app purchase offer code.
- [List All Values for an In-App Purchase Offer Code One-Time Use Code](get-v1-inapppurchaseoffercodeonetimeusecodes-_id_-values.md): Get a list of values for a specific in-app purchase offer code one-time use code.
- [Get All One-Time Use Code IDs for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-relationships-onetimeusecodes.md): Get a list of one-time use code resource IDs for a specific in-app purchase offer code.
