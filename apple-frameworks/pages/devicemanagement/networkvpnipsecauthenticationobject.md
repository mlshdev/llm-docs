> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnipsecauthenticationobject](https://developer.apple.com/documentation/devicemanagement/networkvpnipsecauthenticationobject)

# NetworkVPNIPSecAuthenticationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Settings that control authentication.

## Declaration

```
object NetworkVPNIPSecAuthenticationObject
```

## Properties

- `CredentialsAssetReference` — `string`: The identifier of an asset declaration that contains the credentials (password) to authenticate with the VPN servers.

  Only use this with Cisco IPSec VPNs and if the `Authentication.Method` key is to `SharedSecret`.
- `IdentityAssetReference` — `string`: The identifier of a credential asset declaration that contains the identity that this account requires to authenticate with the VPN servers.

  Only use this with Cisco IPSec VPNs and if the `Authentication.Method` key is to `Certificate`.
- `LocalIdentifier` — `string`: The name of the group. For hybrid authentication, the string needs to end with “hybrid”.

  Present only for Cisco IPSec if `Authentication.Method` is `SharedSecret`.
- `LocalIdentifierType` — `string`: Present only if `Authentication.Method` is `SharedSecret`. The value is `KeyID`. The system uses this value for Cisco IPSec VPNs.
  **Allowed values:** `KeyID`
- `Method` — `string` (required): The authentication method to use.
  **Allowed values:** `SharedSecret`, `Certificate`
- `PromptForVPNPIN` — `boolean`: If `true`, prompts for a PIN when connecting to Cisco IPSec VPNs.
  **Default:** `false`
- `XAuth` — `NetworkVPNIPSecAuthentication_XAuthObject`: Settings that control XAuth.

## Topics

### Objects

- [NetworkVPNIPSecAuthentication_XAuthObject](networkvpnipsecauthentication_xauthobject.md): Settings that control XAuth.

## See Also

### Objects

- [NetworkVPNIPSecDNSObject](networkvpnipsecdnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIPSecIdleObject](networkvpnipsecidleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNIPSecOnDemandObject](networkvpnipsecondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNIPSecProxiesObject](networkvpnipsecproxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
