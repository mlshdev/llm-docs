> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/alwayson-data.dictionary](https://developer.apple.com/documentation/devicemanagement/vpn/alwayson-data.dictionary)

# VPN.AlwaysOn

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

The dictionary that contains IPSec settings.

## Declaration

```
object VPN.AlwaysOn
```

## Properties

- `AllowAllCaptiveNetworkPlugins` — `integer`: If `1`, allows traffic from all captive networking apps outside the VPN tunnel to perform captive network handling.
  **Default:** `0`  
  **Allowed values:** `0`, `1`
- `AllowCaptiveWebSheet` — `integer`: If `1`, allows traffic from Captive Web Sheet outside the VPN tunnel.
  **Default:** `0`  
  **Allowed values:** `0`, `1`
- `AllowedCaptiveNetworkPlugins` — `[VPN.AlwaysOn.AllowedCaptiveNetworkPluginElement]`: The array of captive networking apps whose traffic is allowed outside the VPN tunnel, to perform captive network handling. Used only when `AllowAllCaptiveNetworkPlugins` is `false`.
- `ApplicationExceptions` — `[VPN.AlwaysOn.ApplicationExceptionElement]`: An array that contains an arbitrary number of apps whose connections occur outside the VPN.

  Available: iOS 13.6+ | iPadOS 13.6+ | visionOS 1+
- `ServiceExceptions` — `[VPN.AlwaysOn.ServiceExceptionElement]`: An array that contains an arbitrary number of service exceptions.
- `TunnelConfigurations` — `[VPN.AlwaysOn.TunnelConfigurationElement]` (required): An array that contains an arbitrary number of tunnel configurations.
- `UIToggleEnabled` — `integer`: If `1`, allows the user to disable the VPN configuration.
  **Default:** `0`  
  **Allowed values:** `0`, `1`

## Topics

### Objects

- [VPN.AlwaysOn.AllowedCaptiveNetworkPluginElement](alwayson-data.dictionary/allowedcaptivenetworkpluginelement.md): The dictionary for captive network configurations.
- [VPN.AlwaysOn.ApplicationExceptionElement](alwayson-data.dictionary/applicationexceptionelement.md): The dictionary that defines which applications can have traffic outside the VPN tunnel.
- [VPN.AlwaysOn.ServiceExceptionElement](alwayson-data.dictionary/serviceexceptionelement.md): The dictionary that defines service exceptions.
- [VPN.AlwaysOn.TunnelConfigurationElement](alwayson-data.dictionary/tunnelconfigurationelement.md): The dictionary used to configure VPN tunnels.

## See Also

### Objects

- [VPN.DNS](dns-data.dictionary.md): The dictionary to configure DNS settings for the VPN.
- [VPN.IKEv2](ikev2-data.dictionary.md): The dictionary to use for an IKEv2 VPN type.
- [VPN.IPSec](ipsec-data.dictionary.md): The dictionary to use for an IPSec VPN type.
- [VPN.IPv4](ipv4-data.dictionary.md): The dictionary that contains IPV4 settings.
- [VPN.PPP](ppp-data.dictionary.md): The dictionary that contains PPP settings.
- [VPN.Proxies](proxies-data.dictionary.md): The dictionary that contains the Proxies settings.
- [VPN.TransparentProxy](transparentproxy-data.dictionary.md): The dictionary to use for a transparent proxy VPN type.
- [VPN.VPN](vpn-data.dictionary.md): The dictionary that contains VPN, IPSec, and IKEv2 settings.
- [VPN.VendorConfig](vendorconfig-data.dictionary.md): The vendor-specific configuration dictionary.
