> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/shouldautomaticallyforwardappearancemethods](https://developer.apple.com/documentation/uikit/uiviewcontroller/shouldautomaticallyforwardappearancemethods)

# shouldAutomaticallyForwardAppearanceMethods (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.

## Declaration

```swift
var shouldAutomaticallyForwardAppearanceMethods: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if appearance methods are forwarded or [false](https://developer.apple.com/documentation/swift/false) if they are not.

<a id="Discussion"></a>

## Discussion

This method is called to determine whether to automatically forward appearance-related containment callbacks to child view controllers.

The default implementation returns [true](https://developer.apple.com/documentation/swift/true). Subclasses of the [UIViewController](../uiviewcontroller.md) class that implement containment logic may override this method to control how these methods are forwarded. If you override this method and return [false](https://developer.apple.com/documentation/swift/false), you are responsible for telling the child when its views are going to appear or disappear. You do this by calling the child view controller’s [beginAppearanceTransition(\_:animated:)](beginappearancetransition%28__animated_%29.md) and [endAppearanceTransition()](endappearancetransition%28%29.md) methods.

## See Also

### Managing child view controllers in a custom container

- [children](children.md): An array of view controllers that are children of the current view controller.
- [addChild(\_:)](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParent()](removefromparent%28%29.md): Removes the view controller from its parent.
- [transition(from:to:duration:options:animations:completion:)](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [beginAppearanceTransition(\_:animated:)](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition()](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [hierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.

# shouldAutomaticallyForwardAppearanceMethods (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether appearance methods are forwarded to child view controllers.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldAutomaticallyForwardAppearanceMethods;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if appearance methods are forwarded or [false](https://developer.apple.com/documentation/swift/false) if they are not.

<a id="Discussion"></a>

## Discussion

This method is called to determine whether to automatically forward appearance-related containment callbacks to child view controllers.

The default implementation returns [true](https://developer.apple.com/documentation/swift/true). Subclasses of the [UIViewController](../uiviewcontroller.md) class that implement containment logic may override this method to control how these methods are forwarded. If you override this method and return [false](https://developer.apple.com/documentation/swift/false), you are responsible for telling the child when its views are going to appear or disappear. You do this by calling the child view controller’s [beginAppearanceTransition:animated:](beginappearancetransition%28__animated_%29.md) and [endAppearanceTransition](endappearancetransition%28%29.md) methods.

## See Also

### Managing child view controllers in a custom container

- [childViewControllers](children.md): An array of view controllers that are children of the current view controller.
- [addChildViewController:](addchild%28__%29.md): Adds the specified view controller as a child of the current view controller.
- [removeFromParentViewController](removefromparent%28%29.md): Removes the view controller from its parent.
- [transitionFromViewController:toViewController:duration:options:animations:completion:](transition%28from_to_duration_options_animations_completion_%29.md): Transitions between two of the view controller’s child view controllers.
- [beginAppearanceTransition:animated:](beginappearancetransition%28__animated_%29.md): Tells a child controller its appearance is about to change.
- [endAppearanceTransition](endappearancetransition%28%29.md): Tells a child controller its appearance has changed.
- [UIViewControllerHierarchyInconsistencyException](hierarchyinconsistencyexception.md): Raised if the view controller hierarchy is inconsistent with the view hierarchy.
