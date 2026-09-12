> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/requiresdnssecvalidation](https://developer.apple.com/documentation/network/nwparameters/requiresdnssecvalidation)

# requiresDNSSECValidation

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that determines whether a connection requires DNSSEC validation when resolving endpoints.

## Declaration

```swift
final var requiresDNSSECValidation: Bool { get set }
```

## See Also

### Customizing Connection Options

- [multipathServiceType](multipathservicetype-swift.property.md): An option to allow connections to use multipath protocols.
- [NWParameters.MultipathServiceType](multipathservicetype-swift.enum.md): Modes in which a connection can support multipath protocols.
- [serviceClass](serviceclass-swift.property.md): The traffic characteristics network connections send and receive.
- [NWParameters.ServiceClass](serviceclass-swift.enum.md): Indicates how the system prioritizes transmitted traffic by your latency and throughput needs.
- [allowFastOpen](allowfastopen.md): A Boolean that enables sending application data with protocol handshakes.
- [expiredDNSBehavior](expireddnsbehavior-swift.property.md): A behavior that defines how expired DNS answers will be used.
- [NWParameters.ExpiredDNSBehavior](expireddnsbehavior-swift.enum.md): Options for configuring how expired DNS answers should be used.
- [preferNoProxies](prefernoproxies.md): A Boolean that indicates that connections should ignore proxies when they are enabled on the system.
- [includePeerToPeer](includepeertopeer.md): A Boolean that enables peer-to-peer link technologies for connections and listeners.
- [allowLocalEndpointReuse](allowlocalendpointreuse.md): A Boolean that allows reusing local addresses and ports across connections.
- [acceptLocalOnly](acceptlocalonly.md): A Boolean that restricts listeners to only accepting connections from the local link.
