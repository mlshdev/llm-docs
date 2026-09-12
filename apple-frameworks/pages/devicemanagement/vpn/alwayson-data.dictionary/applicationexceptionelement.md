> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/alwayson-data.dictionary/applicationexceptionelement](https://developer.apple.com/documentation/devicemanagement/vpn/alwayson-data.dictionary/applicationexceptionelement)

# VPN.AlwaysOn.ApplicationExceptionElement

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 13.6+ · iPadOS 13.6+ · Mac Catalyst 13.6+ · visionOS 1.0+

The dictionary that defines which applications can have traffic outside the VPN tunnel.

## Declaration

```
object VPN.AlwaysOn.ApplicationExceptionElement
```

## Properties

- `BundleIdentifier` — `string` (required): The app’s bundle identifier.
- `LimitToProtocols` — `[string]`: Limit the exception to only the specified list of protocols, with support for `UDP` only.
  **Allowed values:** `UDP`

## See Also

### Objects

- [VPN.AlwaysOn.AllowedCaptiveNetworkPluginElement](allowedcaptivenetworkpluginelement.md): The dictionary for captive network configurations.
- [VPN.AlwaysOn.ServiceExceptionElement](serviceexceptionelement.md): The dictionary that defines service exceptions.
- [VPN.AlwaysOn.TunnelConfigurationElement](tunnelconfigurationelement.md): The dictionary used to configure VPN tunnels.
