> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/state-swift.enum/interactivestreaming](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/state-swift.enum/interactivestreaming)

# UIWritingToolsCoordinator.State.interactiveStreaming (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

## Declaration

```swift
case interactiveStreaming
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

The coordinator transitions swiftly from the [UIWritingToolsCoordinator.State.interactiveResting](interactiveresting.md) state to this state at the start of an operation. In this state, the coordinator submits the request for processing and delivers the results back to your view. When the coordinator finishes delivering the results, it transitions back to the [UIWritingToolsCoordinator.State.interactiveResting](interactiveresting.md) state.

## See Also

### Getting the animation types

- [UIWritingToolsCoordinator.State.inactive](inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [UIWritingToolsCoordinator.State.noninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [UIWritingToolsCoordinator.State.interactiveResting](interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.

# UIWritingToolsCoordinatorStateInteractiveStreaming (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

## Declaration

```objectivec
UIWritingToolsCoordinatorStateInteractiveStreaming
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

The coordinator transitions swiftly from the [UIWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md) state to this state at the start of an operation. In this state, the coordinator submits the request for processing and delivers the results back to your view. When the coordinator finishes delivering the results, it transitions back to the [UIWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md) state.

## See Also

### Getting the animation types

- [UIWritingToolsCoordinatorStateInactive](inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [UIWritingToolsCoordinatorStateNoninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [UIWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.
