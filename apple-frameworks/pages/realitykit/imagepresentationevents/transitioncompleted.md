> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagepresentationevents/transitioncompleted](https://developer.apple.com/documentation/realitykit/imagepresentationevents/transitioncompleted)

# ImagePresentationEvents.TransitionCompleted

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A transition between two viewing modes has completed for an image presentation component.

## Declaration

```swift
struct TransitionCompleted
```

<a id="overview"></a>

## Overview

Use the `TransitionCompleted` event as an opportunity to display or relocate overlaid UI after a viewing mode transition.

## Topics

### Instance Properties

- [currentViewingMode](transitioncompleted/currentviewingmode.md): The viewing mode the image presentation component transitioned to.
- [previousViewingMode](transitioncompleted/previousviewingmode.md): The viewing mode the image presentation component transitioned from.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Viewing mode transitions

- [ImagePresentationEvents.TransitionStarted](transitionstarted.md): A transition between two viewing modes has started for an image presentation component.
