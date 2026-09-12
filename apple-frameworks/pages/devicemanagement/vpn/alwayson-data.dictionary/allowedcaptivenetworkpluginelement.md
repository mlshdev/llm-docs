> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/alwayson-data.dictionary/allowedcaptivenetworkpluginelement](https://developer.apple.com/documentation/devicemanagement/vpn/alwayson-data.dictionary/allowedcaptivenetworkpluginelement)

# VPN.AlwaysOn.AllowedCaptiveNetworkPluginElement

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

The dictionary for captive network configurations.

## Declaration

```
object VPN.AlwaysOn.AllowedCaptiveNetworkPluginElement
```

## Properties

- `BundleIdentifier` — `string` (required): The bundle identifier for the app that’s allowed on the captive network.

## See Also

### Objects

- [VPN.AlwaysOn.ApplicationExceptionElement](applicationexceptionelement.md): The dictionary that defines which applications can have traffic outside the VPN tunnel.
- [VPN.AlwaysOn.ServiceExceptionElement](serviceexceptionelement.md): The dictionary that defines service exceptions.
- [VPN.AlwaysOn.TunnelConfigurationElement](tunnelconfigurationelement.md): The dictionary used to configure VPN tunnels.
