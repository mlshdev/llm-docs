> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnalwaysonserviceexceptionelementobject](https://developer.apple.com/documentation/devicemanagement/networkvpnalwaysonserviceexceptionelementobject)

# NetworkVPNAlwaysOnServiceExceptionElementObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

An array that contains an arbitrary number of service exceptions.

## Declaration

```
object NetworkVPNAlwaysOnServiceExceptionElementObject
```

## Properties

- `Action` — `string` (required): The action to take with network connections from the named service.
  **Allowed values:** `Allow`, `Drop`
- `ServiceName` — `string` (required): The name of a service that’s exempt from Always On VPN.

  `CellularServices` exempts `VoLTE`, `IMS`, `MMS`, and Wi-Fi calling.

  `DeviceCommunication` exempts network traffic used for communicating with devices connected via USB or Wi-Fi.  
  **Allowed values:** `VoiceMail`, `AirPrint`, `CellularServices`, `DeviceCommunication`

## See Also

### Objects

- [NetworkVPNAlwaysOnAllowedCaptiveNetworkPluginElementObject](networkvpnalwaysonallowedcaptivenetworkpluginelementobject.md): The array of captive networking apps whose traffic is allowed outside the VPN tunnel, to perform captive network handling. Used only when `AllowAllCaptiveNetworkPlugins` is `false`.
- [NetworkVPNAlwaysOnApplicationExceptionElementObject](networkvpnalwaysonapplicationexceptionelementobject.md): An array that contains an arbitrary number of apps whose connections occur outside the VPN.
- [NetworkVPNAlwaysOnTunnelConfigurationElementObject](networkvpnalwaysontunnelconfigurationelementobject.md): An array that contains an arbitrary number of tunnel configurations.
