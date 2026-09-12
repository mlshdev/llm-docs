> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/state-swift.enum/inactive](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/state-swift.enum/inactive)

# NSWritingToolsCoordinator.State.inactive (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

A state that indicates Writing Tools isn’t currently performing any work on your view’s content.

## Declaration

```swift
case inactive
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

The coordinator starts in the `inactive` state, and transitions immediately to the [NSWritingToolsCoordinator.State.noninteractive](noninteractive.md) or [NSWritingToolsCoordinator.State.interactiveResting](interactiveresting.md) state when someone chooses an option from the Writing Tools UI. After the coordinator finishes incorporating any changes for the current operation, it returns to the `inactive` state and waits for the person to choose a different option or dismiss the Writing Tools UI.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinator.State.noninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [NSWritingToolsCoordinator.State.interactiveResting](interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.
- [NSWritingToolsCoordinator.State.interactiveStreaming](interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

# NSWritingToolsCoordinatorStateInactive (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

A state that indicates Writing Tools isn’t currently performing any work on your view’s content.

## Declaration

```objectivec
NSWritingToolsCoordinatorStateInactive
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

The coordinator starts in the `inactive` state, and transitions immediately to the [NSWritingToolsCoordinatorStateNoninteractive](noninteractive.md) or [NSWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md) state when someone chooses an option from the Writing Tools UI. After the coordinator finishes incorporating any changes for the current operation, it returns to the `inactive` state and waits for the person to choose a different option or dismiss the Writing Tools UI.

## See Also

### Getting the animation types

- [NSWritingToolsCoordinatorStateNoninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [NSWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.
- [NSWritingToolsCoordinatorStateInteractiveStreaming](interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.
