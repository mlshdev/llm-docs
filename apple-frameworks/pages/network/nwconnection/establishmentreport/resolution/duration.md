> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/establishmentreport/resolution/duration](https://developer.apple.com/documentation/network/nwconnection/establishmentreport/resolution/duration)

# duration

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The duration of this resolution step, from when the query was issued to when the response was complete.

## Declaration

```swift
let duration: TimeInterval
```

## See Also

### Measuring Performance

- [source](source-swift.property.md): The source of the DNS response.
- [NWConnection.EstablishmentReport.Resolution.Source](source-swift.enum.md): Sources that may provide DNS responses.
- [dnsProtocol](dnsprotocol-swift.property.md): The transport protocol your connection used for DNS resolution.
- [NWConnection.EstablishmentReport.Resolution.DNSProtocol](dnsprotocol-swift.enum.md): A set of transport protocols connections use for DNS resolution.
