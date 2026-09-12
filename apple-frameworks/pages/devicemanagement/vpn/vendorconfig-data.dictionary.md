> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/vendorconfig-data.dictionary](https://developer.apple.com/documentation/devicemanagement/vpn/vendorconfig-data.dictionary)

# VPN.VendorConfig

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The vendor-specific configuration dictionary.

## Declaration

```
object VPN.VendorConfig
```

## Properties

- `Group` — `string`: The group to connect to on the head end. Valid for Cisco AnyConnect and Cisco Legacy AnyConnect. Not available in watchOS.
- `LoginGroupOrDomain` — `string`: The login group or domain. Valid only for SonicWALL Mobile Connect. Not available in watchOS.
- `Realm` — `string`: The Kerberos realm name, which needs to be properly capitalized. Valid only for Juniper SSL and Pulse Secure. Not available in watchOS.
- `Role` — `string`: The role to select when connecting to the server. Valid only for Juniper SSL and Pulse Secure. Not available in watchOS.

## See Also

### Objects

- [VPN.AlwaysOn](alwayson-data.dictionary.md): The dictionary that contains IPSec settings.
- [VPN.DNS](dns-data.dictionary.md): The dictionary to configure DNS settings for the VPN.
- [VPN.IKEv2](ikev2-data.dictionary.md): The dictionary to use for an IKEv2 VPN type.
- [VPN.IPSec](ipsec-data.dictionary.md): The dictionary to use for an IPSec VPN type.
- [VPN.IPv4](ipv4-data.dictionary.md): The dictionary that contains IPV4 settings.
- [VPN.PPP](ppp-data.dictionary.md): The dictionary that contains PPP settings.
- [VPN.Proxies](proxies-data.dictionary.md): The dictionary that contains the Proxies settings.
- [VPN.TransparentProxy](transparentproxy-data.dictionary.md): The dictionary to use for a transparent proxy VPN type.
- [VPN.VPN](vpn-data.dictionary.md): The dictionary that contains VPN, IPSec, and IKEv2 settings.
