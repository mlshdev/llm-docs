> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerplaybackcoordinator](https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinator)

# AVPlayerPlaybackCoordinator (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A playback coordinator subclass that coordinates the playback of player objects in a connected group.

## Declaration

```swift
class AVPlayerPlaybackCoordinator
```

<a id="overview"></a>

## Overview

This object coordinates the state of [AVPlayer](avplayer.md) objects. You don’t create an instance of the coordinator, but instead access the player’s instance through its [playbackCoordinator](avplayer/playbackcoordinator.md) property.

Use the standard interfaces of [AVPlayer](avplayer.md) to control playback in your app. The coordinator automatically intercepts calls that affect transport control state, like [setRate(\_:time:atHostTime:)](avplayer/setrate%28__time_athosttime_%29.md), [pause()](avplayer/pause%28%29.md), and [seek(to:completionHandler:)](avplayer/seek%28to_completionhandler_%29-75bls.md), and propagates them to other participants in the group when appropriate. Similarly, the coordinator observes rate and time changes from other participants and imposes them on the player. If this occurs, the player item posts notifications that identify the originating participant.

![A diagram representing two devices that each contain representations of the app, AVPlayer, AVPlayerItem, and AVPlayerPlaybackCoordinator relationships. The two AVPlayerPlaybackCoordinator items have a two-way dotted-line connection between the two devices.](https://developer.apple.com/images/com.apple.avfoundation/media-3839391@2x.png)

This object may automatically suspend coordinated playback when a system state change causes the player’s [timeControlStatus](avplayer/timecontrolstatus-swift.property.md) value to change from a playing state to a waiting or paused state. A suspension that begins because the player enters a waiting state due to an event like a network stall or interstitial playback, ends automatically when the player finishes waiting. However, if the system pauses playback due to a system state change, such as an audio session interruption, the suspension ends only after the player’s rate changes back to nonzero.

> **Important**

>  A playback coordinator doesn’t manage the playback queue of connected players. You need to implement custom logic to enqueue the same item across all connected players.

## Topics

### Accessing the player

- [player](avplayerplaybackcoordinator/player.md): A player that participates in coordinated playback.

### Configuring the delegate

- [delegate](avplayerplaybackcoordinator/delegate.md): A delegate object for the playback coordinator.
- [AVPlayerPlaybackCoordinatorDelegate](avplayerplaybackcoordinatordelegate.md): A protocol that defines the methods to implement to participate in playback coordination.

### Managing coordination

- [coordinate(using:)](avplayerplaybackcoordinator/coordinate%28using_%29.md): Connects the playback coordinator to the coordination medium
- [playbackCoordinationMedium](avplayerplaybackcoordinator/playbackcoordinationmedium.md): The AVPlaybackCoordinationMedium this playback coordinator is connected to.

## Relationships

### Inherits From

- [AVPlaybackCoordinator](avplaybackcoordinator.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### SharePlay

- [Destination Video](../visionos/destination-video.md): Leverage SwiftUI to build an immersive media experience in a multiplatform app.
- [Supporting coordinated media playback](supporting-coordinated-media-playback.md): Create synchronized media experiences that enable users to watch and listen across devices.
- [AVPlaybackCoordinator](avplaybackcoordinator.md): An object that coordinates the playback of players in a connected group.
- [AVDelegatingPlaybackCoordinator](avdelegatingplaybackcoordinator.md): A playback coordinator subclass that coordinates the playback of custom player objects in a connected group.
- [AVPlaybackCoordinationMedium](avplaybackcoordinationmedium.md): The AVPlaybackCoordinationMedium passes states and messages between its connected playback coordinators.

# AVPlayerPlaybackCoordinator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A playback coordinator subclass that coordinates the playback of player objects in a connected group.

## Declaration

```objectivec
@interface AVPlayerPlaybackCoordinator : AVPlaybackCoordinator
```

<a id="overview"></a>

## Overview

This object coordinates the state of [AVPlayer](avplayer.md) objects. You don’t create an instance of the coordinator, but instead access the player’s instance through its [playbackCoordinator](avplayer/playbackcoordinator.md) property.

Use the standard interfaces of [AVPlayer](avplayer.md) to control playback in your app. The coordinator automatically intercepts calls that affect transport control state, like [setRate:time:atHostTime:](avplayer/setrate%28__time_athosttime_%29.md), [pause](avplayer/pause%28%29.md), and [seekToTime:completionHandler:](avplayer/seek%28to_completionhandler_%29-75bls.md), and propagates them to other participants in the group when appropriate. Similarly, the coordinator observes rate and time changes from other participants and imposes them on the player. If this occurs, the player item posts notifications that identify the originating participant.

![A diagram representing two devices that each contain representations of the app, AVPlayer, AVPlayerItem, and AVPlayerPlaybackCoordinator relationships. The two AVPlayerPlaybackCoordinator items have a two-way dotted-line connection between the two devices.](https://developer.apple.com/images/com.apple.avfoundation/media-3839391@2x.png)

This object may automatically suspend coordinated playback when a system state change causes the player’s [timeControlStatus](avplayer/timecontrolstatus-swift.property.md) value to change from a playing state to a waiting or paused state. A suspension that begins because the player enters a waiting state due to an event like a network stall or interstitial playback, ends automatically when the player finishes waiting. However, if the system pauses playback due to a system state change, such as an audio session interruption, the suspension ends only after the player’s rate changes back to nonzero.

> **Important**

>  A playback coordinator doesn’t manage the playback queue of connected players. You need to implement custom logic to enqueue the same item across all connected players.

## Topics

### Accessing the player

- [player](avplayerplaybackcoordinator/player.md): A player that participates in coordinated playback.

### Configuring the delegate

- [delegate](avplayerplaybackcoordinator/delegate.md): A delegate object for the playback coordinator.
- [AVPlayerPlaybackCoordinatorDelegate](avplayerplaybackcoordinatordelegate.md): A protocol that defines the methods to implement to participate in playback coordination.

### Managing coordination

- [coordinateUsingCoordinationMedium:error:](avplayerplaybackcoordinator/coordinate%28using_%29.md): Connects the playback coordinator to the coordination medium
- [playbackCoordinationMedium](avplayerplaybackcoordinator/playbackcoordinationmedium.md): The AVPlaybackCoordinationMedium this playback coordinator is connected to.

## Relationships

### Inherits From

- [AVPlaybackCoordinator](avplaybackcoordinator.md)

## See Also

### SharePlay

- [Supporting coordinated media playback](supporting-coordinated-media-playback.md): Create synchronized media experiences that enable users to watch and listen across devices.
- [AVPlaybackCoordinator](avplaybackcoordinator.md): An object that coordinates the playback of players in a connected group.
- [AVDelegatingPlaybackCoordinator](avdelegatingplaybackcoordinator.md): A playback coordinator subclass that coordinates the playback of custom player objects in a connected group.
- [AVPlaybackCoordinationMedium](avplaybackcoordinationmedium.md): The AVPlaybackCoordinationMedium passes states and messages between its connected playback coordinators.
