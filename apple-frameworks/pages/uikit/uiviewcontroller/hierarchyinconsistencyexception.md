> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/hierarchyinconsistencyexception](https://developer.apple.com/documentation/uikit/uiviewcontroller/hierarchyinconsistencyexception)

# hierarchyInconsistencyException (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Raised if the view controller hierarchy is inconsistent with the view hierarchy.

## Declaration

```swift
class let hierarchyInconsistencyException: NSExceptionName
```

<a id="Discussion"></a>

## Discussion

When a view controller’s view is added to the view hierarchy, the system walks up the view hierarchy to find the first parent view that has a view controller. That view controller must be the parent of the view controller whose view is being added. Otherwise, this exception is raised. This consistency check is also performed when a view controller is added as a child by calling the [addChild(\_:)](addchild%28__%29.md) method.

It is also allowed for a view controller that has no parent to add its view to the view hierarchy. This is generally not recommended, but is useful in some special cases.

## See Also

### Managing child view controllers in a custom container

- [children](children.md): An array of view controllers that are children of the current view controller.
- [addChild(\_:)](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the view controller from its parent.
- [transition(from:to:duration:options:animations:completion:)](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition(\_:animated:)](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition()](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.

# UIViewControllerHierarchyInconsistencyException (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Raised if the view controller hierarchy is inconsistent with the view hierarchy.

## Declaration

```objectivec
extern NSExceptionName const UIViewControllerHierarchyInconsistencyException;
```

<a id="Discussion"></a>

## Discussion

When a view controller’s view is added to the view hierarchy, the system walks up the view hierarchy to find the first parent view that has a view controller. That view controller must be the parent of the view controller whose view is being added. Otherwise, this exception is raised. This consistency check is also performed when a view controller is added as a child by calling the [addChildViewController:](addchild%28__%29.md) method.

It is also allowed for a view controller that has no parent to add its view to the view hierarchy. This is generally not recommended, but is useful in some special cases.

## See Also

### Managing child view controllers in a custom container

- [childViewControllers](children.md): An array of view controllers that are children of the current view controller.
- [addChildViewController:](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the view controller from its parent.
- [transitionFromViewController:toViewController:duration:options:animations:completion:](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition:animated:](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
