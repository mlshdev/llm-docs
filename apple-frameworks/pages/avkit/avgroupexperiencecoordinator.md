> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avgroupexperiencecoordinator

# AVGroupExperienceCoordinator

**Framework:** AVKit  
**Kind:** Class  
**Availability:** visionOS 1.0+

An object that synchronizes viewing environment state across participants in a SharePlay session.

## Declaration

```swift
@objc(AVGroupExperienceCoordinator) class AVGroupExperienceCoordinator
```

<a id="overview"></a>

## Overview

Access an experience coordinator by querying a player view controller for its [groupExperienceCoordinator](avplayerviewcontroller/groupexperiencecoordinator.md) object.

## Topics

### Coordinating state changes

- [coordinateWithSession(\_:)](avgroupexperiencecoordinator/coordinatewithsession%28__%29.md): Begins coordinating viewing environment state with a group session.

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

## See Also

### Immersive and multiview media

- [Playing immersive media with AVKit](playing-immersive-media-with-avkit.md): Adopt the system playback interface to provide an immersive video watching experience.
- [Creating a multiview video playback experience in visionOS](creating-a-multiview-video-playback-experience-in-visionos.md): Build an interface that plays multiple videos simultaneously and handles transitions to different experience types gracefully.
- [AVExperienceController](avexperiencecontroller.md): An object that controls video experiences.
- [AVMultiviewManager](avmultiviewmanager.md): An object that manages viewing multiple videos at once.
- [AVViewport](avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.
