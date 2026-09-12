> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/pushviewcontroller(_:animated:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/pushviewcontroller(_:animated:))

# pushViewController(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pushes a view controller onto the receiver’s stack and updates the display.

## Declaration

```swift
func pushViewController(_ viewController: UIViewController, animated: Bool)
```

## Parameters

- `viewController`: The view controller to push onto the stack. This object cannot be a tab bar controller. If the view controller is already on the navigation stack, this method throws an exception.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the transition or [false](https://developer.apple.com/documentation/swift/false) if you do not want the transition to be animated. You might specify [false](https://developer.apple.com/documentation/swift/false) if you are setting up the navigation controller at launch time.

<a id="Discussion"></a>

## Discussion

The object in the `viewController` parameter becomes the top view controller on the navigation stack. Pushing a view controller causes its view to be embedded in the navigation interface. If the `animated` parameter is [true](https://developer.apple.com/documentation/swift/true), the view is animated into position; otherwise, the view is simply displayed in its final location.

In addition to displaying the view associated with the new view controller at the top of the stack, this method also updates the navigation bar and tool bar accordingly. For information on how the navigation bar is updated, see [Updating the navigation bar](../uinavigationcontroller.md#Updating-the-navigation-bar).

## See Also

### Pushing and popping stack items

- [popViewController(animated:)](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToRootViewController(animated:)](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [popToViewController(\_:animated:)](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.

# pushViewController:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pushes a view controller onto the receiver’s stack and updates the display.

## Declaration

```objectivec
- (void) pushViewController:(UIViewController *) viewController animated:(BOOL) animated;
```

## Parameters

- `viewController`: The view controller to push onto the stack. This object cannot be a tab bar controller. If the view controller is already on the navigation stack, this method throws an exception.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the transition or [false](https://developer.apple.com/documentation/swift/false) if you do not want the transition to be animated. You might specify [false](https://developer.apple.com/documentation/swift/false) if you are setting up the navigation controller at launch time.

<a id="Discussion"></a>

## Discussion

The object in the `viewController` parameter becomes the top view controller on the navigation stack. Pushing a view controller causes its view to be embedded in the navigation interface. If the `animated` parameter is [true](https://developer.apple.com/documentation/swift/true), the view is animated into position; otherwise, the view is simply displayed in its final location.

In addition to displaying the view associated with the new view controller at the top of the stack, this method also updates the navigation bar and tool bar accordingly. For information on how the navigation bar is updated, see [Updating the navigation bar](../uinavigationcontroller.md#Updating-the-navigation-bar).

## See Also

### Pushing and popping stack items

- [popViewControllerAnimated:](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToRootViewControllerAnimated:](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [popToViewController:animated:](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.
