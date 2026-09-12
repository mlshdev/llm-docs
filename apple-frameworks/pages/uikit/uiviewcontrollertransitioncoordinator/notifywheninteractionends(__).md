> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinator/notifywheninteractionends(_:)](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinator/notifywheninteractionends(_:))

# notifyWhenInteractionEnds(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Registers a block to be executed when a transition changes from interactive to non-interactive.

## Declaration

```swift
func notifyWhenInteractionEnds(_ handler: @escaping (any UIViewControllerTransitionCoordinatorContext) -> Void)
```

## Parameters

- `handler`: The block to execute when the transition changes from interactive to noninteractive. The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).

<a id="Discussion"></a>

## Discussion

Your block is executed both when the transition completes normally and when the user cancels the transition. In the case where the user cancels the transition, UIKit executes your `context` block, calls the [viewWillDisappear(\_:)](../uiviewcontroller/viewwilldisappear%28__%29.md) method on the presented view controller, and finally calls the [viewWillAppear(\_:)](../uiviewcontroller/viewwillappear%28__%29.md) method on the original view controller to signal that it’s once again visible.

Inside your block, you can get the value of the [isCancelled](../uiviewcontrollertransitioncoordinatorcontext/iscancelled.md) method of the transition coordinator context and use that value to determine the appropriate course of action. For example, if the transition was canceled, you might use this block to remove any extra views that were added to the view hierarchy by a previous call to [animate(alongsideTransition:completion:)](animate%28alongsidetransition_completion_%29.md) or [animateAlongsideTransition(in:animation:completion:)](animatealongsidetransition%28in_animation_completion_%29.md).

You can call this method multiple times to register multiple blocks. All of the registered blocks are executed when the transition state changes.

## See Also

### Responding to view controller transition progress

- [animate(alongsideTransition:completion:)](animate%28alongsidetransition_completion_%29.md): Runs the specified animations at the same time as the view controller transition animations.
- [animateAlongsideTransition(in:animation:completion:)](animatealongsidetransition%28in_animation_completion_%29.md): Runs the specified animations in a view that’s outside of the designated container view.
- [notifyWhenInteractionChanges(\_:)](notifywheninteractionchanges%28__%29.md): Registers a block to be executed when a transition changes from interactive to non-interactive.

# notifyWhenInteractionEndsUsingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Registers a block to be executed when a transition changes from interactive to non-interactive.

## Declaration

```objectivec
- (void) notifyWhenInteractionEndsUsingBlock:(void (^)(id<UIViewControllerTransitionCoordinatorContext>context)) handler;
```

## Parameters

- `handler`: The block to execute when the transition changes from interactive to noninteractive. The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).

<a id="Discussion"></a>

## Discussion

Your block is executed both when the transition completes normally and when the user cancels the transition. In the case where the user cancels the transition, UIKit executes your `context` block, calls the [viewWillDisappear:](../uiviewcontroller/viewwilldisappear%28__%29.md) method on the presented view controller, and finally calls the [viewWillAppear:](../uiviewcontroller/viewwillappear%28__%29.md) method on the original view controller to signal that it’s once again visible.

Inside your block, you can get the value of the [cancelled](../uiviewcontrollertransitioncoordinatorcontext/iscancelled.md) method of the transition coordinator context and use that value to determine the appropriate course of action. For example, if the transition was canceled, you might use this block to remove any extra views that were added to the view hierarchy by a previous call to [animateAlongsideTransition:completion:](animate%28alongsidetransition_completion_%29.md) or [animateAlongsideTransitionInView:animation:completion:](animatealongsidetransition%28in_animation_completion_%29.md).

You can call this method multiple times to register multiple blocks. All of the registered blocks are executed when the transition state changes.

## See Also

### Responding to view controller transition progress

- [animateAlongsideTransition:completion:](animate%28alongsidetransition_completion_%29.md): Runs the specified animations at the same time as the view controller transition animations.
- [animateAlongsideTransitionInView:animation:completion:](animatealongsidetransition%28in_animation_completion_%29.md): Runs the specified animations in a view that’s outside of the designated container view.
- [notifyWhenInteractionChangesUsingBlock:](notifywheninteractionchanges%28__%29.md): Registers a block to be executed when a transition changes from interactive to non-interactive.
