> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/includeallnetworks](https://developer.apple.com/documentation/networkextension/nevpnprotocol/includeallnetworks)

# includeAllNetworks (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the system sends most network traffic over the tunnel.

## Declaration

```swift
var includeAllNetworks: Bool { get set }
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the system routes network traffic through the tunnel except traffic for designated system services necessary for maintaining expected device functionality.

You can exclude some types of traffic using the [excludeAPNs](excludeapns.md), [excludeLocalNetworks](excludelocalnetworks.md), and [excludeCellularServices](excludecellularservices.md) properties in combination with this property. The system always excludes the following network traffic from the tunnel regardless of this property value:

- Network control plane traffic that maintains a device’s connection to the local network, such as DHCP.
- Captive portal negotiation traffic that authorizes a device with a Wi-Fi hotspot.
- Certain cellular services traffic that uses the cellular network only, such as VoLTE.
- Traffic that communicates with a companion device, such as an Apple Watch.

[NETransparentProxyManager](../netransparentproxymanager.md) doesn’t support this property. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Routing network traffic

- [excludeAPNs](excludeapns.md): A Boolean value that indicates whether the system excludes all APNs network traffic from the tunnel.
- [excludeCellularServices](excludecellularservices.md): A Boolean value that indicates whether the system excludes all cellular services network traffic from the tunnel.
- [excludeLocalNetworks](excludelocalnetworks.md): A Boolean value that indicates whether the system excludes all traffic destined for local networks from the tunnel.
- [enforceRoutes](enforceroutes.md): A Boolean value that indicates whether route rules for the tunnel take precedence over any locally defined routes.

# includeAllNetworks (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the system sends most network traffic over the tunnel.

## Declaration

```objectivec
@property BOOL includeAllNetworks;
```

## Mentioned In

- [Routing your VPN network traffic](../routing-your-vpn-network-traffic.md)

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the system routes network traffic through the tunnel except traffic for designated system services necessary for maintaining expected device functionality.

You can exclude some types of traffic using the [excludeAPNs](excludeapns.md), [excludeLocalNetworks](excludelocalnetworks.md), and [excludeCellularServices](excludecellularservices.md) properties in combination with this property. The system always excludes the following network traffic from the tunnel regardless of this property value:

- Network control plane traffic that maintains a device’s connection to the local network, such as DHCP.
- Captive portal negotiation traffic that authorizes a device with a Wi-Fi hotspot.
- Certain cellular services traffic that uses the cellular network only, such as VoLTE.
- Traffic that communicates with a companion device, such as an Apple Watch.

[NETransparentProxyManager](../netransparentproxymanager.md) doesn’t support this property. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Routing network traffic

- [excludeAPNs](excludeapns.md): A Boolean value that indicates whether the system excludes all APNs network traffic from the tunnel.
- [excludeCellularServices](excludecellularservices.md): A Boolean value that indicates whether the system excludes all cellular services network traffic from the tunnel.
- [excludeLocalNetworks](excludelocalnetworks.md): A Boolean value that indicates whether the system excludes all traffic destined for local networks from the tunnel.
- [enforceRoutes](enforceroutes.md): A Boolean value that indicates whether route rules for the tunnel take precedence over any locally defined routes.
