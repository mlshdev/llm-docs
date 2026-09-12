> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason/invalidexperience](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason/invalidexperience)

# AVExperienceController.TransitionContext.ReversedReason.invalidExperience

**Framework:** AVKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

A transition was attempted with an experience that cannot be transitioned to.

## Declaration

```swift
case invalidExperience
```

<a id="Discussion"></a>

## Discussion

Possible response is to consult `AVExperienceController.experience` and `AVExperienceController.availableExperiences` to choose a different experience to transition to.

## See Also

### Reasons

- [AVExperienceController.TransitionContext.ReversedReason.invalidConfiguration](invalidconfiguration.md): A transition could not be completed because some required configuration was unavailable.
- [AVExperienceController.TransitionContext.ReversedReason.transitionCancelled](transitioncancelled.md): A transition in progress has been cancelled.
- [AVExperienceController.TransitionContext.ReversedReason.transitionFailed](transitionfailed.md): A transition has failed.
- [AVExperienceController.TransitionContext.ReversedReason.transitionInProgress](transitioninprogress.md): A transition was attempted while another transition was in progress.
