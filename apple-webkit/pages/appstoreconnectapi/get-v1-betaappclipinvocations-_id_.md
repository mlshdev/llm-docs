> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betaappclipinvocations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betaappclipinvocations-_id_)

# Read beta app clip invocation information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get a specific App Clip invocation you configure for testing.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaAppClipInvocations/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Beta App Clip Invocations resource.

## Query Parameters

- `fields[betaAppClipInvocations]` — `[string]`: Additional fields to include for each Beta App Clip Invocation resource returned by the response.
  **Allowed values:** `url`, `betaAppClipInvocationLocalizations`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `betaAppClipInvocationLocalizations`
- `limit[betaAppClipInvocationLocalizations]` — `integer`: The number of included Beta App Clip Invocations resources to return if the beta App Clip invocation localizations relationship is included.
  **Maximum:** `50`
- `fields[betaAppClipInvocationLocalizations]` — `[string]`: **Allowed values:** `title`, `locale`

## Response Codes

- `200` OK — `BetaAppClipInvocationResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Managing Beta App Clip Invocation

- [Create an app clip invocation for testers in testflight](post-v1-betaappclipinvocations.md): Configure a new App Clip experience that testers launch using the TestFlight app.
- [Modify an app clip invocation you provide to testers](patch-v1-betaappclipinvocations-_id_.md): Change an App Clip invocation you make available to testers in the TestFlight app.
- [Delete an app clip invocation for testers in testflight](delete-v1-betaappclipinvocations-_id_.md): Delete an App Clip invocation you make available to testers in TestFlight.
