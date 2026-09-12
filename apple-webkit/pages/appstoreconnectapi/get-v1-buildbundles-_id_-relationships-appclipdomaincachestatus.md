> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-buildbundles-_id_-relationships-appclipdomaincachestatus](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-buildbundles-_id_-relationships-appclipdomaincachestatus)

# Get the App Clip domain cache status ID for a build bundle

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/buildBundles/{id}/relationships/appClipDomainCacheStatus
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BuildBundleAppClipDomainCacheStatusLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Build Bundle Information

- [Read the app clip domain cache status information for a build bundle](get-v1-buildbundles-_id_-appclipdomaincachestatus.md): Get the cache status of the domain you associate with your App Clip for a specific build bundle.
- [Read app clip domain debug status information for a build bundle](get-v1-buildbundles-_id_-appclipdomaindebugstatus.md): Get the debug status of the domain you associate with your App Clip for a specific build bundle.
- [List all beta app clip invocations for a build bundle](get-v1-buildbundles-_id_-betaappclipinvocations.md): Get all App Clip invocations you configure for testing for a specific build bundle.
- [List all file sizes for a build bundle](get-v1-buildbundles-_id_-buildbundlefilesizes.md): Get all file sizes for a specific build bundle.
- [Get the App Clip domain debug status ID for a build bundle](get-v1-buildbundles-_id_-relationships-appclipdomaindebugstatus.md)
- [List beta App Clip invocation IDs for a build bundle](get-v1-buildbundles-_id_-relationships-betaappclipinvocations.md)
- [List file size IDs for a build bundle](get-v1-buildbundles-_id_-relationships-buildbundlefilesizes.md)
