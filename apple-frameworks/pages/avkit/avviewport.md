> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avviewport](https://developer.apple.com/documentation/avkit/avviewport)

# AVViewport (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** visionOS 27.0+

An object that provides configuration options for how the player displays content in different viewing contexts.

## Declaration

```swift
class AVViewport
```

<a id="overview"></a>

## Overview

Use this object to customize the visual presentation of your content, as the following example shows:

```swift
let portalViewport = AVPortalViewport()
portalViewport.aspectRatio = 2.39
playerViewController.viewport.portal = portalViewport
```

## Topics

### Configuring the portal viewport

- [portal](avviewport/portal.md): The viewport configuration to use when the player displays immersive content in a portal.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.

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
- [AVGroupExperienceCoordinator](avgroupexperiencecoordinator.md): An object that synchronizes viewing environment state across participants in a SharePlay session.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.

# AVViewport (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** visionOS 27.0+

An object that provides configuration options for how the player displays content in different viewing contexts.

## Declaration

```objectivec
@interface AVViewport : NSObject
```

<a id="overview"></a>

## Overview

Use this object to customize the visual presentation of your content, as the following example shows:

```swift
let portalViewport = AVPortalViewport()
portalViewport.aspectRatio = 2.39
playerViewController.viewport.portal = portalViewport
```

## Topics

### Configuring the portal viewport

- [portal](avviewport/portal.md): The viewport configuration to use when the player displays immersive content in a portal.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### visionOS playback

- [Playing immersive media with AVKit](playing-immersive-media-with-avkit.md): Adopt the system playback interface to provide an immersive video watching experience.
- [Adopting the system player interface in visionOS](adopting-the-system-player-interface-in-visionos.md): Provide an optimized viewing experience for watching 3D video content.
- [Trimming and exporting media in visionOS](trimming-and-exporting-media-in-visionos.md): Display standard controls in your app to edit the timeline of the currently playing media.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
