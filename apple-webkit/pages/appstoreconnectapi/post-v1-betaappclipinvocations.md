> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betaappclipinvocations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betaappclipinvocations)

# Create an app clip invocation for testers in testflight

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Configure a new App Clip experience that testers launch using the TestFlight app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaAppClipInvocations
```

## HTTP Body

Content type: `application/json`

Type: `BetaAppClipInvocationCreateRequest`

The request body you use to create a beta App Clip invocation.

## Response Codes

- `201` Created — `BetaAppClipInvocationResponse`: The request completed successfully and a new Beta App Clip Invocations resource has been created.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Beta App Clip Invocation

- [Read beta app clip invocation information](get-v1-betaappclipinvocations-_id_.md): Get a specific App Clip invocation you configure for testing.
- [Modify an app clip invocation you provide to testers](patch-v1-betaappclipinvocations-_id_.md): Change an App Clip invocation you make available to testers in the TestFlight app.
- [Delete an app clip invocation for testers in testflight](delete-v1-betaappclipinvocations-_id_.md): Delete an App Clip invocation you make available to testers in TestFlight.
