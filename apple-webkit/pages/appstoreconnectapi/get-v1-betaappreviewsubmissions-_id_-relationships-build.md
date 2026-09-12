> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betaappreviewsubmissions-_id_-relationships-build](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betaappreviewsubmissions-_id_-relationships-build)

# Get the build ID for a beta app review submission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaAppReviewSubmissions/{id}/relationships/build
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BetaAppReviewSubmissionBuildLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Build Information

- [Read the build information of a beta app review submission](get-v1-betaappreviewsubmissions-_id_-build.md): Get the build information for a specific beta app review submission.
