> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwendpoint](https://developer.apple.com/documentation/network/nwendpoint)

# NWEndpoint

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A local or remote endpoint in a network connection.

## Declaration

```swift
enum NWEndpoint
```

## Topics

### Endpoint Types

- [NWEndpoint.hostPort(host:port:)](nwendpoint/hostport%28host_port_%29.md): An endpoint represented as a host and port, with the host including both names and addresses.
- [NWEndpoint.service(name:type:domain:interface:)](nwendpoint/service%28name_type_domain_interface_%29.md): An endpoint represented as a Bonjour service.
- [NWEndpoint.url(\_:)](nwendpoint/url%28__%29.md): An endpoint represented as a URL, with host and port values inferred from the URL.
- [NWEndpoint.unix(path:)](nwendpoint/unix%28path_%29.md): An endpoint represented as a UNIX domain path.

### Host and Ports

- [NWEndpoint.Host](nwendpoint/host.md): A name or address that identifies a network endpoint.
- [NWEndpoint.Port](nwendpoint/port.md): A port number you use along with a host to identify a network endpoint.

### Internet Addresses

- [IPAddress](ipaddress.md): An abstract protocol you use to interact with IP addresses.
- [IPv4Address](ipv4address.md): A structure containing an IPv4 address.
- [IPv6Address](ipv6address.md): A structure containing an IPv6 address.

### Endpoint Properties

- [interface](nwendpoint/interface.md): The optional interface associated with this endpoint, such as the interface on which it was discovered.

### Enumeration Cases

- [NWEndpoint.opaque(\_:)](nwendpoint/opaque%28__%29.md)

### Initializers

- [init(copying:newPort:)](nwendpoint/init%28copying_newport_%29.md): Creates a new `NWEndpoint` by copying an existing endpoint and specifying a new port.

### Instance Properties

- [txtRecord](nwendpoint/txtrecord.md)
- [wifiAware](nwendpoint/wifiaware.md): Get an `WAEndpoint` that can connect to this `NWEndpoint`’s remote device over Wi-Fi Aware, or `nil` if the `NWEndpoint` is not compatible with Wi-Fi Aware.

### Instance Methods

- [wifiAware(port:)](nwendpoint/wifiaware%28port_%29.md): Get an `WAEndpoint` that can connect to this `NWEndpoint`’s remote device over Wi-Fi Aware on the specified port, or `nil` if the `NWEndpoint` is not compatible with Wi-Fi Aware.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [NWParameters](nwparameters.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
