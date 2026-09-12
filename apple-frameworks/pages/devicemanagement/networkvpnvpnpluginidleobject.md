> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnvpnpluginidleobject](https://developer.apple.com/documentation/devicemanagement/networkvpnvpnpluginidleobject)

# NetworkVPNVPNPluginIdleObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specifies details about how the system handles idle VPN connections.

## Declaration

```
object NetworkVPNVPNPluginIdleObject
```

## Properties

- `Disconnect` — `boolean`: If `true`, disconnects after an on-demand connection idles.
  **Default:** `false`
- `Timer` — `integer`: The length of time to wait, in seconds, before disconnecting an on-demand connection.

## See Also

### Objects

- [NetworkVPNVPNPluginAuthenticationObject](networkvpnvpnpluginauthenticationobject.md): Settings that control authentication.
- [NetworkVPNVPNPluginDNSObject](networkvpnvpnplugindnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNVPNPluginNetworkRoutingObject](networkvpnvpnpluginnetworkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNVPNPluginOnDemandObject](networkvpnvpnpluginondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNVPNPluginProviderObject](networkvpnvpnpluginproviderobject.md): Specifies details about the provider.
- [NetworkVPNVPNPluginProxiesObject](networkvpnvpnpluginproxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
- [NetworkVPNVPNPluginVendorConfigObject](networkvpnvpnpluginvendorconfigobject.md): The vendor-specific configuration dictionary, which the system reads only when `SubType` has a value.
