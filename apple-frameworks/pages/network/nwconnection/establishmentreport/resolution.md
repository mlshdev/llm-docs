> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/establishmentreport/resolution](https://developer.apple.com/documentation/network/nwconnection/establishmentreport/resolution)

# NWConnection.EstablishmentReport.Resolution

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A description of a single DNS resolution step.

## Declaration

```swift
struct Resolution
```

## Topics

### Measuring Performance

- [duration](resolution/duration.md): The duration of this resolution step, from when the query was issued to when the response was complete.
- [source](resolution/source-swift.property.md): The source of the DNS response.
- [NWConnection.EstablishmentReport.Resolution.Source](resolution/source-swift.enum.md): Sources that may provide DNS responses.
- [dnsProtocol](resolution/dnsprotocol-swift.property.md): The transport protocol your connection used for DNS resolution.
- [NWConnection.EstablishmentReport.Resolution.DNSProtocol](resolution/dnsprotocol-swift.enum.md): A set of transport protocols connections use for DNS resolution.

### Examining Resolved Endpoints

- [successfulEndpoint](resolution/successfulendpoint.md): The resolved endpoint that led to the established connection.
- [preferredEndpoint](resolution/preferredendpoint.md): The resolved endpoint that the connection used for its first connection attempt.
- [endpointCount](resolution/endpointcount.md): The number of endpoints resolved in this step.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting Resolution

- [resolutions](resolutions.md): The array of resolution steps performed during connection establishment, in order from first resolved to last resolved.
