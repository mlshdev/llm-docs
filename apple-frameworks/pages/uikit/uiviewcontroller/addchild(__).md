> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/addchild(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/addchild(_:))

# addChild(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds the specified view controller as a child of the current view controller.

## Declaration

```swift
func addChild(_ childController: UIViewController)
```

## Parameters

- `childController`: The view controller to be added as a child.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

This method creates a parent-child relationship between the current view controller and the object in the `childController` parameter. This relationship is necessary when embedding the child view controller’s view into the current view controller’s content. If the new child view controller is already the child of a container view controller, it is removed from that container before being added.

This method is only intended to be called by an implementation of a custom container view controller. If you override this method, you must call `super` in your implementation.

## See Also

### Managing child view controllers in a custom container

- [children](children.md): An array of view controllers that are children of the current view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the view controller from its parent.
- [transition(from:to:duration:options:animations:completion:)](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition(\_:animated:)](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition()](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [hierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.

# addChildViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds the specified view controller as a child of the current view controller.

## Declaration

```objectivec
- (void) addChildViewController:(UIViewController *) childController;
```

## Parameters

- `childController`: The view controller to be added as a child.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

This method creates a parent-child relationship between the current view controller and the object in the `childController` parameter. This relationship is necessary when embedding the child view controller’s view into the current view controller’s content. If the new child view controller is already the child of a container view controller, it is removed from that container before being added.

This method is only intended to be called by an implementation of a custom container view controller. If you override this method, you must call `super` in your implementation.

## See Also

### Managing child view controllers in a custom container

- [childViewControllers](children.md): An array of view controllers that are children of the current view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the view controller from its parent.
- [transitionFromViewController:toViewController:duration:options:animations:completion:](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition:animated:](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [UIViewControllerHierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.
