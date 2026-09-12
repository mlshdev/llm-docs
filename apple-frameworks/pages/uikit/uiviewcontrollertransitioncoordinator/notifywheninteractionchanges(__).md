> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinator/notifywheninteractionchanges(_:)](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinator/notifywheninteractionchanges(_:))

# notifyWhenInteractionChanges(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Registers a block to be executed when a transition changes from interactive to non-interactive.

## Declaration

```swift
func notifyWhenInteractionChanges(_ handler: @escaping (any UIViewControllerTransitionCoordinatorContext) -> Void)
```

## Parameters

- `handler`: The block to execute when the transition changes from interactive to noninteractive. The block has no return value and takes the following parameter:

<a id="Discussion"></a>

## Discussion

Your handler block is executed any time the transition changes from interactive to noninteractive, including when the transition ends or is canceled. When the user cancels a transition, UIKit executes your context block, calls the [viewWillDisappear(\_:)](../uiviewcontroller/viewwilldisappear%28__%29.md) method on the presented view controller, and finally calls the [viewWillAppear(\_:)](../uiviewcontroller/viewwillappear%28__%29.md) method on the original view controller to signal that it’s once again visible.

Use the [isInteractive](../uiviewcontrollertransitioncoordinatorcontext/isinteractive.md) property of the context object to determine the current interactivity of the transition. You can also use the value of the [isCancelled](../uiviewcontrollertransitioncoordinatorcontext/iscancelled.md) property to determine an appropriate course of action. For example, if the transition was canceled, you might remove any extra views that were added to the view hierarchy by a previous call to [animate(alongsideTransition:completion:)](animate%28alongsidetransition_completion_%29.md) or [animateAlongsideTransition(in:animation:completion:)](animatealongsidetransition%28in_animation_completion_%29.md).

You can call this method multiple times to register multiple blocks. All of the registered blocks are executed when the transition state changes.

## See Also

### Responding to view controller transition progress

- [animate(alongsideTransition:completion:)](animate%28alongsidetransition_completion_%29.md): Runs the specified animations at the same time as the view controller transition animations.
- [animateAlongsideTransition(in:animation:completion:)](animatealongsidetransition%28in_animation_completion_%29.md): Runs the specified animations in a view that’s outside of the designated container view.
- [notifyWhenInteractionEnds(\_:)](notifywheninteractionends%28__%29.md): Deprecated. Registers a block to be executed when a transition changes from interactive to non-interactive.

# notifyWhenInteractionChangesUsingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Registers a block to be executed when a transition changes from interactive to non-interactive.

## Declaration

```objectivec
- (void) notifyWhenInteractionChangesUsingBlock:(void (^)(id<UIViewControllerTransitionCoordinatorContext>context)) handler;
```

## Parameters

- `handler`: The block to execute when the transition changes from interactive to noninteractive. The block has no return value and takes the following parameter:

<a id="Discussion"></a>

## Discussion

Your handler block is executed any time the transition changes from interactive to noninteractive, including when the transition ends or is canceled. When the user cancels a transition, UIKit executes your context block, calls the [viewWillDisappear:](../uiviewcontroller/viewwilldisappear%28__%29.md) method on the presented view controller, and finally calls the [viewWillAppear:](../uiviewcontroller/viewwillappear%28__%29.md) method on the original view controller to signal that it’s once again visible.

Use the [interactive](../uiviewcontrollertransitioncoordinatorcontext/isinteractive.md) property of the context object to determine the current interactivity of the transition. You can also use the value of the [cancelled](../uiviewcontrollertransitioncoordinatorcontext/iscancelled.md) property to determine an appropriate course of action. For example, if the transition was canceled, you might remove any extra views that were added to the view hierarchy by a previous call to [animateAlongsideTransition:completion:](animate%28alongsidetransition_completion_%29.md) or [animateAlongsideTransitionInView:animation:completion:](animatealongsidetransition%28in_animation_completion_%29.md).

You can call this method multiple times to register multiple blocks. All of the registered blocks are executed when the transition state changes.

## See Also

### Responding to view controller transition progress

- [animateAlongsideTransition:completion:](animate%28alongsidetransition_completion_%29.md): Runs the specified animations at the same time as the view controller transition animations.
- [animateAlongsideTransitionInView:animation:completion:](animatealongsidetransition%28in_animation_completion_%29.md): Runs the specified animations in a view that’s outside of the designated container view.
- [notifyWhenInteractionEndsUsingBlock:](notifywheninteractionends%28__%29.md): Deprecated. Registers a block to be executed when a transition changes from interactive to non-interactive.
