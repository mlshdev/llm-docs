> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_-betaappreviewsubmission](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_-betaappreviewsubmission)

# Read the beta app review submission of a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get the beta app review submission status for a specific build.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}/betaAppReviewSubmission
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[betaAppReviewSubmissions]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `betaReviewState`, `submittedDate`, `build`

## Response Codes

- `200` OK — `BetaAppReviewSubmissionWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Checking Beta Review Submission Status

- [Get the beta app review submission ID for a build](get-v1-builds-_id_-relationships-betaappreviewsubmission.md)
