> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason/transitioninprogress](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason/transitioninprogress)

# AVExperienceController.TransitionContext.ReversedReason.transitionInProgress

**Framework:** AVKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

A transition was attempted while another transition was in progress.

## Declaration

```swift
case transitionInProgress
```

<a id="Discussion"></a>

## Discussion

Possible response is to try again after the transition completes.

## See Also

### Reasons

- [AVExperienceController.TransitionContext.ReversedReason.invalidConfiguration](invalidconfiguration.md): A transition could not be completed because some required configuration was unavailable.
- [AVExperienceController.TransitionContext.ReversedReason.invalidExperience](invalidexperience.md): A transition was attempted with an experience that cannot be transitioned to.
- [AVExperienceController.TransitionContext.ReversedReason.transitionCancelled](transitioncancelled.md): A transition in progress has been cancelled.
- [AVExperienceController.TransitionContext.ReversedReason.transitionFailed](transitionfailed.md): A transition has failed.
