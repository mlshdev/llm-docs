> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason)

# AVExperienceController.TransitionContext.ReversedReason

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

## Declaration

```swift
@preconcurrency enum ReversedReason
```

## Topics

### Reasons

- [AVExperienceController.TransitionContext.ReversedReason.invalidConfiguration](reversedreason/invalidconfiguration.md): A transition could not be completed because some required configuration was unavailable.
- [AVExperienceController.TransitionContext.ReversedReason.invalidExperience](reversedreason/invalidexperience.md): A transition was attempted with an experience that cannot be transitioned to.
- [AVExperienceController.TransitionContext.ReversedReason.transitionCancelled](reversedreason/transitioncancelled.md): A transition in progress has been cancelled.
- [AVExperienceController.TransitionContext.ReversedReason.transitionFailed](reversedreason/transitionfailed.md): A transition has failed.
- [AVExperienceController.TransitionContext.ReversedReason.transitionInProgress](reversedreason/transitioninprogress.md): A transition was attempted while another transition was in progress.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Understanding transition results

- [AVExperienceController.TransitionContext.Status](status-swift.enum.md): Describes the status of a transition.
- [AVExperienceController.TransitionContext.TransitionResult](transitionresult.md): Describes the result of a transition.
