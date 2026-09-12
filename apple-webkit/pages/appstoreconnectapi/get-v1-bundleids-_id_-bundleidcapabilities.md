> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-bundleids-_id_-bundleidcapabilities](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-bundleids-_id_-bundleidcapabilities)

# List all capabilities for a bundle id

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Get a list of all capabilities for a specific bundle ID.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/bundleIds/{id}/bundleIdCapabilities
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[bundleIdCapabilities]` — `[string]`: **Allowed values:** `capabilityType`, `settings`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `BundleIdCapabilitiesWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Related Data

- [Read the app information of a bundle id](get-v1-bundleids-_id_-app.md)
- [List all profiles for a bundle id](get-v1-bundleids-_id_-profiles.md): Get a list of all profiles for a specific bundle ID.
- [Get the app ID for a bundle ID](get-v1-bundleids-_id_-relationships-app.md)
- [Read bundle Id capabilities ids for a bundle Id](get-v1-bundleids-_id_-relationships-bundleidcapabilities.md): List all bundleIdCapabilities IDs for a specific bundle Id.
- [List profile IDs for a bundle ID](get-v1-bundleids-_id_-relationships-profiles.md)
