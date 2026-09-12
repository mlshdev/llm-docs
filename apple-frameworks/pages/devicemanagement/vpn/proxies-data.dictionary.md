> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/proxies-data.dictionary](https://developer.apple.com/documentation/devicemanagement/vpn/proxies-data.dictionary)

# VPN.Proxies

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The dictionary that contains the Proxies settings.

## Declaration

```
object VPN.Proxies
```

## Properties

- `HTTPEnable` — `integer`: If `1`, enables proxy for HTTP traffic.
  **Default:** `0`  
  **Allowed values:** `0`, `1`
- `HTTPPort` — `integer`: The port number of the HTTP proxy. This field is required if `HTTPProxy` is specified.
  **Minimum:** `0`  
  **Maximum:** `65535`
- `HTTPProxy` — `string`: The host name of the HTTP proxy.
- `HTTPProxyPassword` — `string`: The password used for authentication.
- `HTTPProxyUsername` — `string`: The user name used for authentication.
- `HTTPSEnable` — `integer`: If `true`, enables proxy for HTTPS traffic.
  **Default:** `0`  
  **Allowed values:** `0`, `1`
- `HTTPSPort` — `integer`: The port number of the HTTPS proxy. This field is required if `HTTPSProxy` is specified.
  **Minimum:** `0`  
  **Maximum:** `65535`
- `HTTPSProxy` — `string`: The host name of the HTTPS proxy.
- `ProxyAutoConfigEnable` — `integer`: If `true`, enables automatic proxy configuration.
  **Allowed values:** `0`, `1`
- `ProxyAutoConfigURLString` — `string`: The URL to the location of the proxy auto-configuration file. Used only when `ProxyAutoConfigEnable` is `true`.
- `ProxyAutoDiscoveryEnable` — `integer`: If `true`, enables proxy auto discovery.
  **Default:** `1`  
  **Allowed values:** `0`, `1`
- `SupplementalMatchDomains` — `[string]`: An array of domains that defines which hosts use proxy settings for hosts.

## See Also

### Objects

- [VPN.AlwaysOn](alwayson-data.dictionary.md): The dictionary that contains IPSec settings.
- [VPN.DNS](dns-data.dictionary.md): The dictionary to configure DNS settings for the VPN.
- [VPN.IKEv2](ikev2-data.dictionary.md): The dictionary to use for an IKEv2 VPN type.
- [VPN.IPSec](ipsec-data.dictionary.md): The dictionary to use for an IPSec VPN type.
- [VPN.IPv4](ipv4-data.dictionary.md): The dictionary that contains IPV4 settings.
- [VPN.PPP](ppp-data.dictionary.md): The dictionary that contains PPP settings.
- [VPN.TransparentProxy](transparentproxy-data.dictionary.md): The dictionary to use for a transparent proxy VPN type.
- [VPN.VPN](vpn-data.dictionary.md): The dictionary that contains VPN, IPSec, and IKEv2 settings.
- [VPN.VendorConfig](vendorconfig-data.dictionary.md): The vendor-specific configuration dictionary.
