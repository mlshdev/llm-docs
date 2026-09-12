> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-buildbundles-_id_-betaappclipinvocations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-buildbundles-_id_-betaappclipinvocations)

# List all beta app clip invocations for a build bundle

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get all App Clip invocations you configure for testing for a specific build bundle.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/buildBundles/{id}/betaAppClipInvocations
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Build Bundles resource.

## Query Parameters

- `fields[betaAppClipInvocationLocalizations]` — `[string]`: Additional fields to include for each Beta App Clip Invocation resource returned by the response.
  **Allowed values:** `title`, `locale`
- `fields[betaAppClipInvocations]` — `[string]`: Additional fields to include for each Beta App Clip Invocation resource returned by the response.
  **Allowed values:** `url`, `betaAppClipInvocationLocalizations`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `betaAppClipInvocationLocalizations`
- `limit` — `integer`: The number of Beta App Clip Invocations resources to return.
  **Maximum:** `200`
- `limit[betaAppClipInvocationLocalizations]` — `integer`: The number of included Beta App Clip Invocations resources to return if the beta App Clip invocation localizations relationship is included.
  **Maximum:** `50`

## Response Codes

- `200` OK — `BetaAppClipInvocationsResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Build Bundle Information

- [Read the app clip domain cache status information for a build bundle](get-v1-buildbundles-_id_-appclipdomaincachestatus.md): Get the cache status of the domain you associate with your App Clip for a specific build bundle.
- [Read app clip domain debug status information for a build bundle](get-v1-buildbundles-_id_-appclipdomaindebugstatus.md): Get the debug status of the domain you associate with your App Clip for a specific build bundle.
- [List all file sizes for a build bundle](get-v1-buildbundles-_id_-buildbundlefilesizes.md): Get all file sizes for a specific build bundle.
- [Get the App Clip domain cache status ID for a build bundle](get-v1-buildbundles-_id_-relationships-appclipdomaincachestatus.md)
- [Get the App Clip domain debug status ID for a build bundle](get-v1-buildbundles-_id_-relationships-appclipdomaindebugstatus.md)
- [List beta App Clip invocation IDs for a build bundle](get-v1-buildbundles-_id_-relationships-betaappclipinvocations.md)
- [List file size IDs for a build bundle](get-v1-buildbundles-_id_-relationships-buildbundlefilesizes.md)
