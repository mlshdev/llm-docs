> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/establishmentreport/resolution/dnsprotocol-swift.enum](https://developer.apple.com/documentation/network/nwconnection/establishmentreport/resolution/dnsprotocol-swift.enum)

# NWConnection.EstablishmentReport.Resolution.DNSProtocol

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A set of transport protocols connections use for DNS resolution.

## Declaration

```swift
enum DNSProtocol
```

## Topics

### Resolution Transports

- [NWConnection.EstablishmentReport.Resolution.DNSProtocol.unknown](dnsprotocol-swift.enum/unknown.md): The DNS response protocol is unknown or not applicable.
- [NWConnection.EstablishmentReport.Resolution.DNSProtocol.udp](dnsprotocol-swift.enum/udp.md): The connection used cleartext UDP for DNS resolution.
- [NWConnection.EstablishmentReport.Resolution.DNSProtocol.tcp](dnsprotocol-swift.enum/tcp.md): The connection used cleartext TCP for DNS resolution.
- [NWConnection.EstablishmentReport.Resolution.DNSProtocol.tls](dnsprotocol-swift.enum/tls.md): The connection used TLS for DNS resolution.
- [NWConnection.EstablishmentReport.Resolution.DNSProtocol.https](dnsprotocol-swift.enum/https.md): The connection used HTTPS for DNS resolution.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Measuring Performance

- [duration](duration.md): The duration of this resolution step, from when the query was issued to when the response was complete.
- [source](source-swift.property.md): The source of the DNS response.
- [NWConnection.EstablishmentReport.Resolution.Source](source-swift.enum.md): Sources that may provide DNS responses.
- [dnsProtocol](dnsprotocol-swift.property.md): The transport protocol your connection used for DNS resolution.
