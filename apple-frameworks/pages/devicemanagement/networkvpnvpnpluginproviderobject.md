> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnvpnpluginproviderobject](https://developer.apple.com/documentation/devicemanagement/networkvpnvpnpluginproviderobject)

# NetworkVPNVPNPluginProviderObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specifies details about the provider.

## Declaration

```
object NetworkVPNVPNPluginProviderObject
```

## Properties

- `ComposedIdentifier` — `string`: If the `SubType` field contains the bundle identifier of an app that contains multiple VPN providers of the same type (app-proxy or packet-tunnel), then the system uses this field to choose which provider to use for this configuration. If the VPN provider is implemented as a System Extension, then this field is required.

  In iOS, tvOS, and visionOS, the identifier is a bundle ID, for example, “com.example.app”.

  In macOS, the identifier is a composed identifier. The format of the composed identifier is either “Bundle-ID” or “Bundle-ID {Designated-Requirement}”. “Bundle-ID” is the bundle identifier string of the provider. “Designated-Requirement” is the designated requirement string the device uses to match the code signature of the provider. For example, “com.example.app” for the bundle ID format, or “com.example.app {anchor apple generic}” for the designated requirement format.
- `Type` — `string`: The type of VPN service. If the value is `app-proxy`, the service tunnels traffic at the app level. If the value is `packet-tunnel`, the service tunnels traffic at the IP layer.
  **Default:** `packet-tunnel`  
  **Allowed values:** `packet-tunnel`, `app-proxy`

## See Also

### Objects

- [NetworkVPNVPNPluginAuthenticationObject](networkvpnvpnpluginauthenticationobject.md): Settings that control authentication.
- [NetworkVPNVPNPluginDNSObject](networkvpnvpnplugindnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNVPNPluginIdleObject](networkvpnvpnpluginidleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNVPNPluginNetworkRoutingObject](networkvpnvpnpluginnetworkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNVPNPluginOnDemandObject](networkvpnvpnpluginondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNVPNPluginProxiesObject](networkvpnvpnpluginproxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
- [NetworkVPNVPNPluginVendorConfigObject](networkvpnvpnpluginvendorconfigobject.md): The vendor-specific configuration dictionary, which the system reads only when `SubType` has a value.
