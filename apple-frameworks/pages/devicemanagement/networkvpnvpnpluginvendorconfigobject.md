> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnvpnpluginvendorconfigobject](https://developer.apple.com/documentation/devicemanagement/networkvpnvpnpluginvendorconfigobject)

# NetworkVPNVPNPluginVendorConfigObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The vendor-specific configuration dictionary, which the system reads only when `SubType` has a value.

## Declaration

```
object NetworkVPNVPNPluginVendorConfigObject
```

## Properties

- `Group` — `string`: The group to connect to on the head end. Valid for Cisco AnyConnect and Cisco Legacy AnyConnect.
- `LoginGroupOrDomain` — `string`: The login group or domain. Valid only for SonicWALL Mobile Connect.
- `Realm` — `string`: The Kerberos realm name, which needs to be properly capitalized. Valid only for Juniper SSL and Pulse Secure.
- `Role` — `string`: The role to select when connecting to the server. Valid only for Juniper SSL and Pulse Secure.

## See Also

### Objects

- [NetworkVPNVPNPluginAuthenticationObject](networkvpnvpnpluginauthenticationobject.md): Settings that control authentication.
- [NetworkVPNVPNPluginDNSObject](networkvpnvpnplugindnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNVPNPluginIdleObject](networkvpnvpnpluginidleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNVPNPluginNetworkRoutingObject](networkvpnvpnpluginnetworkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNVPNPluginOnDemandObject](networkvpnvpnpluginondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNVPNPluginProviderObject](networkvpnvpnpluginproviderobject.md): Specifies details about the provider.
- [NetworkVPNVPNPluginProxiesObject](networkvpnvpnpluginproxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
