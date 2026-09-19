> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avsystemrouting/avsystemroutedatadelegate-7vt4b

# AVSystemRouteDataDelegate

**Framework:** AVSystemRouting  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A protocol for handling data from a remote application.

## Declaration

```swift
protocol AVSystemRouteDataDelegate : AnyObject
```

## Mentioned In

- [Routing and streaming media to remote devices](routing-and-streaming-media-to-remote-devices.md)
- [Routing media to third-party devices](routing-media-to-third-party-devices.md)

## Topics

### Instance Methods

- [receive(\_:)](avsystemroutedatadelegate-7vt4b/receive%28__%29.md): Receives data sent from a connected remote applicaiton.

## See Also

### Playback and communication

- [AVSystemRouteMediaSession](avsystemroutemediasession-98ioq.md): An object that provides playback controls and a data channel for a session running on a remote device.
- [AVSystemRoute.DataChannel](avsystemroute-5s2um/datachannel.md): An object that manages bidirectional data communication with a remote application.
