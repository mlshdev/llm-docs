> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocoltcp/metadata](https://developer.apple.com/documentation/network/nwprotocoltcp/metadata)

# NWProtocolTCP.Metadata

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A handle you can use to inspect a connection’s TCP state.

## Declaration

```swift
class Metadata
```

## Topics

### Inspecting TCP State

- [availableSendBuffer](metadata/availablesendbuffer.md): The number of available bytes in the TCP send buffer.
- [availableReceiveBuffer](metadata/availablereceivebuffer.md): The number of available bytes in the TCP receive buffer.

### Instance Methods

- [setMaximumPacingRateBytesPerSecond(\_:)](metadata/setmaximumpacingratebytespersecond%28__%29.md): Set the maximum pacing rate for this TCP connection, in bytes per second.

## Relationships

### Inherits From

- [NWProtocolMetadata](../nwprotocolmetadata.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
