> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/beginappearancetransition(_:animated:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/beginappearancetransition(_:animated:))

# beginAppearanceTransition(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells a child controller its appearance is about to change.

## Declaration

```swift
func beginAppearanceTransition(_ isAppearing: Bool, animated: Bool)
```

## Parameters

- `isAppearing`: [true](https://developer.apple.com/documentation/swift/true) if the child view controller’s view is about to be added to the view hierarchy, [false](https://developer.apple.com/documentation/swift/false) if it is being removed.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the transition is being animated.

<a id="Discussion"></a>

## Discussion

If you are implementing a custom container controller, use this method to tell the child that its views are about to appear or disappear. Do not invoke [viewWillAppear(\_:)](viewwillappear%28__%29.md), [viewWillDisappear(\_:)](viewwilldisappear%28__%29.md), [viewDidAppear(\_:)](viewdidappear%28__%29.md), or [viewDidDisappear(\_:)](viewdiddisappear%28__%29.md) directly.

## See Also

### Managing child view controllers in a custom container

- [children](children.md): An array of view controllers that are children of the current view controller.
- [addChild(\_:)](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the view controller from its parent.
- [transition(from:to:duration:options:animations:completion:)](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [endAppearanceTransition()](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [hierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.

# beginAppearanceTransition:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tells a child controller its appearance is about to change.

## Declaration

```objectivec
- (void) beginAppearanceTransition:(BOOL) isAppearing animated:(BOOL) animated;
```

## Parameters

- `isAppearing`: [true](https://developer.apple.com/documentation/swift/true) if the child view controller’s view is about to be added to the view hierarchy, [false](https://developer.apple.com/documentation/swift/false) if it is being removed.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the transition is being animated.

<a id="Discussion"></a>

## Discussion

If you are implementing a custom container controller, use this method to tell the child that its views are about to appear or disappear. Do not invoke [viewWillAppear:](viewwillappear%28__%29.md), [viewWillDisappear:](viewwilldisappear%28__%29.md), [viewDidAppear:](viewdidappear%28__%29.md), or [viewDidDisappear:](viewdiddisappear%28__%29.md) directly.

## See Also

### Managing child view controllers in a custom container

- [childViewControllers](children.md): An array of view controllers that are children of the current view controller.
- [addChildViewController:](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the view controller from its parent.
- [transitionFromViewController:toViewController:duration:options:animations:completion:](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [endAppearanceTransition](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [UIViewControllerHierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.
