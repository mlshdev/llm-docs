> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnalwaysontunnelconfigurationelementobject](https://developer.apple.com/documentation/devicemanagement/networkvpnalwaysontunnelconfigurationelementobject)

# NetworkVPNAlwaysOnTunnelConfigurationElementObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

An array that contains an arbitrary number of tunnel configurations.

## Declaration

```
object NetworkVPNAlwaysOnTunnelConfigurationElementObject
```

## Properties

- `IKEV2` — `NetworkVPNAlwaysOnTunnelConfigurationElement_IKEV2Object`: The IKEv2 configuration for this tunnel.
- `Interfaces` — `[string]`: The interfaces to apply this configuration to.
  **Allowed values:** `Cellular`, `WiFi`
- `ProtocolType` — `string` (required): The type of connection, which needs to be `IKEv2`.
  **Allowed values:** `IKEv2`

## Topics

### Objects

- [NetworkVPNAlwaysOnTunnelConfigurationElement_IKEV2Object](networkvpnalwaysontunnelconfigurationelement_ikev2object.md): The IKEv2 configuration for this tunnel.

## See Also

### Objects

- [NetworkVPNAlwaysOnAllowedCaptiveNetworkPluginElementObject](networkvpnalwaysonallowedcaptivenetworkpluginelementobject.md): The array of captive networking apps whose traffic is allowed outside the VPN tunnel, to perform captive network handling. Used only when `AllowAllCaptiveNetworkPlugins` is `false`.
- [NetworkVPNAlwaysOnApplicationExceptionElementObject](networkvpnalwaysonapplicationexceptionelementobject.md): An array that contains an arbitrary number of apps whose connections occur outside the VPN.
- [NetworkVPNAlwaysOnServiceExceptionElementObject](networkvpnalwaysonserviceexceptionelementobject.md): An array that contains an arbitrary number of service exceptions.
