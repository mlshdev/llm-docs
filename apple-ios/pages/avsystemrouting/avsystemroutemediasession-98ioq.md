> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutemediasession-98ioq](https://developer.apple.com/documentation/avsystemrouting/avsystemroutemediasession-98ioq)

# AVSystemRouteMediaSession

**Framework:** AVSystemRouting  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object that provides playback controls and a data channel for a session running on a remote device.

## Declaration

```swift
final class AVSystemRouteMediaSession
```

## Mentioned In

- [Routing and streaming media to remote devices](routing-and-streaming-media-to-remote-devices.md)
- [Routing media to third-party devices](routing-media-to-third-party-devices.md)

<a id="overview"></a>

## Overview

Use this object to access playback controls and a data channel for communicating with the remote application. Call [start()](avsystemroutesession-gp78/start%28%29.md) to get this object after adding a session to an [AVSystemRoute](avsystemroute-5s2um.md).

## Topics

### Instance Properties

- [dataChannel](avsystemroutemediasession-98ioq/datachannel.md): The data channel for sending and receiving data with the remote app.
- [playbackControl](avsystemroutemediasession-98ioq/playbackcontrol.md): The playback control interface for the remote session.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback and communication

- [AVSystemRoute.DataChannel](avsystemroute-5s2um/datachannel.md): An object that manages bidirectional data communication with a remote application.
- [AVSystemRouteDataDelegate](avsystemroutedatadelegate-7vt4b.md): A protocol for handling data from a remote application.
