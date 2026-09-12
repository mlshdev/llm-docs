> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller](https://developer.apple.com/documentation/avkit/avexperiencecontroller)

# AVExperienceController

**Framework:** AVKit  
**Kind:** Class  
**Availability:** visionOS 2.0+

An object that controls video experiences.

## Declaration

```swift
@MainActor final class AVExperienceController
```

<a id="overview"></a>

## Overview

Use this class to control, observe, and respond to experience changes for an [AVPlayerViewController](avplayerviewcontroller.md). After you attach an experience controller, the player view controller no longer honors its presentation APIs. Using the other presentation APIs may preclude the use of this class.

## Topics

### Configuring the experience

- [allowedExperiences](avexperiencecontroller/allowedexperiences.md): The set of experiences the app supports.
- [availableExperiences](avexperiencecontroller/availableexperiences.md): The allowed experiences that are available to use on the device at this time.
- [AVExperienceController.Experiences](avexperiencecontroller/experiences.md): A structure that represents a collection of experiences to use with an experience controller.
- [experience](avexperiencecontroller/experience-swift.property.md): The current experience.
- [AVExperienceController.Experience](avexperiencecontroller/experience-swift.enum.md): The types of experiences the system supports.
- [configuration](avexperiencecontroller/configuration-swift.property.md): The configuration options per experience.
- [AVExperienceController.Configuration](avexperiencecontroller/configuration-swift.struct.md): Options that configure each experience.

### Transitioning experiences

- [AVExperienceController.TransitionGroup](avexperiencecontroller/transitiongroup.md): A group of experience transitions that prepare concurrently and run simultaneously as a single visual transition.
- [withTransitionGroup(body:)](avexperiencecontroller/withtransitiongroup%28body_%29.md): Coordinates multiple experience transitions to perform together as a single visual transition.
- [transition(to:)](avexperiencecontroller/transition%28to_%29.md): Transitions the video to a different experience.

### Configuring a delegate

- [delegate](avexperiencecontroller/delegate-swift.property.md): A delegate object for the experience controller.
- [AVExperienceController.Delegate](avexperiencecontroller/delegate-swift.protocol.md): A protocol that defines the methods to implement to respond to experience changes.

### Structures

- [AVExperienceController.ExpandedConfiguration](avexperiencecontroller/expandedconfiguration.md): A structure that specifies options for an expanded experience.
- [AVExperienceController.TransitionContext](avexperiencecontroller/transitioncontext.md): The state of the transition that the system provides to the delegate object.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### visionOS playback

- [Playing immersive media with AVKit](playing-immersive-media-with-avkit.md): Adopt the system playback interface to provide an immersive video watching experience.
- [Creating a multiview video playback experience in visionOS](creating-a-multiview-video-playback-experience-in-visionos.md): Build an interface that plays multiple videos simultaneously and handles transitions to different experience types gracefully.
- [Adopting the system player interface in visionOS](adopting-the-system-player-interface-in-visionos.md): Provide an optimized viewing experience for watching 3D video content.
- [Trimming and exporting media in visionOS](trimming-and-exporting-media-in-visionos.md): Display standard controls in your app to edit the timeline of the currently playing media.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVMultiviewManager](avmultiviewmanager.md): An object that manages viewing multiple videos at once.
- [AVGroupExperienceCoordinator](avgroupexperiencecoordinator.md): An object that synchronizes viewing environment state across participants in a SharePlay session.
- [AVViewport](avviewport.md): An object that provides configuration options for how the player displays content in different viewing contexts.
- [AVPortalViewport](avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
