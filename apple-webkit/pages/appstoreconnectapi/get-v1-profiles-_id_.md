> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-profiles-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-profiles-_id_)

# Read and download profile information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Get information for a specific provisioning profile and download its data.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/profiles/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `name`, `certificateType`, `displayName`, `serialNumber`, `platform`, `expirationDate`, `certificateContent`, `activated`, `passTypeId`
- `fields[devices]` — `[string]`: **Allowed values:** `name`, `platform`, `udid`, `deviceClass`, `status`, `model`, `addedDate`
- `fields[profiles]` — `[string]`: **Allowed values:** `name`, `platform`, `profileType`, `profileState`, `profileContent`, `uuid`, `createdDate`, `expirationDate`, `bundleId`, `devices`, `certificates`
- `include` — `[string]`: **Allowed values:** `bundleId`, `devices`, `certificates`
- `fields[bundleIds]` — `[string]`: **Allowed values:** `name`, `platform`, `identifier`, `seedId`, `profiles`, `bundleIdCapabilities`, `app`
- `limit[devices]` — `integer`: **Maximum:** `50`
- `limit[certificates]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `ProfileResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Provisioning Profile Information

- [List and download profiles](get-v1-profiles.md): Find and list provisioning profiles and download their data.
