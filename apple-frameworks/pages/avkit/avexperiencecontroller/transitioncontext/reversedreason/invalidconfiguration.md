> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/reversedreason/invalidconfiguration

# AVExperienceController.TransitionContext.ReversedReason.invalidConfiguration

**Framework:** AVKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

A transition could not be completed because some required configuration was unavailable.

## Declaration

```swift
case invalidConfiguration
```

<a id="Discussion"></a>

## Discussion

This can happen if AVPlayerViewController has been freed.

## See Also

### Reasons

- [AVExperienceController.TransitionContext.ReversedReason.invalidExperience](invalidexperience.md): A transition was attempted with an experience that cannot be transitioned to.
- [AVExperienceController.TransitionContext.ReversedReason.transitionCancelled](transitioncancelled.md): A transition in progress has been cancelled.
- [AVExperienceController.TransitionContext.ReversedReason.transitionFailed](transitionfailed.md): A transition has failed.
- [AVExperienceController.TransitionContext.ReversedReason.transitionInProgress](transitioninprogress.md): A transition was attempted while another transition was in progress.
