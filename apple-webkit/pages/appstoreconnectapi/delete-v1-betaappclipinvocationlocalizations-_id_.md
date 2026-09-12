> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-betaappclipinvocationlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-betaappclipinvocationlocalizations-_id_)

# Delete a beta app clip invocation localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Delete localized metadata you configured for an App Clip that testers launch using the TestFlight app.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/betaAppClipInvocationLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Beta App Clip Invocation Localizations resource.

## Response Codes

- `204` No Content: The request completed successfully and the specific Beta App Clip Invocation Localizations resource was deleted.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Managing Localizations for Invocations of Beta App Clips

- [Create localized metadata for a beta app clip invocation](post-v1-betaappclipinvocationlocalizations.md): Provide localized metadata for an App Clip experience you make available to testers.
- [Modify localized metadata of an app clip invocation for testers](patch-v1-betaappclipinvocationlocalizations-_id_.md): Change the metadata for an App Clip you make available to testers in the TestFlight app.
