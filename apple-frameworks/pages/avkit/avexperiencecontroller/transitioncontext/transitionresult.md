> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitioncontext/transitionresult](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/transitionresult)

# AVExperienceController.TransitionContext.TransitionResult

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

Describes the result of a transition.

## Declaration

```swift
@preconcurrency enum TransitionResult
```

<a id="overview"></a>

## Overview

A transition can successfully complete to the `toExperience` or reverse back to the `fromExperience`.

## Topics

### Results

- [AVExperienceController.TransitionContext.TransitionResult.completed](transitionresult/completed.md)
- [AVExperienceController.TransitionContext.TransitionResult.reversed(reason:)](transitionresult/reversed%28reason_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Understanding transition results

- [AVExperienceController.TransitionContext.Status](status-swift.enum.md): Describes the status of a transition.
- [AVExperienceController.TransitionContext.ReversedReason](reversedreason.md)
