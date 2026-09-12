> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v2-inapppurchaselocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v2-inapppurchaselocalizations-_id_)

# Modify an in-app purchase localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Update the display name and description for a specific locale of an in-app purchase configured with the v2 API.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v2/inAppPurchaseLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseLocalizationV2UpdateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `200` OK — `InAppPurchaseLocalizationV2Response`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)

## See Also

### Endpoints

- [List localizations for an in-app purchase version](get-v1-inapppurchaseversions-_id_-localizations.md): List the localized display names and descriptions captured in a draft version of an in-app purchase.
- [Create an in-app purchase localization](post-v2-inapppurchaselocalizations.md): Create a localized display name and description for an in-app purchase configured with the v2 API.
- [Read in-app purchase localization information](get-v2-inapppurchaselocalizations-_id_.md): Get the display name and description for a specific locale of an in-app purchase configured with the v2 API.
- [Delete an in-app purchase localization](delete-v2-inapppurchaselocalizations-_id_.md): Delete a localized display name and description for an in-app purchase configured with the v2 API.
