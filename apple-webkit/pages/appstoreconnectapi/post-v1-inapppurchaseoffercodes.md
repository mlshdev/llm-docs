> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-inapppurchaseoffercodes](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-inapppurchaseoffercodes)

# Create an In-App Purchase Offer Code

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.2+

Create an offer code for an in-app purchase.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/inAppPurchaseOfferCodes
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseOfferCodeCreateRequest`

## Response Codes

- `201` Created — `InAppPurchaseOfferCodeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md)

## See Also

### Creating and Managing In-App Purchase Offer Codes

- [Read In-App Purchase Offer Code Information](get-v1-inapppurchaseoffercodes-_id_.md): Get information about a specific in-app purchase offer code.
- [Modify an In-App Purchase Offer Code](patch-v1-inapppurchaseoffercodes-_id_.md): Update a specific in-app purchase offer code.
- [List All Prices for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-prices.md): Get a list of prices for a specific in-app purchase offer code.
- [Get All Price IDs for an In-App Purchase Offer Code](get-v1-inapppurchaseoffercodes-_id_-relationships-prices.md): Get a list of price resource IDs for a specific in-app purchase offer code.
