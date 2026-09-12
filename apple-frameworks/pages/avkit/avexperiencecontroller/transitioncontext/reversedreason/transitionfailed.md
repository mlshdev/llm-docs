> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason/transitionfailed](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason/transitionfailed)

# AVExperienceController.TransitionContext.ReversedReason.transitionFailed

**Framework:** AVKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

A transition has failed.

## Declaration

```swift
case transitionFailed
```

<a id="Discussion"></a>

## Discussion

This could fail due to changes in the system state after a transition is prepared.

## See Also

### Reasons

- [AVExperienceController.TransitionContext.ReversedReason.invalidConfiguration](invalidconfiguration.md): A transition could not be completed because some required configuration was unavailable.
- [AVExperienceController.TransitionContext.ReversedReason.invalidExperience](invalidexperience.md): A transition was attempted with an experience that cannot be transitioned to.
- [AVExperienceController.TransitionContext.ReversedReason.transitionCancelled](transitioncancelled.md): A transition in progress has been cancelled.
- [AVExperienceController.TransitionContext.ReversedReason.transitionInProgress](transitioninprogress.md): A transition was attempted while another transition was in progress.
