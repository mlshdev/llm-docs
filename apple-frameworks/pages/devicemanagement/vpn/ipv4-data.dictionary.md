> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/ipv4-data.dictionary](https://developer.apple.com/documentation/devicemanagement/vpn/ipv4-data.dictionary)

# VPN.IPv4

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · visionOS 1.0+

The dictionary that contains IPV4 settings.

## Declaration

```
object VPN.IPv4
```

## Properties

- `OverridePrimary` — `integer`: If `1`, the system sends all network traffic over VPN. Only applies to Cisco IPsec and L2TP VPN types.
  **Default:** `0`  
  **Allowed values:** `0`, `1`

## See Also

### Objects

- [VPN.AlwaysOn](alwayson-data.dictionary.md): The dictionary that contains IPSec settings.
- [VPN.DNS](dns-data.dictionary.md): The dictionary to configure DNS settings for the VPN.
- [VPN.IKEv2](ikev2-data.dictionary.md): The dictionary to use for an IKEv2 VPN type.
- [VPN.IPSec](ipsec-data.dictionary.md): The dictionary to use for an IPSec VPN type.
- [VPN.PPP](ppp-data.dictionary.md): The dictionary that contains PPP settings.
- [VPN.Proxies](proxies-data.dictionary.md): The dictionary that contains the Proxies settings.
- [VPN.TransparentProxy](transparentproxy-data.dictionary.md): The dictionary to use for a transparent proxy VPN type.
- [VPN.VPN](vpn-data.dictionary.md): The dictionary that contains VPN, IPSec, and IKEv2 settings.
- [VPN.VendorConfig](vendorconfig-data.dictionary.md): The vendor-specific configuration dictionary.
