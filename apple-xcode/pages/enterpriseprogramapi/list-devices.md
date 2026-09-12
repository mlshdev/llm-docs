> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-devices](https://developer.apple.com/documentation/enterpriseprogramapi/list-devices)

# List Devices

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Find and list devices registered to your team.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/devices
```

## Query Parameters

- `fields[devices]` — `[string]`: **Allowed values:** `addedDate`, `deviceClass`, `model`, `name`, `platform`, `status`, `udid`
- `filter[id]` — `[string]`:
- `filter[name]` — `[string]`:
- `filter[platform]` — `[string]`: **Allowed values:** `IOS`, `MAC_OS`
- `filter[status]` — `[string]`: **Allowed values:** `ENABLED`, `DISABLED`
- `filter[udid]` — `[string]`:
- `limit` — `integer`: **Maximum:** `200`
- `sort` — `[string]`: **Allowed values:** `id`, `-id`, `name`, `-name`, `platform`, `-platform`, `status`, `-status`, `udid`, `-udid`

## Response Codes

- `200` OK — `DevicesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.

## See Also

### Getting Device Information

- [Read Device Information](read-device-information.md)
