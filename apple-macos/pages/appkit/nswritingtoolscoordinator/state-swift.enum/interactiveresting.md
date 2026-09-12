> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/state-swift.enum/interactiveresting](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/state-swift.enum/interactiveresting)

# NSWritingToolsCoordinator.State.interactiveResting (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

A state that indicates Writing Tools is in the resting state for an inline editing experience.

## Declaration

```swift
case interactiveResting
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

When someone initially selects a tool with an interactive experience, the coordinator transitions briefly to this state and starts the operation. The coordinator transitions swiftly to the [NSWritingToolsCoordinator.State.interactiveStreaming](interactivestreaming.md) state when it submits the request and delivers the results to your view. When it finishes delivering the results, it transitions back to the `interactiveResting` state and awaits further commands. If the person accepts the changes or dismisses the Writing Tools UI, the coordinator transitions from this state to the [NSWritingToolsCoordinator.State.inactive](inactive.md) state.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinator.State.inactive](inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [NSWritingToolsCoordinator.State.noninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [NSWritingToolsCoordinator.State.interactiveStreaming](interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

# NSWritingToolsCoordinatorStateInteractiveResting (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

A state that indicates Writing Tools is in the resting state for an inline editing experience.

## Declaration

```objectivec
NSWritingToolsCoordinatorStateInteractiveResting
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

When someone initially selects a tool with an interactive experience, the coordinator transitions briefly to this state and starts the operation. The coordinator transitions swiftly to the [NSWritingToolsCoordinatorStateInteractiveStreaming](interactivestreaming.md) state when it submits the request and delivers the results to your view. When it finishes delivering the results, it transitions back to the `interactiveResting` state and awaits further commands. If the person accepts the changes or dismisses the Writing Tools UI, the coordinator transitions from this state to the [NSWritingToolsCoordinatorStateInactive](inactive.md) state.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinatorStateInactive](inactive.md): A state that indicates Writing Tools isn’t currently performing any work on your view’s content.
- [NSWritingToolsCoordinatorStateNoninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [NSWritingToolsCoordinatorStateInteractiveStreaming](interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.
