> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/interactivecontentpopgesturerecognizer](https://developer.apple.com/documentation/uikit/uinavigationcontroller/interactivecontentpopgesturerecognizer)

# interactiveContentPopGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.

## Declaration

```swift
var interactiveContentPopGestureRecognizer: UIGestureRecognizer? { get }
```

<a id="discussion"></a>

## Discussion

The navigation controller installs this gesture recognizer on its view and uses it to interactively pop the topmost view controller off the navigation stack when a person initially pans horizontally in a leading to trailing direction in the view. It recognizes a gesture on the entire content area of the navigation controller in cases that are not covered by [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md) and initiates an interactive pop.

Use this property to retrieve the gesture recognizer and tie it to the behavior of other gesture recognizers in your user interface.

## See Also

### Pushing and popping stack items

- [pushViewController(\_:animated:)](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popViewController(animated:)](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToRootViewController(animated:)](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [popToViewController(\_:animated:)](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.

# interactiveContentPopGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIGestureRecognizer * interactiveContentPopGestureRecognizer;
```

<a id="discussion"></a>

## Discussion

The navigation controller installs this gesture recognizer on its view and uses it to interactively pop the topmost view controller off the navigation stack when a person initially pans horizontally in a leading to trailing direction in the view. It recognizes a gesture on the entire content area of the navigation controller in cases that are not covered by [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md) and initiates an interactive pop.

Use this property to retrieve the gesture recognizer and tie it to the behavior of other gesture recognizers in your user interface.

## See Also

### Pushing and popping stack items

- [pushViewController:animated:](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popViewControllerAnimated:](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToRootViewControllerAnimated:](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [popToViewController:animated:](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactivePopGestureRecognizer](interactivepopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.
