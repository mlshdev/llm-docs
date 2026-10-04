> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseversions-_id_-localizations

# List localizations for an In-App Purchase version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

List the localized display names and descriptions captured in a draft version of an In-App Purchase.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseVersions/{id}/localizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchaseLocalizations]` — `[string]`: **Allowed values:** `name`, `locale`, `description`, `version`
- `fields[inAppPurchaseVersions]` — `[string]`: **Allowed values:** `version`, `state`, `inAppPurchase`, `image`, `images`, `localizations`
- `limit` — `integer`: **Maximum:** `200`
- `include` — `[string]`: **Allowed values:** `version`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `200` OK — `InAppPurchaseLocalizationsV2Response`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Managing In-App Purchases](managing-in-app-purchases.md)
- [Working with In-App Purchase versions](working-with-in-app-purchase-versions.md)

## See Also

### Endpoints

- [Create an In-App Purchase localization](post-v2-inapppurchaselocalizations.md): Create a localized display name and description for an In-App Purchase configured with the v2 API.
- [Read In-App Purchase localization information](get-v2-inapppurchaselocalizations-_id_.md): Get the display name and description for a specific locale of an In-App Purchase configured with the v2 API.
- [Modify an In-App Purchase localization](patch-v2-inapppurchaselocalizations-_id_.md): Update the display name and description for a specific locale of an In-App Purchase configured with the v2 API.
- [Delete an In-App Purchase localization](delete-v2-inapppurchaselocalizations-_id_.md): Delete a localized display name and description for an In-App Purchase configured with the v2 API.
