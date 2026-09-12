> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitioncontext](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext)

# AVExperienceController.TransitionContext

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

The state of the transition that the system provides to the delegate object.

## Declaration

```swift
@preconcurrency struct TransitionContext
```

<a id="overview"></a>

## Overview

When `AVExperienceController` transitions its `experience` from `fromExperience` to `toExperience`, delegate callbacks provide instances of `TransitionContext` to allow clients to respond as the transition progresses or reverts. The normal `Status` sequence is `.preparing` -\> `.transitioning` -\> `.completed` Once `.completed`, `AVExperienceController`’s `experience` is now the `toExperience`.

Not all transitions are `.completed`, instead they are `.reversed` back to the `fromExperience`. Reversed transitions can happen after `.preparing` or after `.transitioning`, but it will not happen after `.completed` or before `.preparing`. When a transition is reversed a reason is provided.

## Topics

### Inspecting the transition

- [fromExperience](transitioncontext/fromexperience.md): The experience of the `AVExperienceController` before the transition was initiated.
- [toExperience](transitioncontext/toexperience.md): The experience to which the `AVExperienceController` has been requested to transition to.
- [status](transitioncontext/status-swift.property.md): The status of the transition.

### Understanding transition results

- [AVExperienceController.TransitionContext.Status](transitioncontext/status-swift.enum.md): Describes the status of a transition.
- [AVExperienceController.TransitionContext.TransitionResult](transitioncontext/transitionresult.md): Describes the result of a transition.
- [AVExperienceController.TransitionContext.ReversedReason](transitioncontext/reversedreason.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to experience changes

- [experienceController(\_:didChangeAvailableExperiences:)](delegate-swift.protocol/experiencecontroller%28__didchangeavailableexperiences_%29.md): Tells the delegate when the available experiences change.
- [experienceController(\_:prepareForTransitionUsing:)](delegate-swift.protocol/experiencecontroller%28__preparefortransitionusing_%29.md): Tells the delegate that the system is preparing for a transition.
- [experienceController(\_:didChangeTransitionContext:)](delegate-swift.protocol/experiencecontroller%28__didchangetransitioncontext_%29.md): Tells the delegate when the transition context changes during a transition.
