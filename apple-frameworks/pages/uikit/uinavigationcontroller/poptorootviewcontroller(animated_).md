> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/poptorootviewcontroller(animated:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/poptorootviewcontroller(animated:))

# popToRootViewController(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pops all the view controllers on the stack except the root view controller and updates the display.

## Declaration

```swift
func popToRootViewController(animated: Bool) -> [UIViewController]?
```

## Parameters

- `animated`: Set this value to [true](https://developer.apple.com/documentation/swift/true) to animate the transition. Pass [false](https://developer.apple.com/documentation/swift/false) if you are setting up a navigation controller before its view is displayed.

<a id="return-value"></a>

## Return Value

An array of view controllers representing the items that were popped from the stack.

<a id="Discussion"></a>

## Discussion

The root view controller becomes the top view controller. For information on how the navigation bar is updated, see [Updating the navigation bar](../uinavigationcontroller.md#Updating-the-navigation-bar).

## See Also

### Pushing and popping stack items

- [pushViewController(\_:animated:)](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popViewController(animated:)](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToViewController(\_:animated:)](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.

# popToRootViewControllerAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pops all the view controllers on the stack except the root view controller and updates the display.

## Declaration

```objectivec
- (NSArray<__kindof UIViewController *> *) popToRootViewControllerAnimated:(BOOL) animated;
```

## Parameters

- `animated`: Set this value to [true](https://developer.apple.com/documentation/swift/true) to animate the transition. Pass [false](https://developer.apple.com/documentation/swift/false) if you are setting up a navigation controller before its view is displayed.

<a id="return-value"></a>

## Return Value

An array of view controllers representing the items that were popped from the stack.

<a id="Discussion"></a>

## Discussion

The root view controller becomes the top view controller. For information on how the navigation bar is updated, see [Updating the navigation bar](../uinavigationcontroller.md#Updating-the-navigation-bar).

## See Also

### Pushing and popping stack items

- [pushViewController:animated:](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popViewControllerAnimated:](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToViewController:animated:](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.
