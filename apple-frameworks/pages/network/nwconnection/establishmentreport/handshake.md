> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/establishmentreport/handshake](https://developer.apple.com/documentation/network/nwconnection/establishmentreport/handshake)

# NWConnection.EstablishmentReport.Handshake

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A description of a single protocol handshake.

## Declaration

```swift
struct Handshake
```

## Topics

### Measuring Performance

- [handshakeDuration](handshake/handshakeduration.md): The duration of the protocol handshake.
- [handshakeRTT](handshake/handshakertt.md): The round-trip time the protocol observed during its handshake.

### Identifying Protocols

- [definition](handshake/definition.md): The protocol performing the handshake.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting Protocol Handshakes

- [handshakes](handshakes.md): The array of protocol handshakes in order from first completed to last completed.
