> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ipaddress](https://developer.apple.com/documentation/network/ipaddress)

# IPAddress

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An abstract protocol you use to interact with IP addresses.

## Declaration

```swift
protocol IPAddress : Sendable
```

## Topics

### Creating Addresses

- [init(\_:)](ipaddress/init%28__%29.md): Initializes an IP address with a string.
- [init(\_:\_:)](ipaddress/init%28____%29.md): Initializes an IP address with data.

### Inspecting Address Properties

- [rawValue](ipaddress/rawvalue.md): The raw data of an IP address.
- [interface](ipaddress/interface.md): The interface associated with this address, such as the IPv6 scoped interface.
- [isLinkLocal](ipaddress/islinklocal.md): A Boolean indicating whether this address is in a link-local range.
- [isLoopback](ipaddress/isloopback.md): A Boolean indicating whether this address is a loopback address for the local device.
- [isMulticast](ipaddress/ismulticast.md): A Boolean indicating whether this address is a multicast address.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [IPv4Address](ipv4address.md)
- [IPv6Address](ipv6address.md)

## See Also

### Internet Addresses

- [IPv4Address](ipv4address.md): A structure containing an IPv4 address.
- [IPv6Address](ipv6address.md): A structure containing an IPv6 address.
