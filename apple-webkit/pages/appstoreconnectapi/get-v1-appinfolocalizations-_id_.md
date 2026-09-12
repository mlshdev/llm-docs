> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfolocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfolocalizations-_id_)

# Read app info localization information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Read localized app-level information.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfoLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app info localization resource ID from the [List all app info localizations for an app info](get-v1-appinfos-_id_-appinfolocalizations.md) response.

## Query Parameters

- `fields[appInfoLocalizations]` — `[string]`: Additional fields to include for each app info localization resource returned by the response.
  **Allowed values:** `locale`, `name`, `subtitle`, `privacyPolicyUrl`, `privacyChoicesUrl`, `privacyPolicyText`, `appInfo`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appInfo`
- `fields[appInfos]` — `[string]`: **Allowed values:** `appStoreState`, `state`, `appStoreAgeRating`, `australiaAgeRating`, `brazilAgeRating`, `brazilAgeRatingV2`, `franceAgeRating`, `koreaAgeRating`, `kidsAgeBand`, `app`, `ageRatingDeclaration`, `appInfoLocalizations`, `primaryCategory`, `primarySubcategoryOne`, `primarySubcategoryTwo`, `secondaryCategory`, `secondarySubcategoryOne`, `secondarySubcategoryTwo`, `territoryAgeRatings`

## Response Codes

- `200` OK — `AppInfoLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading App Localization Information

- [List all app info localizations for an app info](get-v1-appinfos-_id_-appinfolocalizations.md): Get a list of localized, app-level information for an app.
