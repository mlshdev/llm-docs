> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-cixcodeversions-_id_-macosversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-cixcodeversions-_id_-macosversions)

# List available macos versions for an xcode version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

List all macOS versions available in Xcode Cloud that support a specific Xcode version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciXcodeVersions/{id}/macOsVersions
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Xcode Versions resource.

## Query Parameters

- `fields[ciMacOsVersions]` — `[string]`: Additional fields to include for each macOS Versions resource returned by the response.
  **Allowed values:** `version`, `name`, `xcodeVersions`
- `fields[ciXcodeVersions]` — `[string]`: Additional fields to include for each macOS Versions resource returned by the response.
  **Allowed values:** `version`, `name`, `testDestinations`, `macOsVersions`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `xcodeVersions`
- `limit` — `integer`: The number of macOS Versions resources to return.
  **Maximum:** `200`
- `limit[xcodeVersions]` — `integer`: The number of included macOS Versions resources to return if the Xcode versions relationship is included.
  **Maximum:** `50`

## Response Codes

- `200` OK — `CiMacOsVersionsResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below lists macOS versions available for a specific Xcode version. Use the information provided in the response to update workflows, build dashboards, and more.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/ciXcodeVersions/b1e1f7b2-14e7-11ec-82a8-0242ac130003/macOsVersions
```

**Response**

```json
{
    "data": [
        {
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
        }
    ],
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/ciMacOsVersions"
    },
    "meta": {
        "paging": {
            "total": 1,
            "limit": 50
        }
    }
}
```

## See Also

### Getting Xcode Version Information

- [List all xcode versions available in xcode cloud](get-v1-cixcodeversions.md): List all Xcode versions that are available to Xcode Cloud workflows.
- [Read xcode version information](get-v1-cixcodeversions-_id_.md): Get information about a specific Xcode version that’s available to Xcode Cloud workflows.
- [List macOS version IDs for a CI Xcode version](get-v1-cixcodeversions-_id_-relationships-macosversions.md)
