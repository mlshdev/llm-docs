> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betaappclipinvocationlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betaappclipinvocationlocalizations)

# Create localized metadata for a beta app clip invocation

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Provide localized metadata for an App Clip experience you make available to testers.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaAppClipInvocationLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `BetaAppClipInvocationLocalizationCreateRequest`

The request body you use to create a beta App Clip invocation localization.

## Response Codes

- `201` Created — `BetaAppClipInvocationLocalizationResponse`: The request completed successfully and a new Beta App Clip Invocation Localizations resource has been created.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Localizations for Invocations of Beta App Clips

- [Modify localized metadata of an app clip invocation for testers](patch-v1-betaappclipinvocationlocalizations-_id_.md): Change the metadata for an App Clip you make available to testers in the TestFlight app.
- [Delete a beta app clip invocation localization](delete-v1-betaappclipinvocationlocalizations-_id_.md): Delete localized metadata you configured for an App Clip that testers launch using the TestFlight app.
