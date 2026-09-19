> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/enterpriseprogramapi/read-device-information

# Read Device Information

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/devices/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[devices]` — `[string]`: **Allowed values:** `addedDate`, `deviceClass`, `model`, `name`, `platform`, `status`, `udid`

## Response Codes

- `200` OK — `DeviceResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:

## See Also

### Getting Device Information

- [List Devices](list-devices.md): Find and list devices registered to your team.
