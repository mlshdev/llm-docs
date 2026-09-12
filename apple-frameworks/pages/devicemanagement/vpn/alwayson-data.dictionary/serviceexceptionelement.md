> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/alwayson-data.dictionary/serviceexceptionelement](https://developer.apple.com/documentation/devicemanagement/vpn/alwayson-data.dictionary/serviceexceptionelement)

# VPN.AlwaysOn.ServiceExceptionElement

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

The dictionary that defines service exceptions.

## Declaration

```
object VPN.AlwaysOn.ServiceExceptionElement
```

## Properties

- `Action` — `string` (required): The action to take with network connections from the named service.
  **Allowed values:** `Allow`, `Drop`
- `ServiceName` — `string` (required): The name of a service that’s exempt from Always On VPN.

  `CellularServices` is available in iOS 11.3 and later; it exempts `VoLTE`, `IMS` and `MMS`. Always On VPN exempts WiFiCalling in iOS 13.4 and later.

  `DeviceCommunication` is available in iOS 17.4 and later; it exempts network traffic used for communicating with devices connected via USB or Wi-Fi.  
  **Allowed values:** `VoiceMail`, `AirPrint`, `CellularServices`, `DeviceCommunication`

## See Also

### Objects

- [VPN.AlwaysOn.AllowedCaptiveNetworkPluginElement](allowedcaptivenetworkpluginelement.md): The dictionary for captive network configurations.
- [VPN.AlwaysOn.ApplicationExceptionElement](applicationexceptionelement.md): The dictionary that defines which applications can have traffic outside the VPN tunnel.
- [VPN.AlwaysOn.TunnelConfigurationElement](tunnelconfigurationelement.md): The dictionary used to configure VPN tunnels.
