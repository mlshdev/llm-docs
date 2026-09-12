> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinator](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator)

# AVDelegatingPlaybackCoordinator (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A playback coordinator subclass that coordinates the playback of custom player objects in a connected group.

## Declaration

```swift
class AVDelegatingPlaybackCoordinator
```

<a id="overview"></a>

## Overview

This object coordinates the state of custom player objects, such as those that render media using [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md) and [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md), or that play audio using [AVAudioEngine](../avfaudio/avaudioengine.md).

Adopt the [AVPlaybackCoordinatorPlaybackControlDelegate](avplaybackcoordinatorplaybackcontroldelegate.md) protocol so that your app responds to playback commands from the coordinator. The commands provide the details of a requested state change so you can control your player object accordingly.

![A diagram representing two devices that each contain representations of the app, AVDelegatingPlaybackCoordinator, playback control delegate, and custom playback object relationships. The two AVDelegatingPlaybackCoordinator items have a two-way dotted-line connection between the two devices.](https://developer.apple.com/images/com.apple.avfoundation/media-3783472@2x.png)

## Topics

### Creating a coordinator

- [init(playbackControlDelegate:)](avdelegatingplaybackcoordinator/init%28playbackcontroldelegate_%29.md): Creates a playback coordinator for a custom playback object.
- [AVPlaybackCoordinatorPlaybackControlDelegate](avplaybackcoordinatorplaybackcontroldelegate.md): A protocol that defines the method to implement to respond to playback commands from the playback coordinator.

### Identifying items

- [currentItemIdentifier](avdelegatingplaybackcoordinator/currentitemidentifier.md): An identifier of the current item.

### Accessing the delegate

- [playbackControlDelegate](avdelegatingplaybackcoordinator/playbackcontroldelegate.md): The delegate object for the playback coordinator.

### Coordinating state changes

- [coordinateRateChange(to:options:)](avdelegatingplaybackcoordinator/coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [coordinateSeek(to:options:)](avdelegatingplaybackcoordinator/coordinateseek%28to_options_%29.md): Coordinates a seek to the specified time for all connected participants.
- [transitionToItem(withIdentifier:proposingInitialTimingBasedOn:)](avdelegatingplaybackcoordinator/transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md): Tells the coordinator to transition to a new item.
- [reapplyCurrentItemStateToPlaybackControlDelegate()](avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md): Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.
- [AVDelegatingPlaybackCoordinatorSeekOptions](avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.
- [AVDelegatingPlaybackCoordinatorRateChangeOptions](avdelegatingplaybackcoordinatorratechangeoptions.md): Constants that define rate change options.

### Playback commands

- [AVDelegatingPlaybackCoordinatorPlaybackControlCommand](avdelegatingplaybackcoordinatorplaybackcontrolcommand.md): An abstract superclass for playback commands.
- [AVDelegatingPlaybackCoordinatorPlayCommand](avdelegatingplaybackcoordinatorplaycommand.md): A command that indicates to play at a specific rate and time.
- [AVDelegatingPlaybackCoordinatorPauseCommand](avdelegatingplaybackcoordinatorpausecommand.md): A command that indicates to pause playback.
- [AVDelegatingPlaybackCoordinatorSeekCommand](avdelegatingplaybackcoordinatorseekcommand.md): A command that indicates to seek to a new time in the item timeline.
- [AVDelegatingPlaybackCoordinatorBufferingCommand](avdelegatingplaybackcoordinatorbufferingcommand.md): A command that indicates to start buffering data in preparation for playback.

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
- [AVPlayerPlaybackCoordinator](avplayerplaybackcoordinator.md): A playback coordinator subclass that coordinates the playback of player objects in a connected group.
- [AVPlaybackCoordinationMedium](avplaybackcoordinationmedium.md): The AVPlaybackCoordinationMedium passes states and messages between its connected playback coordinators.

# AVDelegatingPlaybackCoordinator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A playback coordinator subclass that coordinates the playback of custom player objects in a connected group.

## Declaration

```objectivec
@interface AVDelegatingPlaybackCoordinator : AVPlaybackCoordinator
```

<a id="overview"></a>

## Overview

This object coordinates the state of custom player objects, such as those that render media using [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md) and [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md), or that play audio using [AVAudioEngine](../avfaudio/avaudioengine.md).

Adopt the [AVPlaybackCoordinatorPlaybackControlDelegate](avplaybackcoordinatorplaybackcontroldelegate.md) protocol so that your app responds to playback commands from the coordinator. The commands provide the details of a requested state change so you can control your player object accordingly.

![A diagram representing two devices that each contain representations of the app, AVDelegatingPlaybackCoordinator, playback control delegate, and custom playback object relationships. The two AVDelegatingPlaybackCoordinator items have a two-way dotted-line connection between the two devices.](https://developer.apple.com/images/com.apple.avfoundation/media-3783472@2x.png)

## Topics

### Creating a coordinator

- [initWithPlaybackControlDelegate:](avdelegatingplaybackcoordinator/init%28playbackcontroldelegate_%29.md): Creates a playback coordinator for a custom playback object.
- [AVPlaybackCoordinatorPlaybackControlDelegate](avplaybackcoordinatorplaybackcontroldelegate.md): A protocol that defines the method to implement to respond to playback commands from the playback coordinator.

### Identifying items

- [currentItemIdentifier](avdelegatingplaybackcoordinator/currentitemidentifier.md): An identifier of the current item.

### Accessing the delegate

- [playbackControlDelegate](avdelegatingplaybackcoordinator/playbackcontroldelegate.md): The delegate object for the playback coordinator.

### Coordinating state changes

- [coordinateRateChangeToRate:options:](avdelegatingplaybackcoordinator/coordinateratechange%28to_options_%29.md): Coordinates a rate change across all participants, waiting for others to become ready, if necessary.
- [coordinateSeekToTime:options:](avdelegatingplaybackcoordinator/coordinateseek%28to_options_%29.md): Coordinates a seek to the specified time for all connected participants.
- [transitionToItemWithIdentifier:proposingInitialTimingBasedOnTimebase:](avdelegatingplaybackcoordinator/transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md): Tells the coordinator to transition to a new item.
- [reapplyCurrentItemStateToPlaybackControlDelegate](avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md): Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.
- [AVDelegatingPlaybackCoordinatorSeekOptions](avdelegatingplaybackcoordinatorseekoptions.md): Constants that define seek options.
- [AVDelegatingPlaybackCoordinatorRateChangeOptions](avdelegatingplaybackcoordinatorratechangeoptions.md): Constants that define rate change options.

### Playback commands

- [AVDelegatingPlaybackCoordinatorPlaybackControlCommand](avdelegatingplaybackcoordinatorplaybackcontrolcommand.md): An abstract superclass for playback commands.
- [AVDelegatingPlaybackCoordinatorPlayCommand](avdelegatingplaybackcoordinatorplaycommand.md): A command that indicates to play at a specific rate and time.
- [AVDelegatingPlaybackCoordinatorPauseCommand](avdelegatingplaybackcoordinatorpausecommand.md): A command that indicates to pause playback.
- [AVDelegatingPlaybackCoordinatorSeekCommand](avdelegatingplaybackcoordinatorseekcommand.md): A command that indicates to seek to a new time in the item timeline.
- [AVDelegatingPlaybackCoordinatorBufferingCommand](avdelegatingplaybackcoordinatorbufferingcommand.md): A command that indicates to start buffering data in preparation for playback.

## Relationships

### Inherits From

- [AVPlaybackCoordinator](avplaybackcoordinator.md)

## See Also

### SharePlay

- [Supporting coordinated media playback](supporting-coordinated-media-playback.md): Create synchronized media experiences that enable users to watch and listen across devices.
- [AVPlaybackCoordinator](avplaybackcoordinator.md): An object that coordinates the playback of players in a connected group.
- [AVPlayerPlaybackCoordinator](avplayerplaybackcoordinator.md): A playback coordinator subclass that coordinates the playback of player objects in a connected group.
- [AVPlaybackCoordinationMedium](avplaybackcoordinationmedium.md): The AVPlaybackCoordinationMedium passes states and messages between its connected playback coordinators.
