> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avviewport

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

### Immersive and multiview media

- [Playing immersive media with AVKit](playing-immersive-media-with-avkit.md): Adopt the system playback interface to provide an immersive video watching experience.
- [Creating a multiview video playback experience in visionOS](creating-a-multiview-video-playback-experience-in-visionos.md): Build an interface that plays multiple videos simultaneously and handles transitions to different experience types gracefully.
- [AVExperienceController](avexperiencecontroller.md): An object that controls video experiences.
- [AVMultiviewManager](avmultiviewmanager.md): An object that manages viewing multiple videos at once.
- [AVGroupExperienceCoordinator](avgroupexperiencecoordinator.md): An object that synchronizes viewing environment state across participants in a SharePlay session.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.

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

### Immersive and multiview media

- [Playing immersive media with AVKit](playing-immersive-media-with-avkit.md): Adopt the system playback interface to provide an immersive video watching experience.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.
