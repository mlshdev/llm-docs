> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinator/animatealongsidetransition(in:animation:completion:)](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinator/animatealongsidetransition(in:animation:completion:))

# animateAlongsideTransition(in:animation:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Runs the specified animations in a view that’s outside of the designated container view.

## Declaration

```swift
func animateAlongsideTransition(in view: UIView?, animation: ((any UIViewControllerTransitionCoordinatorContext) -> Void)?, completion: ((any UIViewControllerTransitionCoordinatorContext) -> Void)? = nil) -> Bool
```

## Parameters

- `view`: The view (or one of its ancestors) in which the specified animations take place. This parameter must not be `nil`.
- `animation`: A block containing the animations you want to perform. These animations run in the same context as the transition animations and therefore have the same default attributes. You may specify `nil` for this parameter.

  The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).
- `completion`: The block of code to execute after the transition finishes. You may specify `nil` for this parameter. The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified animation is successfully queued to run; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to perform animations that aren’t handled by the animator objects themselves. The animations you specify in the `animation` parameter must all take place in a view descended from the view you specify in the `view` parameter.

The animations in the `animation` parameter are normally performed concurrently with the view controller transition animations. That behavior applies when the animator object’s [animateTransition(using:)](../uiviewcontrolleranimatedtransitioning/animatetransition%28using_%29.md) method is implemented using [UIView](../uiview.md)-based animations. If the animator object uses Core Animation to animate the layer contents directly, your animations are run shortly after the animateTransition: method returns.

This method returns [false](https://developer.apple.com/documentation/swift/false) when the block in the `animation` parameter can’t be queued to run. The completion block can still run even when this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Responding to view controller transition progress

- [animate(alongsideTransition:completion:)](animate%28alongsidetransition_completion_%29.md): Runs the specified animations at the same time as the view controller transition animations.
- [notifyWhenInteractionChanges(\_:)](notifywheninteractionchanges%28__%29.md): Registers a block to be executed when a transition changes from interactive to non-interactive.
- [notifyWhenInteractionEnds(\_:)](notifywheninteractionends%28__%29.md): Deprecated. Registers a block to be executed when a transition changes from interactive to non-interactive.

# animateAlongsideTransitionInView:animation:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Runs the specified animations in a view that’s outside of the designated container view.

## Declaration

```objectivec
- (BOOL) animateAlongsideTransitionInView:(UIView *) view animation:(void (^)(id<UIViewControllerTransitionCoordinatorContext>context)) animation completion:(void (^)(id<UIViewControllerTransitionCoordinatorContext>context)) completion;
```

## Parameters

- `view`: The view (or one of its ancestors) in which the specified animations take place. This parameter must not be `nil`.
- `animation`: A block containing the animations you want to perform. These animations run in the same context as the transition animations and therefore have the same default attributes. You may specify `nil` for this parameter.

  The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).
- `completion`: The block of code to execute after the transition finishes. You may specify `nil` for this parameter. The block has no return value and takes the following parameter:

  - **context**: The contextual information for performing the animations. Use this object to get the animation-related information. For more information, see [UIViewControllerTransitionCoordinatorContext](../uiviewcontrollertransitioncoordinatorcontext.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified animation is successfully queued to run; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to perform animations that aren’t handled by the animator objects themselves. The animations you specify in the `animation` parameter must all take place in a view descended from the view you specify in the `view` parameter.

The animations in the `animation` parameter are normally performed concurrently with the view controller transition animations. That behavior applies when the animator object’s [animateTransition:](../uiviewcontrolleranimatedtransitioning/animatetransition%28using_%29.md) method is implemented using [UIView](../uiview.md)-based animations. If the animator object uses Core Animation to animate the layer contents directly, your animations are run shortly after the animateTransition: method returns.

This method returns [false](https://developer.apple.com/documentation/swift/false) when the block in the `animation` parameter can’t be queued to run. The completion block can still run even when this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Responding to view controller transition progress

- [animateAlongsideTransition:completion:](animate%28alongsidetransition_completion_%29.md): Runs the specified animations at the same time as the view controller transition animations.
- [notifyWhenInteractionChangesUsingBlock:](notifywheninteractionchanges%28__%29.md): Registers a block to be executed when a transition changes from interactive to non-interactive.
- [notifyWhenInteractionEndsUsingBlock:](notifywheninteractionends%28__%29.md): Deprecated. Registers a block to be executed when a transition changes from interactive to non-interactive.
