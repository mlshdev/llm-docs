> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagepresentationevents/transitionstarted](https://developer.apple.com/documentation/realitykit/imagepresentationevents/transitionstarted)

# ImagePresentationEvents.TransitionStarted

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A transition between two viewing modes has started for an image presentation component.

## Declaration

```swift
struct TransitionStarted
```

<a id="overview"></a>

## Overview

Note that a `TransitionStarted` event is not triggered for viewing mode changes that transition immediately to the new mode. For instantaneous transitions, only a `TransitionCompleted` event is fired.

Use the `TransitionStarted` event as an opportunity to hide overlaid UI during an animated transition. Update the content and location of that UI after the transition completes via a corresponding `TransitionCompleted` event.

## Topics

### Instance Properties

- [currentViewingMode](transitionstarted/currentviewingmode.md): The viewing mode the image presentation component is transitioning from.
- [targetViewingMode](transitionstarted/targetviewingmode.md): The viewing mode the image presentation component is transitioning to.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Viewing mode transitions

- [ImagePresentationEvents.TransitionCompleted](transitioncompleted.md): A transition between two viewing modes has completed for an image presentation component.
