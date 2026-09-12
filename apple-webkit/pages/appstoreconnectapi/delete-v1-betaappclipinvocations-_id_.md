> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-betaappclipinvocations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-betaappclipinvocations-_id_)

# Delete an app clip invocation for testers in testflight

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Delete an App Clip invocation you make available to testers in TestFlight.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/betaAppClipInvocations/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Beta App Clip Invocations resource.

## Response Codes

- `204` No Content: The request completed successfully and the specific Beta App Clip Invocations resource was deleted.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Managing Beta App Clip Invocation

- [Read beta app clip invocation information](get-v1-betaappclipinvocations-_id_.md): Get a specific App Clip invocation you configure for testing.
- [Create an app clip invocation for testers in testflight](post-v1-betaappclipinvocations.md): Configure a new App Clip experience that testers launch using the TestFlight app.
- [Modify an app clip invocation you provide to testers](patch-v1-betaappclipinvocations-_id_.md): Change an App Clip invocation you make available to testers in the TestFlight app.
