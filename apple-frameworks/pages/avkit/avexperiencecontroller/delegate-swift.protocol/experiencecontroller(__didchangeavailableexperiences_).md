> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:didchangeavailableexperiences:)](https://developer.apple.com/documentation/avkit/avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:didchangeavailableexperiences:))

# experienceController(\_:didChangeAvailableExperiences:)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Tells the delegate when the available experiences change.

## Declaration

```swift
@MainActor func experienceController(_ controller: AVExperienceController, didChangeAvailableExperiences availableExperiences: AVExperienceController.Experiences)
```

## Parameters

- `controller`: The experience controller.
- `availableExperiences`: The current value of [availableExperiences](../availableexperiences.md).

<a id="Discussion"></a>

## Discussion

Use this callback to hide or show interface elements based on which experiences are possible.

## See Also

### Responding to experience changes

- [experienceController(\_:prepareForTransitionUsing:)](experiencecontroller%28__preparefortransitionusing_%29.md): Tells the delegate that the system is preparing for a transition.
- [experienceController(\_:didChangeTransitionContext:)](experiencecontroller%28__didchangetransitioncontext_%29.md): Tells the delegate when the transition context changes during a transition.
- [AVExperienceController.TransitionContext](../transitioncontext.md): The state of the transition that the system provides to the delegate object.
