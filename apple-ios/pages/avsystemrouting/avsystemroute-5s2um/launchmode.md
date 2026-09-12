> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-5s2um/launchmode](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/launchmode)

# AVSystemRoute.LaunchMode

**Framework:** AVSystemRouting  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The mode that determines how media playback launches on a remote device.

## Declaration

```swift
enum LaunchMode
```

<a id="overview"></a>

## Overview

Use this enumeration with [init(url:mode:)](../avsystemroutesession-gp78/init%28url_mode_%29.md) to control how media playback is initiated on the remote device. The launch mode determines whether your app launches its counterpart on the remote device, or uses a system-provided media player.

## Topics

### Enumeration Cases

- [AVSystemRoute.LaunchMode.application](launchmode/application.md): Launches the corresponding application on the remote device.
- [AVSystemRoute.LaunchMode.player](launchmode/player.md): Launches the system’s built-in media player on the remote device.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Routes and sessions

- [AVSystemRoute](../avsystemroute-5s2um.md): An active media route to a remote device that manages connection and communication for media playback and data exchange.
- [AVSystemRouteSession](../avsystemroutesession-gp78.md): An object that manages a single media playback session on a remote device.
