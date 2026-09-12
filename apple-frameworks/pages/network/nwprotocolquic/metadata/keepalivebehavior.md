> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolquic/metadata/keepalivebehavior](https://developer.apple.com/documentation/network/nwprotocolquic/metadata/keepalivebehavior)

# NWProtocolQUIC.Metadata.KeepAliveBehavior

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A QUIC connection keepalive behavior.

## Declaration

```swift
enum KeepAliveBehavior
```

## Topics

### Keepalive Behaviors

- [NWProtocolQUIC.Metadata.KeepAliveBehavior.on](keepalivebehavior/on.md): Keepalives are enabled with the default timeout.
- [NWProtocolQUIC.Metadata.KeepAliveBehavior.off](keepalivebehavior/off.md): Keepalives are disabled.
- [NWProtocolQUIC.Metadata.KeepAliveBehavior.seconds(\_:)](keepalivebehavior/seconds%28__%29.md): Keepalives are enabled with a custom timeout, in seconds.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Keepalives

- [keepAlive](keepalive.md): The QUIC connection keepalive behavior.
