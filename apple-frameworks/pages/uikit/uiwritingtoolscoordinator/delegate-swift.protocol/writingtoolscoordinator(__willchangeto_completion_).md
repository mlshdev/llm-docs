> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:willchangeto:completion:)](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:willchangeto:completion:))

# writingToolsCoordinator(\_:willChangeTo:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Notifies your delegate of relevant state changes when Writing Tools is running in your view.

## Declaration

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, willChangeTo newState: UIWritingToolsCoordinator.State, completion: @escaping @Sendable () -> Void)
```

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, willChangeTo newState: UIWritingToolsCoordinator.State) async
```

## Parameters

- `writingToolsCoordinator`: The coordinator object providing information to your custom view.
- `completion`: A handler to execute when your delegate finishes processing the change of state. The handler has no parameters or return value. You must call this handler at some point during the implementation of your method.

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

Use state transitions to perform actions related to your view or text storage. When Writing Tools is active, it updates its state to indicate what task it’s currently performing. Writing Tools starts in the [UIWritingToolsCoordinator.State.inactive](../state-swift.enum/inactive.md) state and moves to other states as it presents UI and starts interacting with your view’s content. For example, it moves to the [UIWritingToolsCoordinator.State.interactiveStreaming](../state-swift.enum/interactivestreaming.md) state when it’s making changes to your view’s text storage.

# writingToolsCoordinator:willChangeToState:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Notifies your delegate of relevant state changes when Writing Tools is running in your view.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(UIWritingToolsCoordinator *) writingToolsCoordinator willChangeToState:(UIWritingToolsCoordinatorState) newState completion:(void (^)()) completion;
```

## Parameters

- `writingToolsCoordinator`: The coordinator object providing information to your custom view.
- `completion`: A handler to execute when your delegate finishes processing the change of state. The handler has no parameters or return value. You must call this handler at some point during the implementation of your method.

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

Use state transitions to perform actions related to your view or text storage. When Writing Tools is active, it updates its state to indicate what task it’s currently performing. Writing Tools starts in the [UIWritingToolsCoordinatorStateInactive](../state-swift.enum/inactive.md) state and moves to other states as it presents UI and starts interacting with your view’s content. For example, it moves to the [UIWritingToolsCoordinatorStateInteractiveStreaming](../state-swift.enum/interactivestreaming.md) state when it’s making changes to your view’s text storage.
