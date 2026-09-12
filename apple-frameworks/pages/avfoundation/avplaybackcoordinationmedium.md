> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinationmedium](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinationmedium)

# AVPlaybackCoordinationMedium (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The AVPlaybackCoordinationMedium passes states and messages between its connected playback coordinators.

## Declaration

```swift
class AVPlaybackCoordinationMedium
```

<a id="overview"></a>

## Overview

The coordination medium passes states and messages from one playback coordinator to all other connected playback coordinators to enable coordination of rate changes and seeks. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## Topics

### Creating a coordination medium

- [init()](avplaybackcoordinationmedium/init%28%29.md): Initializes an AVPlaybackCoordinationMedium

### Managing playback coordinators

- [connectedPlaybackCoordinators](avplaybackcoordinationmedium/connectedplaybackcoordinators.md): All playback coordinators that are connected to the coordination medium.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [AVDelegatingPlaybackCoordinator](avdelegatingplaybackcoordinator.md): A playback coordinator subclass that coordinates the playback of custom player objects in a connected group.

# AVPlaybackCoordinationMedium (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The AVPlaybackCoordinationMedium passes states and messages between its connected playback coordinators.

## Declaration

```objectivec
@interface AVPlaybackCoordinationMedium : NSObject
```

<a id="overview"></a>

## Overview

The coordination medium passes states and messages from one playback coordinator to all other connected playback coordinators to enable coordination of rate changes and seeks. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## Topics

### Creating a coordination medium

- [init](avplaybackcoordinationmedium/init%28%29.md): Initializes an AVPlaybackCoordinationMedium

### Managing playback coordinators

- [connectedPlaybackCoordinators](avplaybackcoordinationmedium/connectedplaybackcoordinators.md): All playback coordinators that are connected to the coordination medium.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### SharePlay

- [Supporting coordinated media playback](supporting-coordinated-media-playback.md): Create synchronized media experiences that enable users to watch and listen across devices.
- [AVPlaybackCoordinator](avplaybackcoordinator.md): An object that coordinates the playback of players in a connected group.
- [AVPlayerPlaybackCoordinator](avplayerplaybackcoordinator.md): A playback coordinator subclass that coordinates the playback of player objects in a connected group.
- [AVDelegatingPlaybackCoordinator](avdelegatingplaybackcoordinator.md): A playback coordinator subclass that coordinates the playback of custom player objects in a connected group.
