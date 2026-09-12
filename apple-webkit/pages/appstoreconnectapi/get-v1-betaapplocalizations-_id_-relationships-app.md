> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betaapplocalizations-_id_-relationships-app](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betaapplocalizations-_id_-relationships-app)

# Get the app ID for a beta app localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaAppLocalizations/{id}/relationships/app
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BetaAppLocalizationAppLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Localization Information

- [List beta app localizations](get-v1-betaapplocalizations.md): Find and list beta app localizations for all apps and locales.
- [Read beta app localization information](get-v1-betaapplocalizations-_id_.md): Get localized beta app information for a specific app and locale.
- [Read the app information of a beta app localization](get-v1-betaapplocalizations-_id_-app.md): Get the app information associated with a specific beta app localization.
