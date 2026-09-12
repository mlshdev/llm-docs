> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-cimacosversions-_id_-relationships-xcodeversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-cimacosversions-_id_-relationships-xcodeversions)

# List Xcode version IDs for a CI macOS version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciMacOsVersions/{id}/relationships/xcodeVersions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `CiMacOsVersionXcodeVersionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting macOS Version Information

- [List all macos versions available in xcode cloud](get-v1-cimacosversions.md): List all macOS versions available to Xcode Cloud workflows.
- [Read macos version information](get-v1-cimacosversions-_id_.md): Get information about a specific macOS version that’s available to Xcode Cloud workflows.
- [List available xcode versions for a macos version](get-v1-cimacosversions-_id_-xcodeversions.md): List all Xcode versions available for a specific macOS version in Xcode Cloud.
