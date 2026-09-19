> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avmultiviewmanager

# AVMultiviewManager

**Framework:** AVKit  
**Kind:** Class  
**Availability:** visionOS 2.0+

An object that manages viewing multiple videos at once.

## Declaration

```swift
@MainActor final class AVMultiviewManager
```

<a id="overview"></a>

## Overview

Watch multiple videos at the same time with [AVExperienceController.Experience.multiview](avexperiencecontroller/experience-swift.enum/multiview.md) using multiple [AVExperienceController](avexperiencecontroller.md) objects.

## Topics

### Accessing the default instance

- [default](avmultiviewmanager/default.md): The default multiview manager.

### Providing additional UI

- [contentSelectionViewController](avmultiviewmanager/contentselectionviewcontroller.md): A view controller that presents a user interface to select additional video content to display.
- [AVContentSelectionViewController](avcontentselectionviewcontroller.md): A view controller for providing additional UI to the multiview experience.

### Dismissing the multiview experience

- [dismiss()](avmultiviewmanager/dismiss%28%29.md): Dismisses the multiview presentation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Immersive and multiview media

- [Playing immersive media with AVKit](playing-immersive-media-with-avkit.md): Adopt the system playback interface to provide an immersive video watching experience.
- [Creating a multiview video playback experience in visionOS](creating-a-multiview-video-playback-experience-in-visionos.md): Build an interface that plays multiple videos simultaneously and handles transitions to different experience types gracefully.
- [AVExperienceController](avexperiencecontroller.md): An object that controls video experiences.
- [AVGroupExperienceCoordinator](avgroupexperiencecoordinator.md): An object that synchronizes viewing environment state across participants in a SharePlay session.
- [AVViewport](avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.
