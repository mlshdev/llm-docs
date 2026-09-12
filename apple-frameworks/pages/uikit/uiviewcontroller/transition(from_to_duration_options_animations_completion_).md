> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transition(from:to:duration:options:animations:completion:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/transition(from:to:duration:options:animations:completion:))

# transition(from:to:duration:options:animations:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Transitions between two of the view controller’s child view controllers.

## Declaration

```swift
func transition(from fromViewController: UIViewController, to toViewController: UIViewController, duration: TimeInterval, options: UIView.AnimationOptions = [], animations: (() -> Void)?, completion: ((Bool) -> Void)? = nil)
```

## Parameters

- `fromViewController`: A view controller whose view is currently visible in the parent’s view hierarchy.
- `toViewController`: A child view controller whose view is not currently in the view hierarchy.
- `duration`: The total duration of the animations, in seconds. If you pass zero, the changes are made without animating them.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIView.AnimationOptions](../uiview/animationoptions.md).
- `animations`: A block object containing the changes to commit to the views. Here you programmatically change any animatable properties of the views in your view hierarchy. This block takes no parameters and has no return value. This parameter must not be `NULL`.
- `completion`: A block to be called when the animation completes.

  The block takes the following parameters:

  - ***finished***: [true](https://developer.apple.com/documentation/swift/true) if the animation finished; [false](https://developer.apple.com/documentation/swift/false) if it was skipped.

<a id="Discussion"></a>

## Discussion

This method adds the second view controller’s view to the view hierarchy and then performs the animations defined in your animations block. After the animation completes, it removes the first view controller’s view from the view hierarchy.

This method is only intended to be called by an implementation of a custom container view controller. If you override this method, you must call `super` in your implementation.

## See Also

### Managing child view controllers in a custom container

- [children](children.md): An array of view controllers that are children of the current view controller.
- [addChild(\_:)](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the view controller from its parent.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition(\_:animated:)](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition()](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [hierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.

# transitionFromViewController:toViewController:duration:options:animations:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Transitions between two of the view controller’s child view controllers.

## Declaration

```objectivec
- (void) transitionFromViewController:(UIViewController *) fromViewController toViewController:(UIViewController *) toViewController duration:(NSTimeInterval) duration options:(UIViewAnimationOptions) options animations:(void (^)()) animations completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `fromViewController`: A view controller whose view is currently visible in the parent’s view hierarchy.
- `toViewController`: A child view controller whose view is not currently in the view hierarchy.
- `duration`: The total duration of the animations, in seconds. If you pass zero, the changes are made without animating them.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIViewAnimationOptions](../uiview/animationoptions.md).
- `animations`: A block object containing the changes to commit to the views. Here you programmatically change any animatable properties of the views in your view hierarchy. This block takes no parameters and has no return value. This parameter must not be `NULL`.
- `completion`: A block to be called when the animation completes.

  The block takes the following parameters:

  - ***finished***: [true](https://developer.apple.com/documentation/swift/true) if the animation finished; [false](https://developer.apple.com/documentation/swift/false) if it was skipped.

<a id="Discussion"></a>

## Discussion

This method adds the second view controller’s view to the view hierarchy and then performs the animations defined in your animations block. After the animation completes, it removes the first view controller’s view from the view hierarchy.

This method is only intended to be called by an implementation of a custom container view controller. If you override this method, you must call `super` in your implementation.

## See Also

### Managing child view controllers in a custom container

- [childViewControllers](children.md): An array of view controllers that are children of the current view controller.
- [addChildViewController:](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the view controller from its parent.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition:animated:](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [UIViewControllerHierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.
