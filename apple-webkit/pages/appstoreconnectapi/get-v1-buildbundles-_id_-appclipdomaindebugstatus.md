> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-buildbundles-_id_-appclipdomaindebugstatus](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-buildbundles-_id_-appclipdomaindebugstatus)

# Read app clip domain debug status information for a build bundle

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get the debug status of the domain you associate with your App Clip for a specific build bundle.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/buildBundles/{id}/appClipDomainDebugStatus
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Build Bundles resource.

## Query Parameters

- `fields[appClipDomainStatuses]` — `[string]`: Additional fields to include for each App Clip Domain Debug Statuses resource returned by the response.
  **Allowed values:** `domains`, `lastUpdatedDate`

## Response Codes

- `200` OK — `AppClipDomainStatusResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Build Bundle Information

- [Read the app clip domain cache status information for a build bundle](get-v1-buildbundles-_id_-appclipdomaincachestatus.md): Get the cache status of the domain you associate with your App Clip for a specific build bundle.
- [List all beta app clip invocations for a build bundle](get-v1-buildbundles-_id_-betaappclipinvocations.md): Get all App Clip invocations you configure for testing for a specific build bundle.
- [List all file sizes for a build bundle](get-v1-buildbundles-_id_-buildbundlefilesizes.md): Get all file sizes for a specific build bundle.
- [Get the App Clip domain cache status ID for a build bundle](get-v1-buildbundles-_id_-relationships-appclipdomaincachestatus.md)
- [Get the App Clip domain debug status ID for a build bundle](get-v1-buildbundles-_id_-relationships-appclipdomaindebugstatus.md)
- [List beta App Clip invocation IDs for a build bundle](get-v1-buildbundles-_id_-relationships-betaappclipinvocations.md)
- [List file size IDs for a build bundle](get-v1-buildbundles-_id_-relationships-buildbundlefilesizes.md)
