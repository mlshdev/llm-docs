> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason/transitioncancelled](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason/transitioncancelled)

# AVExperienceController.TransitionContext.ReversedReason.transitionCancelled

**Framework:** AVKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

A transition in progress has been cancelled.

## Declaration

```swift
case transitionCancelled
```

<a id="Discussion"></a>

## Discussion

This can happen due to user interaction or some other system event.

## See Also

### Reasons

- [AVExperienceController.TransitionContext.ReversedReason.invalidConfiguration](invalidconfiguration.md): A transition could not be completed because some required configuration was unavailable.
- [AVExperienceController.TransitionContext.ReversedReason.invalidExperience](invalidexperience.md): A transition was attempted with an experience that cannot be transitioned to.
- [AVExperienceController.TransitionContext.ReversedReason.transitionFailed](transitionfailed.md): A transition has failed.
- [AVExperienceController.TransitionContext.ReversedReason.transitionInProgress](transitioninprogress.md): A transition was attempted while another transition was in progress.
