> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/children](https://developer.apple.com/documentation/uikit/uiviewcontroller/children)

# children (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of view controllers that are children of the current view controller.

## Declaration

```swift
var children: [UIViewController] { get }
```

<a id="Discussion"></a>

## Discussion

This property does not include any presented view controllers. This property is only intended to be read by an implementation of a custom container view controller.

## See Also

### Managing child view controllers in a custom container

- [addChild(\_:)](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the view controller from its parent.
- [transition(from:to:duration:options:animations:completion:)](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition(\_:animated:)](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition()](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [hierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.

# childViewControllers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An array of view controllers that are children of the current view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof UIViewController *> * childViewControllers;
```

<a id="Discussion"></a>

## Discussion

This property does not include any presented view controllers. This property is only intended to be read by an implementation of a custom container view controller.

## See Also

### Managing child view controllers in a custom container

- [addChildViewController:](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the view controller from its parent.
- [transitionFromViewController:toViewController:duration:options:animations:completion:](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [shouldAutomaticallyForwardAppearanceMethods](shouldautomaticallyforwardappearancemethods.md): Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.
- [beginAppearanceTransition:animated:](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [UIViewControllerHierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.
