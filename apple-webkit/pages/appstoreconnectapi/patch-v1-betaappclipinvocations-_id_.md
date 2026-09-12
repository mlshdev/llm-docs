> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-betaappclipinvocations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-betaappclipinvocations-_id_)

# Modify an app clip invocation you provide to testers

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Change an App Clip invocation you make available to testers in the TestFlight app.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/betaAppClipInvocations/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Beta App Clip Invocations resource.

## HTTP Body

Content type: `application/json`

Type: `BetaAppClipInvocationUpdateRequest`

The request body you use to update a beta App Clip invocation.

## Response Codes

- `200` OK — `BetaAppClipInvocationResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Beta App Clip Invocation

- [Read beta app clip invocation information](get-v1-betaappclipinvocations-_id_.md): Get a specific App Clip invocation you configure for testing.
- [Create an app clip invocation for testers in testflight](post-v1-betaappclipinvocations.md): Configure a new App Clip experience that testers launch using the TestFlight app.
- [Delete an app clip invocation for testers in testflight](delete-v1-betaappclipinvocations-_id_.md): Delete an App Clip invocation you make available to testers in TestFlight.
