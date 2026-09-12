> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolip/metadata](https://developer.apple.com/documentation/network/nwprotocolip/metadata)

# NWProtocolIP.Metadata

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Per-packet IP metadata you configure when sending and receiving packets.

## Declaration

```swift
class Metadata
```

## Topics

### Sending IP Options

- [init()](metadata/init%28%29.md): Initializes an IP packet configuration with default settings.
- [ecn](metadata/ecn.md): A specific Explicit Congestion Notification flag value to set on an IP packet.
- [NWProtocolIP.ECN](ecn.md): Flag values for Explicit Congestion Notifications in IP packets.
- [serviceClass](metadata/serviceclass.md): A specific service class to mark on an IP packet.

### Receiving IP Packets

- [receiveTime](metadata/receivetime.md): The time at which a packet was received, in nanoseconds, based on `CLOCK_MONOTONIC_RAW`.

### Instance Methods

- [ecn(\_:)](metadata/ecn%28__%29.md)
- [serviceClass(\_:)](metadata/serviceclass%28__%29.md)

## Relationships

### Inherits From

- [NWProtocolMetadata](../nwprotocolmetadata.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
