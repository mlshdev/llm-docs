> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-5s2um/datachannel](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/datachannel)

# AVSystemRoute.DataChannel

**Framework:** AVSystemRouting  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object that manages bidirectional data communication with a remote application.

## Declaration

```swift
final class DataChannel
```

## Topics

### Instance Properties

- [dataDelegate](datachannel/datadelegate.md): The delegate that handles incoming data from a remote application.

### Instance Methods

- [send(\_:)](datachannel/send%28__%29.md): Sends data to a remote application.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback and communication

- [AVSystemRouteMediaSession](../avsystemroutemediasession-98ioq.md): An object that provides playback controls and a data channel for a session running on a remote device.
- [AVSystemRouteDataDelegate](../avsystemroutedatadelegate-7vt4b.md): A protocol for handling data from a remote application.
