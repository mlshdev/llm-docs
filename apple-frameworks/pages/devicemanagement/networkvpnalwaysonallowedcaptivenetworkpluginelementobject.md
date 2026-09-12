> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnalwaysonallowedcaptivenetworkpluginelementobject](https://developer.apple.com/documentation/devicemanagement/networkvpnalwaysonallowedcaptivenetworkpluginelementobject)

# NetworkVPNAlwaysOnAllowedCaptiveNetworkPluginElementObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The array of captive networking apps whose traffic is allowed outside the VPN tunnel, to perform captive network handling. Used only when `AllowAllCaptiveNetworkPlugins` is `false`.

## Declaration

```
object NetworkVPNAlwaysOnAllowedCaptiveNetworkPluginElementObject
```

## Properties

- `BundleIdentifier` — `string` (required): The bundle identifier for the app that’s allowed on the captive network.

## See Also

### Objects

- [NetworkVPNAlwaysOnApplicationExceptionElementObject](networkvpnalwaysonapplicationexceptionelementobject.md): An array that contains an arbitrary number of apps whose connections occur outside the VPN.
- [NetworkVPNAlwaysOnServiceExceptionElementObject](networkvpnalwaysonserviceexceptionelementobject.md): An array that contains an arbitrary number of service exceptions.
- [NetworkVPNAlwaysOnTunnelConfigurationElementObject](networkvpnalwaysontunnelconfigurationelementobject.md): An array that contains an arbitrary number of tunnel configurations.
