> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-betaappreviewsubmission](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-betaappreviewsubmission)

# Get the beta app review submission ID for a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}/relationships/betaAppReviewSubmission
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BuildBetaAppReviewSubmissionLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Checking Beta Review Submission Status

- [Read the beta app review submission of a build](get-v1-builds-_id_-betaappreviewsubmission.md): Get the beta app review submission status for a specific build.
