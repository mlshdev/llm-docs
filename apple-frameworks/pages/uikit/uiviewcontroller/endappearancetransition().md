> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/endappearancetransition()](https://developer.apple.com/documentation/uikit/uiviewcontroller/endappearancetransition())

# endAppearanceTransition() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells a child controller its appearance has changed.

## Declaration

```swift
func endAppearanceTransition()
```

<a id="Discussion"></a>

## Discussion

If you are implementing a custom container controller, use this method to tell the child that the view transition is complete.

## See Also

### Managing child view controllers in a custom container

- [children](children.md): An array of view controllers that are children of the current view controller.
- [addChild(\_:)](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the view controller from its parent.
- [transition(from:to:duration:options:animations:completion:)](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition(\_:animated:)](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [hierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.

# endAppearanceTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tells a child controller its appearance has changed.

## Declaration

```objectivec
- (void) endAppearanceTransition;
```

<a id="Discussion"></a>

## Discussion

If you are implementing a custom container controller, use this method to tell the child that the view transition is complete.

## See Also

### Managing child view controllers in a custom container

- [childViewControllers](children.md): An array of view controllers that are children of the current view controller.
- [addChildViewController:](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the view controller from its parent.
- [transitionFromViewController:toViewController:duration:options:animations:completion:](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition:animated:](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [UIViewControllerHierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.
