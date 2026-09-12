> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnvpnpluginproxiesobject](https://developer.apple.com/documentation/devicemanagement/networkvpnvpnpluginproxiesobject)

# NetworkVPNVPNPluginProxiesObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The dictionary to use to configure `Proxies` for use with `VPN`.

## Declaration

```
object NetworkVPNVPNPluginProxiesObject
```

## Properties

- `AutoConfigEnable` — `boolean`: If `true`, enables automatic proxy configuration.
  **Default:** `false`
- `AutoConfigURLString` — `string`: The URL to the location of the proxy auto-configuration file. Used only when `ProxyAutoConfigEnable` is `true`.
- `AutoDiscoveryEnable` — `boolean`: If `true`, enables proxy auto discovery.
  **Default:** `true`
- `Protocol` — `NetworkVPNVPNPluginProxies_ProtocolObject`: The dictionary to use to configure HTTP servers  for `Proxies` for use with `VPN`.
- `SupplementalMatchDomains` — `[string]`: An array of domains that defines which hosts use proxy settings for hosts.

## Topics

### Objects

- [NetworkVPNVPNPluginProxies_ProtocolObject](networkvpnvpnpluginproxies_protocolobject.md): The dictionary to use to configure HTTP servers for `Proxies` for use with `VPN`.

## See Also

### Objects

- [NetworkVPNVPNPluginAuthenticationObject](networkvpnvpnpluginauthenticationobject.md): Settings that control authentication.
- [NetworkVPNVPNPluginDNSObject](networkvpnvpnplugindnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNVPNPluginIdleObject](networkvpnvpnpluginidleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNVPNPluginNetworkRoutingObject](networkvpnvpnpluginnetworkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNVPNPluginOnDemandObject](networkvpnvpnpluginondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNVPNPluginProviderObject](networkvpnvpnpluginproviderobject.md): Specifies details about the provider.
- [NetworkVPNVPNPluginVendorConfigObject](networkvpnvpnpluginvendorconfigobject.md): The vendor-specific configuration dictionary, which the system reads only when `SubType` has a value.
