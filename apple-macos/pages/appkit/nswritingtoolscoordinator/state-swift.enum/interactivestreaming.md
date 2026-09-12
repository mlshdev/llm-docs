> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/state-swift.enum/interactivestreaming](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/state-swift.enum/interactivestreaming)

# NSWritingToolsCoordinator.State.interactiveStreaming (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

## Declaration

```swift
case interactiveStreaming
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

The coordinator transitions swiftly from the [NSWritingToolsCoordinator.State.interactiveResting](interactiveresting.md) state to this state at the start of an operation. In this state, the coordinator submits the request for processing and delivers the results back to your view. When the coordinator finishes delivering the results, it transitions back to the [NSWritingToolsCoordinator.State.interactiveResting](interactiveresting.md) state.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinator.State.inactive](inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [NSWritingToolsCoordinator.State.noninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [NSWritingToolsCoordinator.State.interactiveResting](interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.

# NSWritingToolsCoordinatorStateInteractiveStreaming (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

## Declaration

```objectivec
NSWritingToolsCoordinatorStateInteractiveStreaming
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

The coordinator transitions swiftly from the [NSWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md) state to this state at the start of an operation. In this state, the coordinator submits the request for processing and delivers the results back to your view. When the coordinator finishes delivering the results, it transitions back to the [NSWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md) state.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinatorStateInactive](inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [NSWritingToolsCoordinatorStateNoninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [NSWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.
