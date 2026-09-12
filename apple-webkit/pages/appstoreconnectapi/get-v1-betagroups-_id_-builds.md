> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betagroups-_id_-builds](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betagroups-_id_-builds)

# List all builds for a beta group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a list of builds associated with a specific beta group.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaGroups/{id}/builds
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`
- `fields[builds]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`

## Response Codes

- `200` OK — `BuildsWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading Build and Beta Tester Information

- [Get all build ids in a beta group](get-v1-betagroups-_id_-relationships-builds.md): Get a list of build resource IDs in a specific beta group.
- [List all beta testers in a beta group](get-v1-betagroups-_id_-betatesters.md): Get a list of beta testers contained in a specific beta group.
- [Get all beta tester ids in a beta group](get-v1-betagroups-_id_-relationships-betatesters.md): Get a list of the beta tester resource IDs in a specific beta group.
