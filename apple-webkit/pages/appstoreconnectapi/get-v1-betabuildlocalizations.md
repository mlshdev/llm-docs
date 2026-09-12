> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betabuildlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betabuildlocalizations)

# List beta build localizations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Find and list beta build localizations currently associated with apps.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaBuildLocalizations
```

## Query Parameters

- `fields[betaBuildLocalizations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `whatsNew`, `locale`, `build`
- `fields[builds]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `filter[build]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[locale]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `build`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `BetaBuildLocalizationsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting Build Information

- [Read beta build localization information](get-v1-betabuildlocalizations-_id_.md): Get a specific beta build localization resource.
- [Read the build information of a beta build localization](get-v1-betabuildlocalizations-_id_-build.md): Get the build information for a specific beta build localization.
- [Get the build ID for a beta build localization](get-v1-betabuildlocalizations-_id_-relationships-build.md)
