> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/poptoviewcontroller(_:animated:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/poptoviewcontroller(_:animated:))

# popToViewController(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pops view controllers until the specified view controller is at the top of the navigation stack.

## Declaration

```swift
func popToViewController(_ viewController: UIViewController, animated: Bool) -> [UIViewController]?
```

## Parameters

- `viewController`: The view controller that you want to be at the top of the stack. This view controller must currently be on the navigation stack.
- `animated`: Set this value to [true](https://developer.apple.com/documentation/swift/true) to animate the transition. Pass [false](https://developer.apple.com/documentation/swift/false) if you are setting up a navigation controller before its view is displayed.

<a id="return-value"></a>

## Return Value

An array containing the view controllers that were popped from the stack.

<a id="Discussion"></a>

## Discussion

For information on how the navigation bar is updated, see [Updating the navigation bar](../uinavigationcontroller.md#Updating-the-navigation-bar).

## See Also

### Pushing and popping stack items

- [pushViewController(\_:animated:)](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popViewController(animated:)](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToRootViewController(animated:)](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.

# popToViewController:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pops view controllers until the specified view controller is at the top of the navigation stack.

## Declaration

```objectivec
- (NSArray<__kindof UIViewController *> *) popToViewController:(UIViewController *) viewController animated:(BOOL) animated;
```

## Parameters

- `viewController`: The view controller that you want to be at the top of the stack. This view controller must currently be on the navigation stack.
- `animated`: Set this value to [true](https://developer.apple.com/documentation/swift/true) to animate the transition. Pass [false](https://developer.apple.com/documentation/swift/false) if you are setting up a navigation controller before its view is displayed.

<a id="return-value"></a>

## Return Value

An array containing the view controllers that were popped from the stack.

<a id="Discussion"></a>

## Discussion

For information on how the navigation bar is updated, see [Updating the navigation bar](../uinavigationcontroller.md#Updating-the-navigation-bar).

## See Also

### Pushing and popping stack items

- [pushViewController:animated:](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popViewControllerAnimated:](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToRootViewControllerAnimated:](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.
