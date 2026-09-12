> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:willchangeto:completion:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:willchangeto:completion:))

# writingToolsCoordinator(\_:willChangeTo:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Notifies your delegate of relevant state changes when Writing Tools is running in your view.

## Declaration

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, willChangeTo newState: NSWritingToolsCoordinator.State, completion: @escaping @Sendable () -> Void)
```

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, willChangeTo newState: NSWritingToolsCoordinator.State) async
```

## Parameters

- `writingToolsCoordinator`: The coordinator object providing information to your custom view.
- `completion`: A handler to execute when your delegate finishes processing the change of state. The handler has no parameters or return value. You must call this handler at some point during the implementation of your method.

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Use state transitions to perform actions related to your view or text storage. When Writing Tools is active, it updates its state to indicate what task it’s currently performing. Writing Tools starts in the [NSWritingToolsCoordinator.State.inactive](../state-swift.enum/inactive.md) state and moves to other states as it presents UI and starts interacting with your view’s content. For example, it moves to the [NSWritingToolsCoordinator.State.interactiveResting](../state-swift.enum/interactiveresting.md) state when it’s making changes to your view’s text storage.

# writingToolsCoordinator:willChangeToState:completion: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Notifies your delegate of relevant state changes when Writing Tools is running in your view.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(NSWritingToolsCoordinator *) writingToolsCoordinator willChangeToState:(NSWritingToolsCoordinatorState) newState completion:(void (^)()) completion;
```

## Parameters

- `writingToolsCoordinator`: The coordinator object providing information to your custom view.
- `completion`: A handler to execute when your delegate finishes processing the change of state. The handler has no parameters or return value. You must call this handler at some point during the implementation of your method.

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Use state transitions to perform actions related to your view or text storage. When Writing Tools is active, it updates its state to indicate what task it’s currently performing. Writing Tools starts in the [NSWritingToolsCoordinatorStateInactive](../state-swift.enum/inactive.md) state and moves to other states as it presents UI and starts interacting with your view’s content. For example, it moves to the [NSWritingToolsCoordinatorStateInteractiveResting](../state-swift.enum/interactiveresting.md) state when it’s making changes to your view’s text storage.
