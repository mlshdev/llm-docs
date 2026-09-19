> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkconnection/datagrams

# datagrams

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access connection-wide unreliable datagrams over QUIC. Subsequent accesses to this object will return the same reference. All incoming datagrams for the entire QUIC connection will be received on this `SubConnection` once invoked.

## Declaration

```swift
final var datagrams: QUIC.Datagrams<QUICDatagram> { get async throws }
```
