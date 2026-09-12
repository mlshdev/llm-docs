> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ipv4address](https://developer.apple.com/documentation/network/ipv4address)

# IPv4Address

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A structure containing an IPv4 address.

## Declaration

```swift
struct IPv4Address
```

## Topics

### Creating Addresses

- [init(\_:)](ipv4address/init%28__%29.md): Initializes an IPv4 address with a string.
- [init(\_:\_:)](ipv4address/init%28____%29.md): Initializes an IPv4 address with data.

### Inspecting Address Properties

- [rawValue](ipv4address/rawvalue.md): The raw data of an IPv4 address.
- [interface](ipv4address/interface.md): The interface associated with this address.
- [isLinkLocal](ipv4address/islinklocal.md): A Boolean indicating whether this address is in a link-local range.
- [isLoopback](ipv4address/isloopback.md): A Boolean indicating whether this address is a loopback address for the local device.
- [isMulticast](ipv4address/ismulticast.md): A Boolean indicating whether this address is a multicast address.

### Setting Well-Known Addresses

- [any](ipv4address/any.md): The unspecified address (0.0.0.0).
- [broadcast](ipv4address/broadcast.md): The local broadcast address (255.255.255.255).
- [loopback](ipv4address/loopback.md): The device’s loopback address (127.0.0.1).
- [allHostsGroup](ipv4address/allhostsgroup.md): The multicast group for all hosts on the network segment (224.0.0.1).
- [allRoutersGroup](ipv4address/allroutersgroup.md): The multicast group for all routers on the network segment (224.0.0.2).
- [allReportsGroup](ipv4address/allreportsgroup.md): The multicast group for all IGMPv3 reports (224.0.0.22).
- [mdnsGroup](ipv4address/mdnsgroup.md): The multicast group for multicast DNS (224.0.0.251).

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IPAddress](ipaddress.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Internet Addresses

- [IPAddress](ipaddress.md): An abstract protocol you use to interact with IP addresses.
- [IPv6Address](ipv6address.md): A structure containing an IPv6 address.
