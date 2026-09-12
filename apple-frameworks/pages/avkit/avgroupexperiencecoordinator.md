> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avgroupexperiencecoordinator](https://developer.apple.com/documentation/avkit/avgroupexperiencecoordinator)

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

### visionOS playback

- [Playing immersive media with AVKit](playing-immersive-media-with-avkit.md): Adopt the system playback interface to provide an immersive video watching experience.
- [Creating a multiview video playback experience in visionOS](creating-a-multiview-video-playback-experience-in-visionos.md): Build an interface that plays multiple videos simultaneously and handles transitions to different experience types gracefully.
- [Adopting the system player interface in visionOS](adopting-the-system-player-interface-in-visionos.md): Provide an optimized viewing experience for watching 3D video content.
- [Trimming and exporting media in visionOS](trimming-and-exporting-media-in-visionos.md): Display standard controls in your app to edit the timeline of the currently playing media.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVExperienceController](avexperiencecontroller.md): An object that controls video experiences.
- [AVMultiviewManager](avmultiviewmanager.md): An object that manages viewing multiple videos at once.
- [AVViewport](avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
