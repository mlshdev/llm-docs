> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betaappreviewsubmissions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betaappreviewsubmissions)

# List beta app review submissions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Find and list beta app review submissions for all builds.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaAppReviewSubmissions
```

## Query Parameters

- `fields[betaAppReviewSubmissions]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `betaReviewState`, `submittedDate`, `build`
- `fields[builds]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `filter[betaReviewState]` — `[string]`: Attributes, relationships, and IDs by which to filter.
  **Allowed values:** `WAITING_FOR_REVIEW`, `IN_REVIEW`, `REJECTED`, `APPROVED`
- `filter[build]` — `[string]` (required): Attributes, relationships, and IDs by which to filter.
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `build`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `BetaAppReviewSubmissionsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting Beta App Review Submissions Info

- [Read beta app review submission information](get-v1-betaappreviewsubmissions-_id_.md): Get a specific beta app review submission.
