> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnvpnpluginauthenticationobject](https://developer.apple.com/documentation/devicemanagement/networkvpnvpnpluginauthenticationobject)

# NetworkVPNVPNPluginAuthenticationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Settings that control authentication.

## Declaration

```
object NetworkVPNVPNPluginAuthenticationObject
```

## Properties

- `CredentialsAssetReference` — `string`: The identifier of an asset declaration that contains the credentials (user name and password) to authenticate with the VPN server. Required when `Authentication.Method` is set to `Password`.
- `IdentityAssetReference` — `string`: The identifier of a credential asset declaration that contains the identity that this account requires to authenticate with the VPN server. Required when `Authentication.Method` is set to `Certificate`.
- `Method` — `string` (required): The authentication method to use.
  **Allowed values:** `Password`, `Certificate`, `Password+Certificate`

## See Also

### Objects

- [NetworkVPNVPNPluginDNSObject](networkvpnvpnplugindnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNVPNPluginIdleObject](networkvpnvpnpluginidleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNVPNPluginNetworkRoutingObject](networkvpnvpnpluginnetworkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNVPNPluginOnDemandObject](networkvpnvpnpluginondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNVPNPluginProviderObject](networkvpnvpnpluginproviderobject.md): Specifies details about the provider.
- [NetworkVPNVPNPluginProxiesObject](networkvpnvpnpluginproxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
- [NetworkVPNVPNPluginVendorConfigObject](networkvpnvpnpluginvendorconfigobject.md): The vendor-specific configuration dictionary, which the system reads only when `SubType` has a value.
