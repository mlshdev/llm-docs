> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avportalviewport

# AVPortalViewport (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** visionOS 27.0+

An object that defines the visual parameters for content displayed within a portal frame.

## Declaration

```swift
class AVPortalViewport
```

<a id="overview"></a>

## Overview

Use this configuration to create cinematic viewing experiences with custom framing. Portal viewports let you control how the system frames and presents immersive content. Specify the aspect ratio of the portal frame to achieve the visual effect you want, as the following example shows:

```swift
let portalViewport = AVPortalViewport()
portalViewport.aspectRatio = 2.39
playerViewController.viewport.portal = portalViewport
```

When you don’t explicitly set properties, the system provides sensible defaults. The aspect ratio defaults to 16:9 (1.78) for standard widescreen content.

> **Note**

> Spatial videos don’t support portal viewport settings.

## Topics

### Configuring the aspect ratio

- [aspectRatio](avportalviewport/aspectratio-4drnq.md): The width-to-height ratio of the portal frame.

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
- [AVViewport](avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.

# AVPortalViewport (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** visionOS 27.0+

An object that defines the visual parameters for content displayed within a portal frame.

## Declaration

```objectivec
@interface AVPortalViewport : NSObject
```

<a id="overview"></a>

## Overview

Use this configuration to create cinematic viewing experiences with custom framing. Portal viewports let you control how the system frames and presents immersive content. Specify the aspect ratio of the portal frame to achieve the visual effect you want, as the following example shows:

```swift
let portalViewport = AVPortalViewport()
portalViewport.aspectRatio = 2.39
playerViewController.viewport.portal = portalViewport
```

When you don’t explicitly set properties, the system provides sensible defaults. The aspect ratio defaults to 16:9 (1.78) for standard widescreen content.

> **Note**

> Spatial videos don’t support portal viewport settings.

## Topics

### Instance Properties

- [aspectRatio](avportalviewport/aspectratio-3jqur.md): The aspect ratio of the portal frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Immersive and multiview media

- [Playing immersive media with AVKit](playing-immersive-media-with-avkit.md): Adopt the system playback interface to provide an immersive video watching experience.
- [AVViewport](avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
