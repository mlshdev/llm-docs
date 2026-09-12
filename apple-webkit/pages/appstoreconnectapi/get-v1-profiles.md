> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-profiles](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-profiles)

# List and download profiles

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Find and list provisioning profiles and download their data.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/profiles
```

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `name`, `certificateType`, `displayName`, `serialNumber`, `platform`, `expirationDate`, `certificateContent`, `activated`, `passTypeId`
- `fields[devices]` — `[string]`: **Allowed values:** `name`, `platform`, `udid`, `deviceClass`, `status`, `model`, `addedDate`
- `fields[profiles]` — `[string]`: **Allowed values:** `name`, `platform`, `profileType`, `profileState`, `profileContent`, `uuid`, `createdDate`, `expirationDate`, `bundleId`, `devices`, `certificates`
- `filter[id]` — `[string]`:
- `filter[name]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `bundleId`, `devices`, `certificates`
- `limit` — `integer`: **Maximum:** `200`
- `limit[certificates]` — `integer`: **Maximum:** `50`
- `limit[devices]` — `integer`: **Maximum:** `50`
- `sort` — `[string]`: **Allowed values:** `name`, `-name`, `profileType`, `-profileType`, `profileState`, `-profileState`, `id`, `-id`
- `fields[bundleIds]` — `[string]`: **Allowed values:** `name`, `platform`, `identifier`, `seedId`, `profiles`, `bundleIdCapabilities`, `app`
- `filter[profileState]` — `[string]`: **Allowed values:** `ACTIVE`, `INVALID`
- `filter[profileType]` — `[string]`: **Allowed values:** `IOS_APP_DEVELOPMENT`, `IOS_APP_STORE`, `IOS_APP_ADHOC`, `IOS_APP_INHOUSE`, `MAC_APP_DEVELOPMENT`, `MAC_APP_STORE`, `MAC_APP_DIRECT`, `TVOS_APP_DEVELOPMENT`, `TVOS_APP_STORE`, `TVOS_APP_ADHOC`, `TVOS_APP_INHOUSE`, `MAC_CATALYST_APP_DEVELOPMENT`, `MAC_CATALYST_APP_STORE`, `MAC_CATALYST_APP_DIRECT`

## Response Codes

- `200` OK — `ProfilesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting Provisioning Profile Information

- [Read and download profile information](get-v1-profiles-_id_.md): Get information for a specific provisioning profile and download its data.
