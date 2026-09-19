> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/status-swift.enum/finished(result:)

# AVExperienceController.TransitionContext.Status.finished(result:)

**Framework:** AVKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

Transition finished. Perform cleanup based on result.

## Declaration

```swift
case finished(result: AVExperienceController.TransitionContext.TransitionResult)
```

## See Also

### Statuses

- [AVExperienceController.TransitionContext.Status.preparing](preparing.md): The transition is preparing for `toExperience`.
- [AVExperienceController.TransitionContext.Status.transitioning](transitioning.md): The transition is in progress.
