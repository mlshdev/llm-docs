> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-cixcodeversions-_id_-relationships-macosversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-cixcodeversions-_id_-relationships-macosversions)

# List macOS version IDs for a CI Xcode version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciXcodeVersions/{id}/relationships/macOsVersions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `CiXcodeVersionMacOsVersionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Xcode Version Information

- [List all xcode versions available in xcode cloud](get-v1-cixcodeversions.md): List all Xcode versions that are available to Xcode Cloud workflows.
- [Read xcode version information](get-v1-cixcodeversions-_id_.md): Get information about a specific Xcode version that’s available to Xcode Cloud workflows.
- [List available macos versions for an xcode version](get-v1-cixcodeversions-_id_-macosversions.md): List all macOS versions available in Xcode Cloud that support a specific Xcode version.
