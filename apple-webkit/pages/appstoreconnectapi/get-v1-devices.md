> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-devices](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-devices)

# List devices

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Find and list devices registered to your team.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/devices
```

## Query Parameters

- `fields[devices]` — `[string]`: **Allowed values:** `name`, `platform`, `udid`, `deviceClass`, `status`, `model`, `addedDate`
- `filter[id]` — `[string]`:
- `filter[name]` — `[string]`:
- `filter[platform]` — `[string]`: **Allowed values:** `IOS`, `MAC_OS`, `UNIVERSAL`
- `filter[status]` — `[string]`: **Allowed values:** `ENABLED`, `DISABLED`
- `filter[udid]` — `[string]`:
- `limit` — `integer`: **Maximum:** `200`
- `sort` — `[string]`: **Allowed values:** `name`, `-name`, `platform`, `-platform`, `udid`, `-udid`, `status`, `-status`, `id`, `-id`

## Response Codes

- `200` OK — `DevicesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting Device Information

- [Read device information](get-v1-devices-_id_.md): Get information for a specific device registered to your team.
