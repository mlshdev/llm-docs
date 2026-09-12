> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnalwaysonapplicationexceptionelementobject](https://developer.apple.com/documentation/devicemanagement/networkvpnalwaysonapplicationexceptionelementobject)

# NetworkVPNAlwaysOnApplicationExceptionElementObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

An array that contains an arbitrary number of apps whose connections occur outside the VPN.

## Declaration

```
object NetworkVPNAlwaysOnApplicationExceptionElementObject
```

## Properties

- `BundleIdentifier` — `string` (required): The app’s bundle identifier.
- `LimitToProtocols` — `[string]`: Limit the exception to only the specified list of protocols, with support for `UDP` only.
  **Allowed values:** `UDP`

## See Also

### Objects

- [NetworkVPNAlwaysOnAllowedCaptiveNetworkPluginElementObject](networkvpnalwaysonallowedcaptivenetworkpluginelementobject.md): The array of captive networking apps whose traffic is allowed outside the VPN tunnel, to perform captive network handling. Used only when `AllowAllCaptiveNetworkPlugins` is `false`.
- [NetworkVPNAlwaysOnServiceExceptionElementObject](networkvpnalwaysonserviceexceptionelementobject.md): An array that contains an arbitrary number of service exceptions.
- [NetworkVPNAlwaysOnTunnelConfigurationElementObject](networkvpnalwaysontunnelconfigurationelementobject.md): An array that contains an arbitrary number of tunnel configurations.
