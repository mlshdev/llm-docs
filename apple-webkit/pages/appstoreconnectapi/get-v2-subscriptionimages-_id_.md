> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-subscriptionimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-subscriptionimages-_id_)

# Read subscription image information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Get the metadata for a subscription image configured with the v2 API, including the asset upload state.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/subscriptionImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `assetToken`, `imageAsset`, `uploadOperations`, `assetDeliveryState`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `200` OK — `SubscriptionImageV2Response`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Working with subscription versions](working-with-subscription-versions.md)

## See Also

### Endpoints

- [Create a subscription image](post-v2-subscriptionimages.md): Reserve a promotion image for an auto-renewable subscription configured with the v2 API and prepare its asset upload.
- [Modify a subscription image](patch-v2-subscriptionimages-_id_.md): Commit the asset upload for a subscription image configured with the v2 API.
- [Delete a subscription image](delete-v2-subscriptionimages-_id_.md): Delete a subscription image configured with the v2 API.
