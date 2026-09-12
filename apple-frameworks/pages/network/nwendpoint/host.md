> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwendpoint/host](https://developer.apple.com/documentation/network/nwendpoint/host)

# NWEndpoint.Host

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A name or address that identifies a network endpoint.

## Declaration

```swift
enum Host
```

## Topics

### Creating Hosts

- [init(\_:)](host/init%28__%29.md): Initializes a host with a string.

### Accessing Host Types

- [NWEndpoint.Host.name(\_:\_:)](host/name%28____%29.md): A host represented as a name.
- [NWEndpoint.Host.ipv4(\_:)](host/ipv4%28__%29.md): A host represented as an IPv4 address.
- [NWEndpoint.Host.ipv6(\_:)](host/ipv6%28__%29.md): A host represented as an IPv6 address.

### Requiring Interfaces

- [interface](host/interface.md): The interface associated with this host, such as the interface scope stored in an IPv6 address.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Host and Ports

- [NWEndpoint.Port](port.md): A port number you use along with a host to identify a network endpoint.
