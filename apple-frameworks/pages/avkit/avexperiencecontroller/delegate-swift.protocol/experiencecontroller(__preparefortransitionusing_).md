> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:preparefortransitionusing:)](https://developer.apple.com/documentation/avkit/avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:preparefortransitionusing:))

# experienceController(\_:prepareForTransitionUsing:)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Tells the delegate that the system is preparing for a transition.

## Declaration

```swift
@MainActor func experienceController(_ controller: AVExperienceController, prepareForTransitionUsing context: AVExperienceController.TransitionContext) async
```

## Parameters

- `controller`: The `AVExperienceController`.
- `context`: Contains information about the transition.

<a id="Discussion"></a>

## Discussion

Implement this method to prepare the app’s state for the [toExperience](../transitioncontext/toexperience.md). This may include showing or hiding view controllers, putting the player view controller in the view hierarchy, or any other asynchronous work required for the transition. This is the last chance to update [configuration](../configuration-swift.property.md) before the transition begins.

## See Also

### Responding to experience changes

- [experienceController(\_:didChangeAvailableExperiences:)](experiencecontroller%28__didchangeavailableexperiences_%29.md): Tells the delegate when the available experiences change.
- [experienceController(\_:didChangeTransitionContext:)](experiencecontroller%28__didchangetransitioncontext_%29.md): Tells the delegate when the transition context changes during a transition.
- [AVExperienceController.TransitionContext](../transitioncontext.md): The state of the transition that the system provides to the delegate object.
