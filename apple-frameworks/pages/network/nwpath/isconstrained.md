> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpath/isconstrained](https://developer.apple.com/documentation/network/nwpath/isconstrained)

# isConstrained

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean indicating whether the path uses an interface in Low Data Mode.

## Declaration

```swift
var isConstrained: Bool { get }
```

## See Also

### Checking Path Capabilities

- [supportsIPv4](supportsipv4.md): A Boolean indicating whether the path can route IPv4 traffic.
- [supportsIPv6](supportsipv6.md): A Boolean indicating whether the path can route IPv6 traffic.
- [supportsDNS](supportsdns.md): A Boolean indicating whether the path has a DNS server configured.
- [isExpensive](isexpensive.md): A Boolean indicating whether the path uses an interface that is considered expensive, such as Cellular or a Personal Hotspot.
