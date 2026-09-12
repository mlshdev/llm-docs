> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betabuildlocalizations-_id_-build](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betabuildlocalizations-_id_-build)

# Read the build information of a beta build localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get the build information for a specific beta build localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaBuildLocalizations/{id}/build
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[builds]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`

## Response Codes

- `200` OK — `BuildWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Build Information

- [List beta build localizations](get-v1-betabuildlocalizations.md): Find and list beta build localizations currently associated with apps.
- [Read beta build localization information](get-v1-betabuildlocalizations-_id_.md): Get a specific beta build localization resource.
- [Get the build ID for a beta build localization](get-v1-betabuildlocalizations-_id_-relationships-build.md)
