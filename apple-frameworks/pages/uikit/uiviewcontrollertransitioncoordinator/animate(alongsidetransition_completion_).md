> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinator/animate(alongsidetransition:completion:)](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinator/animate(alongsidetransition:completion:))

# animate(alongsideTransition:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Runs the specified animations at the same time as the view controller transition animations.

## Declaration

```swift
func animate(alongsideTransition animation: ((any UIViewControllerTransitionCoordinatorContext) -> Void)?, completion: ((any UIViewControllerTransitionCoordinatorContext) -> Void)? = nil) -> Bool
```

## Parameters

- `animation`: A block containing the animations you want to perform. These animations run in the same context as the transition animations and therefore have the same default attributes. You may specify `nil` for this parameter.

  The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information, including the container view in which to run your animations. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).

  The animation you specify must take place in a view descended from the container view.
- `completion`: The block of code to execute after the transition finishes. You may specify `nil` for this parameter. The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information, including the container view in which to run your animations. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the animations were successfully queued to run or [false](https://developer.apple.com/documentation/swift/false) if they were not.

<a id="Discussion"></a>

## Discussion

Use this method to perform animations that aren’t handled by the animator objects themselves. All of the animations you specify must occur inside the animation context’s container view (or one of its descendants). Use the [containerView](../uiviewcontrollertransitioncoordinatorcontext/containerview.md) property of the context object to get the container view. To perform animations in a view that doesn’t descend from the container view, use the [animateAlongsideTransition(in:animation:completion:)](animatealongsidetransition%28in_animation_completion_%29.md) method instead.

The animations in the `animation` parameter are normally performed concurrently with the view controller transition animations. That behavior applies when the animator object’s [animateTransition(using:)](../uiviewcontrolleranimatedtransitioning/animatetransition%28using_%29.md) method is implemented using [UIView](../uiview.md)-based animations. If the animator object uses Core Animation to animate the layer contents directly, your animations are run shortly after the animateTransition: method returns.

This method returns [false](https://developer.apple.com/documentation/swift/false) when the block in the `animation` parameter can’t be queued to run. The completion block can still run even when this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Responding to view controller transition progress

- [animateAlongsideTransition(in:animation:completion:)](animatealongsidetransition%28in_animation_completion_%29.md): Runs the specified animations in a view that’s outside of the designated container view.
- [notifyWhenInteractionChanges(\_:)](notifywheninteractionchanges%28__%29.md): Registers a block to be executed when a transition changes from interactive to non-interactive.
- [notifyWhenInteractionEnds(\_:)](notifywheninteractionends%28__%29.md): Deprecated. Registers a block to be executed when a transition changes from interactive to non-interactive.

# animateAlongsideTransition:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Runs the specified animations at the same time as the view controller transition animations.

## Declaration

```objectivec
- (BOOL) animateAlongsideTransition:(void (^)(id<UIViewControllerTransitionCoordinatorContext>context)) animation completion:(void (^)(id<UIViewControllerTransitionCoordinatorContext>context)) completion;
```

## Parameters

- `animation`: A block containing the animations you want to perform. These animations run in the same context as the transition animations and therefore have the same default attributes. You may specify `nil` for this parameter.

  The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information, including the container view in which to run your animations. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).

  The animation you specify must take place in a view descended from the container view.
- `completion`: The block of code to execute after the transition finishes. You may specify `nil` for this parameter. The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information, including the container view in which to run your animations. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the animations were successfully queued to run or [false](https://developer.apple.com/documentation/swift/false) if they were not.

<a id="Discussion"></a>

## Discussion

Use this method to perform animations that aren’t handled by the animator objects themselves. All of the animations you specify must occur inside the animation context’s container view (or one of its descendants). Use the [containerView](../uiviewcontrollertransitioncoordinatorcontext/containerview.md) property of the context object to get the container view. To perform animations in a view that doesn’t descend from the container view, use the [animateAlongsideTransitionInView:animation:completion:](animatealongsidetransition%28in_animation_completion_%29.md) method instead.

The animations in the `animation` parameter are normally performed concurrently with the view controller transition animations. That behavior applies when the animator object’s [animateTransition:](../uiviewcontrolleranimatedtransitioning/animatetransition%28using_%29.md) method is implemented using [UIView](../uiview.md)-based animations. If the animator object uses Core Animation to animate the layer contents directly, your animations are run shortly after the animateTransition: method returns.

This method returns [false](https://developer.apple.com/documentation/swift/false) when the block in the `animation` parameter can’t be queued to run. The completion block can still run even when this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Responding to view controller transition progress

- [animateAlongsideTransitionInView:animation:completion:](animatealongsidetransition%28in_animation_completion_%29.md): Runs the specified animations in a view that’s outside of the designated container view.
- [notifyWhenInteractionChangesUsingBlock:](notifywheninteractionchanges%28__%29.md): Registers a block to be executed when a transition changes from interactive to non-interactive.
- [notifyWhenInteractionEndsUsingBlock:](notifywheninteractionends%28__%29.md): Deprecated. Registers a block to be executed when a transition changes from interactive to non-interactive.
