> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-bundleids-_id_-relationships-bundleidcapabilities](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-bundleids-_id_-relationships-bundleidcapabilities)

# Read bundle Id capabilities ids for a bundle Id

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

List all bundleIdCapabilities IDs for a specific bundle Id.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/bundleIds/{id}/relationships/bundleIdCapabilities
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `BundleIdBundleIdCapabilitiesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Related Data

- [Read the app information of a bundle id](get-v1-bundleids-_id_-app.md)
- [List all profiles for a bundle id](get-v1-bundleids-_id_-profiles.md): Get a list of all profiles for a specific bundle ID.
- [List all capabilities for a bundle id](get-v1-bundleids-_id_-bundleidcapabilities.md): Get a list of all capabilities for a specific bundle ID.
- [Get the app ID for a bundle ID](get-v1-bundleids-_id_-relationships-app.md)
- [List profile IDs for a bundle ID](get-v1-bundleids-_id_-relationships-profiles.md)
