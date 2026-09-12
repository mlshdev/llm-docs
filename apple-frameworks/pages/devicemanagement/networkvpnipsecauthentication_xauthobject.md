> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnipsecauthentication_xauthobject](https://developer.apple.com/documentation/devicemanagement/networkvpnipsecauthentication_xauthobject)

# NetworkVPNIPSecAuthentication_XAuthObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Settings that control XAuth.

## Declaration

```
object NetworkVPNIPSecAuthentication_XAuthObject
```

## Properties

- `CredentialsAssetReference` — `string`: The identifier of an asset declaration that contains the credentials (user name and password) required for XAuth. Required when `Enabled` key is set to `true`.
- `Enabled` — `boolean` (required): If `true`, enables Xauth for Cisco IPSec VPNs.
- `PasswordEncryption` — `string`: A string that either has the value `Prompt` or isn’t present.
  **Allowed values:** `Prompt`
