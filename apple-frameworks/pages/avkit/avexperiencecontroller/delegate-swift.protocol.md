> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/delegate-swift.protocol](https://developer.apple.com/documentation/avkit/avexperiencecontroller/delegate-swift.protocol)

# AVExperienceController.Delegate

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol that defines the methods to implement to respond to experience changes.

## Declaration

```swift
@MainActor protocol Delegate : AnyObject
```

<a id="overview"></a>

## Overview

Use this delegate to be aware of transitions and to update an app’s state based on those changes.

## Topics

### Responding to experience changes

- [experienceController(\_:didChangeAvailableExperiences:)](delegate-swift.protocol/experiencecontroller%28__didchangeavailableexperiences_%29.md): Tells the delegate when the available experiences change.
- [experienceController(\_:prepareForTransitionUsing:)](delegate-swift.protocol/experiencecontroller%28__preparefortransitionusing_%29.md): Tells the delegate that the system is preparing for a transition.
- [experienceController(\_:didChangeTransitionContext:)](delegate-swift.protocol/experiencecontroller%28__didchangetransitioncontext_%29.md): Tells the delegate when the transition context changes during a transition.
- [AVExperienceController.TransitionContext](transitioncontext.md): The state of the transition that the system provides to the delegate object.

## See Also

### Configuring a delegate

- [delegate](delegate-swift.property.md): A delegate object for the experience controller.
