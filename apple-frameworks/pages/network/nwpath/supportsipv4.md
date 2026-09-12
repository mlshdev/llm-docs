> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpath/supportsipv4](https://developer.apple.com/documentation/network/nwpath/supportsipv4)

# supportsIPv4

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A Boolean indicating whether the path can route IPv4 traffic.

## Declaration

```swift
let supportsIPv4: Bool
```

## See Also

### Checking Path Capabilities

- [supportsIPv6](supportsipv6.md): A Boolean indicating whether the path can route IPv6 traffic.
- [supportsDNS](supportsdns.md): A Boolean indicating whether the path has a DNS server configured.
- [isConstrained](isconstrained.md): A Boolean indicating whether the path uses an interface in Low Data Mode.
- [isExpensive](isexpensive.md): A Boolean indicating whether the path uses an interface that is considered expensive, such as Cellular or a Personal Hotspot.
