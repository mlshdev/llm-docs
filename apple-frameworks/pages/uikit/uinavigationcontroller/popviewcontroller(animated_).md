> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/popviewcontroller(animated:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/popviewcontroller(animated:))

# popViewController(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pops the top view controller from the navigation stack and updates the display.

## Declaration

```swift
func popViewController(animated: Bool) -> UIViewController?
```

## Parameters

- `animated`: Set this value to [true](https://developer.apple.com/documentation/swift/true) to animate the transition. Pass [false](https://developer.apple.com/documentation/swift/false) if you are setting up a navigation controller before its view is displayed.

<a id="return-value"></a>

## Return Value

The view controller that was popped from the stack.

<a id="Discussion"></a>

## Discussion

This method removes the top view controller from the stack and makes the new top of the stack the active view controller. If the view controller at the top of the stack is the root view controller, this method does nothing. In other words, you cannot pop the last item on the stack.

In addition to displaying the view associated with the new view controller at the top of the stack, this method also updates the navigation bar and tool bar accordingly. For information on how the navigation bar is updated, see [Updating the navigation bar](../uinavigationcontroller.md#Updating-the-navigation-bar).

## See Also

### Pushing and popping stack items

- [pushViewController(\_:animated:)](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popToRootViewController(animated:)](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [popToViewController(\_:animated:)](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.

# popViewControllerAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pops the top view controller from the navigation stack and updates the display.

## Declaration

```objectivec
- (UIViewController *) popViewControllerAnimated:(BOOL) animated;
```

## Parameters

- `animated`: Set this value to [true](https://developer.apple.com/documentation/swift/true) to animate the transition. Pass [false](https://developer.apple.com/documentation/swift/false) if you are setting up a navigation controller before its view is displayed.

<a id="return-value"></a>

## Return Value

The view controller that was popped from the stack.

<a id="Discussion"></a>

## Discussion

This method removes the top view controller from the stack and makes the new top of the stack the active view controller. If the view controller at the top of the stack is the root view controller, this method does nothing. In other words, you cannot pop the last item on the stack.

In addition to displaying the view associated with the new view controller at the top of the stack, this method also updates the navigation bar and tool bar accordingly. For information on how the navigation bar is updated, see [Updating the navigation bar](../uinavigationcontroller.md#Updating-the-navigation-bar).

## See Also

### Pushing and popping stack items

- [pushViewController:animated:](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popToRootViewControllerAnimated:](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [popToViewController:animated:](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.
