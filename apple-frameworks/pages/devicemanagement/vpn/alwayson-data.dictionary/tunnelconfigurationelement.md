> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/alwayson-data.dictionary/tunnelconfigurationelement](https://developer.apple.com/documentation/devicemanagement/vpn/alwayson-data.dictionary/tunnelconfigurationelement)

# VPN.AlwaysOn.TunnelConfigurationElement

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

The dictionary used to configure VPN tunnels.

## Declaration

```
object VPN.AlwaysOn.TunnelConfigurationElement
```

## Properties

- `Interfaces` — `[string]`: The interfaces to apply this configuration to.
  **Allowed values:** `Cellular`, `WiFi`
- `ProtocolType` — `string` (required): The type of connection, which needs to be `IKEv2`.
  **Allowed values:** `IKEv2`

## See Also

### Objects

- [VPN.AlwaysOn.AllowedCaptiveNetworkPluginElement](allowedcaptivenetworkpluginelement.md): The dictionary for captive network configurations.
- [VPN.AlwaysOn.ApplicationExceptionElement](applicationexceptionelement.md): The dictionary that defines which applications can have traffic outside the VPN tunnel.
- [VPN.AlwaysOn.ServiceExceptionElement](serviceexceptionelement.md): The dictionary that defines service exceptions.
