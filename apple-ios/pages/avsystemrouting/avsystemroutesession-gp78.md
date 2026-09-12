> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutesession-gp78](https://developer.apple.com/documentation/avsystemrouting/avsystemroutesession-gp78)

# AVSystemRouteSession

**Framework:** AVSystemRouting  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object that manages a single media playback session on a remote device.

## Declaration

```swift
final class AVSystemRouteSession
```

## Mentioned In

- [Routing and streaming media to remote devices](routing-and-streaming-media-to-remote-devices.md)
- [Routing media to third-party devices](routing-media-to-third-party-devices.md)

<a id="overview"></a>

## Overview

[AVSystemRouteSession](avsystemroutesession-gp78.md) manages a single media playback session on a remote device. Create a session to initiate playback on a connected device, communicate with a remote application, and control the lifecycle of the remote playback experience.

To use a session:

1. Create an [AVSystemRouteSession](avsystemroutesession-gp78.md) with a URL and launch mode
2. Add the session to an [AVSystemRoute](avsystemroute-5s2um.md) using [addSession(\_:)](avsystemroute-5s2um/addsession%28__%29.md)
3. Start the session with [start()](avsystemroutesession-gp78/start%28%29.md)
4. Use the returned [AVSystemRouteMediaSession](avsystemroutemediasession-98ioq.md) to communicate with the remote device
5. Call [stop()](avsystemroutesession-gp78/stop%28%29.md) when playback ends to clean up resources

Sessions are single-use. After calling [stop()](avsystemroutesession-gp78/stop%28%29.md), the session cannot be restarted or added to another route. Create a new [AVSystemRouteSession](avsystemroutesession-gp78.md) for each new playback.

<a id="Reporting-Playback-Metadata"></a>

## Reporting Playback Metadata

Report playback metadata to `MPNowPlayingInfoCenter` to ensure the system displays accurate information about the current media across a person’s devices and in system UI.

## Topics

### Initializers

- [init(url:mode:)](avsystemroutesession-gp78/init%28url_mode_%29.md): Creates a session for initiating playback on a remote device.

### Instance Methods

- [start()](avsystemroutesession-gp78/start%28%29.md): Starts the session and initiates media playback on the remote device.
- [stop()](avsystemroutesession-gp78/stop%28%29.md): Stops the session and terminates media playback on the remote device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Routes and sessions

- [AVSystemRoute](avsystemroute-5s2um.md): An active media route to a remote device that manages connection and communication for media playback and data exchange.
- [AVSystemRoute.LaunchMode](avsystemroute-5s2um/launchmode.md): The mode that determines how media playback launches on a remote device.
