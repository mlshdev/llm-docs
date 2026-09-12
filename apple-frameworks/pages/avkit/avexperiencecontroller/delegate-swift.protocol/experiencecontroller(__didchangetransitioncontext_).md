> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:didchangetransitioncontext:)](https://developer.apple.com/documentation/avkit/avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:didchangetransitioncontext:))

# experienceController(\_:didChangeTransitionContext:)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Tells the delegate when the transition context changes during a transition.

## Declaration

```swift
@MainActor func experienceController(_ controller: AVExperienceController, didChangeTransitionContext context: AVExperienceController.TransitionContext)
```

## Parameters

- `controller`: The experience controller.
- `context`: An structure that contains information about the transition.

<a id="Discussion"></a>

## Discussion

Implement this method to track the transition between experiences.

## See Also

### Responding to experience changes

- [experienceController(\_:didChangeAvailableExperiences:)](experiencecontroller%28__didchangeavailableexperiences_%29.md): Tells the delegate when the available experiences change.
- [experienceController(\_:prepareForTransitionUsing:)](experiencecontroller%28__preparefortransitionusing_%29.md): Tells the delegate that the system is preparing for a transition.
- [AVExperienceController.TransitionContext](../transitioncontext.md): The state of the transition that the system provides to the delegate object.
