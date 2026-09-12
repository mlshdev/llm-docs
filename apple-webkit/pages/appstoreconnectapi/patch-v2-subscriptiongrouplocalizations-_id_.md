> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v2-subscriptiongrouplocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v2-subscriptiongrouplocalizations-_id_)

# Modify a subscription group localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Update the custom name for a specific locale of a subscription group configured with the v2 API.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v2/subscriptionGroupLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionGroupLocalizationV2UpdateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `200` OK — `SubscriptionGroupLocalizationV2Response`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)

## See Also

### Endpoints

- [Create a subscription group localization](post-v2-subscriptiongrouplocalizations.md): Create a localized custom name for a subscription group configured with the v2 API.
- [Read subscription group localization information](get-v2-subscriptiongrouplocalizations-_id_.md): Get the custom name for a specific locale of a subscription group configured with the v2 API.
- [Delete a subscription group localization](delete-v2-subscriptiongrouplocalizations-_id_.md): Delete a localized custom name for a subscription group configured with the v2 API.
