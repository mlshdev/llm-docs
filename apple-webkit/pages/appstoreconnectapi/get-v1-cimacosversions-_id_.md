> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-cimacosversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-cimacosversions-_id_)

# Read macos version information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get information about a specific macOS version that’s available to Xcode Cloud workflows.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciMacOsVersions/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the macOS Versions resource.

## Query Parameters

- `fields[ciMacOsVersions]` — `[string]`: Additional fields to include for the macOS Versions resource returned by the response.
  **Allowed values:** `version`, `name`, `xcodeVersions`
- `fields[ciXcodeVersions]` — `[string]`: Additional fields to include for the macOS Versions resource returned by the response.
  **Allowed values:** `version`, `name`, `testDestinations`, `macOsVersions`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `xcodeVersions`
- `limit[xcodeVersions]` — `integer`: The number of included macOS Versions resources to return if the Xcode versions relationship is included.
  **Maximum:** `50`

## Response Codes

- `200` OK — `CiMacOsVersionResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below accesses information about a macOS version available to Xcode Cloud workflows. Use the data provided in the response to read additional information; for example, Xcode versions.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/ciMacOsVersions/20G95
```

**Response**

```json
{
    "data": {
        "type": "ciMacOsVersions",
        "id": "20G95",
        "attributes": {
            "version": "20G95",
            "name": "macOS Big Sur 11.5.2 (20G95)"
        },
        "relationships": {
            "xcodeVersions": {
                "links": {
                    "self": "https://api.appstoreconnect.apple.com/v1/ciMacOsVersions/20G95/relationships/xcodeVersions",
                    "related": "https://api.appstoreconnect.apple.com/v1/ciMacOsVersions/20G95/xcodeVersions"
                }
            }
        },
        "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/ciMacOsVersions/20G95"
        }
    },
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/ciMacOsVersions/20G95"
    }
}
```

## See Also

### Getting macOS Version Information

- [List all macos versions available in xcode cloud](get-v1-cimacosversions.md): List all macOS versions available to Xcode Cloud workflows.
- [List available xcode versions for a macos version](get-v1-cimacosversions-_id_-xcodeversions.md): List all Xcode versions available for a specific macOS version in Xcode Cloud.
- [List Xcode version IDs for a CI macOS version](get-v1-cimacosversions-_id_-relationships-xcodeversions.md)
