> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v2-subscriptionimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v2-subscriptionimages-_id_)

# Modify a subscription image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Commit the asset upload for a subscription image configured with the v2 API.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v2/subscriptionImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionImageV2UpdateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `200` OK — `SubscriptionImageV2Response`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Working with subscription versions](working-with-subscription-versions.md)

## See Also

### Endpoints

- [Create a subscription image](post-v2-subscriptionimages.md): Reserve a promotion image for an auto-renewable subscription configured with the v2 API and prepare its asset upload.
- [Read subscription image information](get-v2-subscriptionimages-_id_.md): Get the metadata for a subscription image configured with the v2 API, including the asset upload state.
- [Delete a subscription image](delete-v2-subscriptionimages-_id_.md): Delete a subscription image configured with the v2 API.
