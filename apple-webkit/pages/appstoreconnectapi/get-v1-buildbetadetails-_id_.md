> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-buildbetadetails-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-buildbetadetails-_id_)

# Read build beta detail information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a specific build beta details resource.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/buildBetaDetails/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[buildBetaDetails]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `autoNotifyEnabled`, `internalBuildState`, `externalBuildState`, `build`
- `fields[builds]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `build`

## Response Codes

- `200` OK — `BuildBetaDetailResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Build Beta Details Information

- [List build beta details](get-v1-buildbetadetails.md): Find and list build beta details for all builds.
- [Read the build information of a build beta detail](get-v1-buildbetadetails-_id_-build.md): Get the build information for a specific build beta details resource.
- [Get the build ID for a build beta detail](get-v1-buildbetadetails-_id_-relationships-build.md)
