> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/expireddnsbehavior-swift.enum](https://developer.apple.com/documentation/network/nwparameters/expireddnsbehavior-swift.enum)

# NWParameters.ExpiredDNSBehavior

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Options for configuring how expired DNS answers should be used.

## Declaration

```swift
enum ExpiredDNSBehavior
```

## Topics

### Behaviors

- [NWParameters.ExpiredDNSBehavior.systemDefault](expireddnsbehavior-swift.enum/systemdefault.md): Let the system determine whether or not to allow expired DNS answers.
- [NWParameters.ExpiredDNSBehavior.allow](expireddnsbehavior-swift.enum/allow.md): Explicitly allow the use of expired DNS answers.
- [NWParameters.ExpiredDNSBehavior.prohibit](expireddnsbehavior-swift.enum/prohibit.md): Explicitly prohibit the use of expired DNS answers.

### Enumeration Cases

- [NWParameters.ExpiredDNSBehavior.persistent](expireddnsbehavior-swift.enum/persistent.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing Connection Options

- [multipathServiceType](multipathservicetype-swift.property.md): An option to allow connections to use multipath protocols.
- [NWParameters.MultipathServiceType](multipathservicetype-swift.enum.md): Modes in which a connection can support multipath protocols.
- [serviceClass](serviceclass-swift.property.md): The traffic characteristics network connections send and receive.
- [NWParameters.ServiceClass](serviceclass-swift.enum.md): Indicates how the system prioritizes transmitted traffic by your latency and throughput needs.
- [allowFastOpen](allowfastopen.md): A Boolean that enables sending application data with protocol handshakes.
- [expiredDNSBehavior](expireddnsbehavior-swift.property.md): A behavior that defines how expired DNS answers will be used.
- [requiresDNSSECValidation](requiresdnssecvalidation.md): A Boolean value that determines whether a connection requires DNSSEC validation when resolving endpoints.
- [preferNoProxies](prefernoproxies.md): A Boolean that indicates that connections should ignore proxies when they are enabled on the system.
- [includePeerToPeer](includepeertopeer.md): A Boolean that enables peer-to-peer link technologies for connections and listeners.
- [allowLocalEndpointReuse](allowlocalendpointreuse.md): A Boolean that allows reusing local addresses and ports across connections.
- [acceptLocalOnly](acceptlocalonly.md): A Boolean that restricts listeners to only accepting connections from the local link.
