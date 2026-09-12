> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnvpnpluginondemandobject](https://developer.apple.com/documentation/devicemanagement/networkvpnvpnpluginondemandobject)

# NetworkVPNVPNPluginOnDemandObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specifies details about how the system controls on-demand VPN.

## Declaration

```
object NetworkVPNVPNPluginOnDemandObject
```

## Properties

- `DisableUserOverride` — `boolean`: If `true`, the device disables the Connect On Demand toggle in Settings for this configuration.

  Available: iOS 27+ | iPadOS 27+ | tvOS 27+ | visionOS 27+  
  **Default:** `false`
- `Enabled` — `boolean`: If `true`, enables VPN On Demand.
  **Default:** `false`
- `Rules` — `[NetworkVPNVPNPluginRulesElementObject]`: An array of dictionaries defining On Demand Rules.

## Topics

### Objects

- [NetworkVPNVPNPluginRulesElementObject](networkvpnvpnpluginruleselementobject.md): An array of dictionaries defining On Demand Rules.

## See Also

### Objects

- [NetworkVPNVPNPluginAuthenticationObject](networkvpnvpnpluginauthenticationobject.md): Settings that control authentication.
- [NetworkVPNVPNPluginDNSObject](networkvpnvpnplugindnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNVPNPluginIdleObject](networkvpnvpnpluginidleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNVPNPluginNetworkRoutingObject](networkvpnvpnpluginnetworkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNVPNPluginProviderObject](networkvpnvpnpluginproviderobject.md): Specifies details about the provider.
- [NetworkVPNVPNPluginProxiesObject](networkvpnvpnpluginproxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
- [NetworkVPNVPNPluginVendorConfigObject](networkvpnvpnpluginvendorconfigobject.md): The vendor-specific configuration dictionary, which the system reads only when `SubType` has a value.
