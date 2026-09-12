> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/establishmentreport/resolution/dnsprotocol-swift.property](https://developer.apple.com/documentation/network/nwconnection/establishmentreport/resolution/dnsprotocol-swift.property)

# dnsProtocol

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The transport protocol your connection used for DNS resolution.

## Declaration

```swift
var dnsProtocol: NWConnection.EstablishmentReport.Resolution.DNSProtocol { get }
```

## See Also

### Measuring Performance

- [duration](duration.md): The duration of this resolution step, from when the query was issued to when the response was complete.
- [source](source-swift.property.md): The source of the DNS response.
- [NWConnection.EstablishmentReport.Resolution.Source](source-swift.enum.md): Sources that may provide DNS responses.
- [NWConnection.EstablishmentReport.Resolution.DNSProtocol](dnsprotocol-swift.enum.md): A set of transport protocols connections use for DNS resolution.
