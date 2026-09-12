> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitioncontext/status-swift.enum](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/status-swift.enum)

# AVExperienceController.TransitionContext.Status

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

Describes the status of a transition.

## Declaration

```swift
@preconcurrency enum Status
```

<a id="overview"></a>

## Overview

Transitions go through a sequence of `Status`s as they progress.

## Topics

### Statuses

- [AVExperienceController.TransitionContext.Status.preparing](status-swift.enum/preparing.md): The transition is preparing for `toExperience`.
- [AVExperienceController.TransitionContext.Status.transitioning](status-swift.enum/transitioning.md): The transition is in progress.
- [AVExperienceController.TransitionContext.Status.finished(result:)](status-swift.enum/finished%28result_%29.md): Transition finished. Perform cleanup based on result.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Understanding transition results

- [AVExperienceController.TransitionContext.TransitionResult](transitionresult.md): Describes the result of a transition.
- [AVExperienceController.TransitionContext.ReversedReason](reversedreason.md)
