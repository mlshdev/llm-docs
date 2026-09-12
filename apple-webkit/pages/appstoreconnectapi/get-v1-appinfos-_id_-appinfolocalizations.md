> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-appinfolocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-appinfolocalizations)

# List all app info localizations for an app info

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get a list of localized, app-level information for an app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/appInfoLocalizations
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `appInfo` resource ID from the [List all app infos for an app](get-v1-apps-_id_-appinfos.md) response.

## Query Parameters

- `fields[appInfoLocalizations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `locale`, `name`, `subtitle`, `privacyPolicyUrl`, `privacyChoicesUrl`, `privacyPolicyText`, `appInfo`
- `fields[appInfos]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `appStoreState`, `state`, `appStoreAgeRating`, `australiaAgeRating`, `brazilAgeRating`, `brazilAgeRatingV2`, `franceAgeRating`, `koreaAgeRating`, `kidsAgeBand`, `app`, `ageRatingDeclaration`, `appInfoLocalizations`, `primaryCategory`, `primarySubcategoryOne`, `primarySubcategoryTwo`, `secondaryCategory`, `secondarySubcategoryOne`, `secondarySubcategoryTwo`, `territoryAgeRatings`
- `filter[locale]` — `[string]`: Fields to return for included related types.
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `appInfo`
- `limit` — `integer`: Number of included related resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppInfoLocalizationsResponse`: Request succeeded.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading App Localization Information

- [Read app info localization information](get-v1-appinfolocalizations-_id_.md): Read localized app-level information.
