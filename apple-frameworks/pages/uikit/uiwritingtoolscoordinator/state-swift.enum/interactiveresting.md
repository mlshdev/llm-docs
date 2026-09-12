> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/state-swift.enum/interactiveresting](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/state-swift.enum/interactiveresting)

# UIWritingToolsCoordinator.State.interactiveResting (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A state that indicates Writing Tools is in the resting state for an inline editing experience.

## Declaration

```swift
case interactiveResting
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

When someone initially selects a tool with an interactive experience, the coordinator transitions briefly to this state and starts the operation. The coordinator transitions swiftly to the [UIWritingToolsCoordinator.State.interactiveStreaming](interactivestreaming.md) state when it submits the request and delivers the results to your view. When it finishes delivering the results, it transitions back to the `interactiveResting` state and awaits further commands. If the person accepts the changes or dismisses the Writing Tools UI, the coordinator transitions from this state to the [UIWritingToolsCoordinator.State.inactive](inactive.md) state.

## See Also

### Getting the animation types

- [UIWritingToolsCoordinator.State.inactive](inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [UIWritingToolsCoordinator.State.noninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [UIWritingToolsCoordinator.State.interactiveStreaming](interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

# UIWritingToolsCoordinatorStateInteractiveResting (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A state that indicates Writing Tools is in the resting state for an inline editing experience.

## Declaration

```objectivec
UIWritingToolsCoordinatorStateInteractiveResting
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

When someone initially selects a tool with an interactive experience, the coordinator transitions briefly to this state and starts the operation. The coordinator transitions swiftly to the [UIWritingToolsCoordinatorStateInteractiveStreaming](interactivestreaming.md) state when it submits the request and delivers the results to your view. When it finishes delivering the results, it transitions back to the `interactiveResting` state and awaits further commands. If the person accepts the changes or dismisses the Writing Tools UI, the coordinator transitions from this state to the [UIWritingToolsCoordinatorStateInactive](inactive.md) state.

## See Also

### Getting the animation types

- [UIWritingToolsCoordinatorStateInactive](inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [UIWritingToolsCoordinatorStateNoninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [UIWritingToolsCoordinatorStateInteractiveStreaming](interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.
