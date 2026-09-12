> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/ppp-data.dictionary](https://developer.apple.com/documentation/devicemanagement/vpn/ppp-data.dictionary)

# VPN.PPP

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · visionOS 1.0+

The dictionary that contains PPP settings.

## Declaration

```
object VPN.PPP
```

## Properties

- `AuthEAPPlugins` — `[string]`: An array of authentication plugins. For use of RSA SecurID, this array should only have one value: `EAP-RSA`. This key is for use with L2TP and PPTP networks.
  **Allowed values:** `EAP-RSA`, `EAP-TLS`, `EAP-KRB`
- `AuthName` — `string`: The VPN account user name. This key is for use with L2TP and PPTP networks.
- `AuthPassword` — `string`: If `TokenCard` is `1`, use this password for authentication. This key is for use with L2TP and PPTP networks.
- `AuthProtocol` — `[string]`: An array of authentication protocols. For use of RSA SecurID, this array should have one value, `EAP`. This key is for use with L2TP and PPTP networks.
  **Allowed values:** `EAP`
- `CCPEnabled` — `integer`: If `1`, enables encryption on the connection. This key is for use with PPTP networks.
  **Allowed values:** `0`, `1`
- `CCPMPPE128Enabled` — `integer`: If `1` and `CCPEnabled` is also `1`, enables CCPMPPE40 encryption.
  **Allowed values:** `0`, `1`
- `CCPMPPE40Enabled` — `integer`: If `1` and `CCPEnabled` is also `1`, enables CCPMPPE128 encryption.
  **Allowed values:** `0`, `1`
- `CommRemoteAddress` — `string`: The IP address or host name of VPN server. This key is for use with L2TP and PPTP networks.
- `DisconnectOnIdle` — `integer`: If `1`, disconnects after an on demand connection idles.
  **Default:** `0`  
  **Allowed values:** `0`, `1`
- `DisconnectOnIdleTimer` — `integer`: The length of time to wait before disconnecting an on demand connection
- `TokenCard` — `integer`: If `1`, uses a token card such as an RSA SecurID card for connecting. This key is for use with L2TP networks.
  **Default:** `0`  
  **Allowed values:** `0`, `1`

## See Also

### Objects

- [VPN.AlwaysOn](alwayson-data.dictionary.md): The dictionary that contains IPSec settings.
- [VPN.DNS](dns-data.dictionary.md): The dictionary to configure DNS settings for the VPN.
- [VPN.IKEv2](ikev2-data.dictionary.md): The dictionary to use for an IKEv2 VPN type.
- [VPN.IPSec](ipsec-data.dictionary.md): The dictionary to use for an IPSec VPN type.
- [VPN.IPv4](ipv4-data.dictionary.md): The dictionary that contains IPV4 settings.
- [VPN.Proxies](proxies-data.dictionary.md): The dictionary that contains the Proxies settings.
- [VPN.TransparentProxy](transparentproxy-data.dictionary.md): The dictionary to use for a transparent proxy VPN type.
- [VPN.VPN](vpn-data.dictionary.md): The dictionary that contains VPN, IPSec, and IKEv2 settings.
- [VPN.VendorConfig](vendorconfig-data.dictionary.md): The vendor-specific configuration dictionary.
