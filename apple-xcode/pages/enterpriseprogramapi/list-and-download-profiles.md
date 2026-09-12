> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-and-download-profiles](https://developer.apple.com/documentation/enterpriseprogramapi/list-and-download-profiles)

# List and Download Profiles

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Find and list provisioning profiles and download their data.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/profiles
```

## Query Parameters

- `fields[bundleIds]` — `[string]`: **Allowed values:** `bundleIdCapabilities`, `identifier`, `name`, `platform`, `profiles`, `seedId`
- `fields[certificates]` — `[string]`: **Allowed values:** `certificateContent`, `certificateType`, `csrContent`, `displayName`, `expirationDate`, `name`, `passTypeId`, `platform`, `serialNumber`
- `fields[devices]` — `[string]`: **Allowed values:** `addedDate`, `deviceClass`, `model`, `name`, `platform`, `status`, `udid`
- `fields[profiles]` — `[string]`: **Allowed values:** `bundleId`, `certificates`, `createdDate`, `devices`, `expirationDate`, `name`, `platform`, `profileContent`, `profileState`, `profileType`, `uuid`
- `filter[id]` — `[string]`:
- `filter[name]` — `[string]`:
- `filter[profileState]` — `[string]`: **Allowed values:** `ACTIVE`, `INVALID`
- `filter[profileType]` — `[string]`: **Allowed values:** `IOS_APP_DEVELOPMENT`, `IOS_APP_STORE`, `IOS_APP_ADHOC`, `IOS_APP_INHOUSE`, `MAC_APP_DEVELOPMENT`, `MAC_APP_STORE`, `MAC_APP_DIRECT`, `TVOS_APP_DEVELOPMENT`, `TVOS_APP_STORE`, `TVOS_APP_ADHOC`, `TVOS_APP_INHOUSE`, `MAC_CATALYST_APP_DEVELOPMENT`, `MAC_CATALYST_APP_STORE`, `MAC_CATALYST_APP_DIRECT`
- `include` — `[string]`: **Allowed values:** `bundleId`, `certificates`, `devices`
- `limit` — `integer`: **Maximum:** `200`
- `limit[certificates]` — `integer`: **Maximum:** `50`
- `limit[devices]` — `integer`: **Maximum:** `50`
- `sort` — `[string]`: **Allowed values:** `id`, `-id`, `name`, `-name`, `profileState`, `-profileState`, `profileType`, `-profileType`

## Response Codes

- `200` OK — `ProfilesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.

## See Also

### Getting Provisioning Profile Information

- [Read and Download Profile Information](read-and-download-profile-information.md): Get information for a specific provisioning profile and download its data.
