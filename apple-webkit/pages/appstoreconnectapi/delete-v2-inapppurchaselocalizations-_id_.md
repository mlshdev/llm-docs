> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/delete-v2-inapppurchaselocalizations-_id_

# Delete an In-App Purchase localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Delete a localized display name and description for an In-App Purchase configured with the v2 API.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v2/inAppPurchaseLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `204` No Content:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)

## See Also

### Endpoints

- [List localizations for an In-App Purchase version](get-v1-inapppurchaseversions-_id_-localizations.md): List the localized display names and descriptions captured in a draft version of an In-App Purchase.
- [Create an In-App Purchase localization](post-v2-inapppurchaselocalizations.md): Create a localized display name and description for an In-App Purchase configured with the v2 API.
- [Read In-App Purchase localization information](get-v2-inapppurchaselocalizations-_id_.md): Get the display name and description for a specific locale of an In-App Purchase configured with the v2 API.
- [Modify an In-App Purchase localization](patch-v2-inapppurchaselocalizations-_id_.md): Update the display name and description for a specific locale of an In-App Purchase configured with the v2 API.
