> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-devices-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-devices-_id_)

# Read device information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Get information for a specific device registered to your team.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/devices/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[devices]` — `[string]`: **Allowed values:** `name`, `platform`, `udid`, `deviceClass`, `status`, `model`, `addedDate`

## Response Codes

- `200` OK — `DeviceResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Device Information

- [List devices](get-v1-devices.md): Find and list devices registered to your team.
