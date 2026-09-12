> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/state-swift.enum/inactive](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/state-swift.enum/inactive)

# UIWritingToolsCoordinator.State.inactive (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A state that indicates Writing Tools isn’t currently performing any work on your view’s content.

## Declaration

```swift
case inactive
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

The coordinator starts in the `inactive` state, and transitions immediately to the [UIWritingToolsCoordinator.State.noninteractive](noninteractive.md) or [UIWritingToolsCoordinator.State.interactiveResting](interactiveresting.md) state when someone chooses an option from the Writing Tools UI. The coordinator returns to the `inactive` state when the person accepts the changes or dismisses the Writing Tools UI.

## See Also

### Getting the animation types

- [UIWritingToolsCoordinator.State.noninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [UIWritingToolsCoordinator.State.interactiveResting](interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.
- [UIWritingToolsCoordinator.State.interactiveStreaming](interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.

# UIWritingToolsCoordinatorStateInactive (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A state that indicates Writing Tools isn’t currently performing any work on your view’s content.

## Declaration

```objectivec
UIWritingToolsCoordinatorStateInactive
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

The coordinator starts in the `inactive` state, and transitions immediately to the [UIWritingToolsCoordinatorStateNoninteractive](noninteractive.md) or [UIWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md) state when someone chooses an option from the Writing Tools UI. The coordinator returns to the `inactive` state when the person accepts the changes or dismisses the Writing Tools UI.

## See Also

### Getting the animation types

- [UIWritingToolsCoordinatorStateNoninteractive](noninteractive.md): A state that indicates Writing Tools is handling interactions in the system UI, instead of in your view.
- [UIWritingToolsCoordinatorStateInteractiveResting](interactiveresting.md): A state that indicates Writing Tools is in the resting state for an inline editing experience.
- [UIWritingToolsCoordinatorStateInteractiveStreaming](interactivestreaming.md): A state that indicates Writing Tools is processing a request and incorporating changes interactively into your view.
