> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-betaappclipinvocationlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-betaappclipinvocationlocalizations-_id_)

# Modify localized metadata of an app clip invocation for testers

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Change the metadata for an App Clip you make available to testers in the TestFlight app.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/betaAppClipInvocationLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Beta App Clip Invocation Localizations resource.

## HTTP Body

Content type: `application/json`

Type: `BetaAppClipInvocationLocalizationUpdateRequest`

The request body you use to update a beta App Clip invocation localization.

## Response Codes

- `200` OK — `BetaAppClipInvocationLocalizationResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Localizations for Invocations of Beta App Clips

- [Create localized metadata for a beta app clip invocation](post-v1-betaappclipinvocationlocalizations.md): Provide localized metadata for an App Clip experience you make available to testers.
- [Delete a beta app clip invocation localization](delete-v1-betaappclipinvocationlocalizations-_id_.md): Delete localized metadata you configured for an App Clip that testers launch using the TestFlight app.
