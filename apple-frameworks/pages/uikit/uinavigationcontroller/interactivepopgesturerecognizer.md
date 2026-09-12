> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/interactivepopgesturerecognizer](https://developer.apple.com/documentation/uikit/uinavigationcontroller/interactivepopgesturerecognizer)

# interactivePopGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.

## Declaration

```swift
var interactivePopGestureRecognizer: UIGestureRecognizer? { get }
```

<a id="discussion"></a>

## Discussion

The navigation controller installs this gesture recognizer on its view and uses it to pop the topmost view controller off the navigation stack when a person swipes horizontally from the leading edge of the screen.

Use this property to retrieve the gesture recognizer and tie it to the behavior of other gesture recognizers in your user interface.

## See Also

### Pushing and popping stack items

- [pushViewController(\_:animated:)](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popViewController(animated:)](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToRootViewController(animated:)](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [popToViewController(\_:animated:)](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.

# interactivePopGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person swipes from the leading screen edge.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIGestureRecognizer * interactivePopGestureRecognizer;
```

<a id="discussion"></a>

## Discussion

The navigation controller installs this gesture recognizer on its view and uses it to pop the topmost view controller off the navigation stack when a person swipes horizontally from the leading edge of the screen.

Use this property to retrieve the gesture recognizer and tie it to the behavior of other gesture recognizers in your user interface.

## See Also

### Pushing and popping stack items

- [pushViewController:animated:](pushviewcontroller%28__animated_%29.md): Pushes a view controller onto the receiver’s stack and updates the display.
- [popViewControllerAnimated:](popviewcontroller%28animated_%29.md): Pops the top view controller from the navigation stack and updates the display.
- [popToRootViewControllerAnimated:](poptorootviewcontroller%28animated_%29.md): Pops all the view controllers on the stack except the root view controller and updates the display.
- [popToViewController:animated:](poptoviewcontroller%28__animated_%29.md): Pops view controllers until the specified view controller is at the top of the navigation stack.
- [interactiveContentPopGestureRecognizer](interactivecontentpopgesturerecognizer.md): The gesture recognizer that handles interactively popping the top view controller off the navigation stack when a person pans horizontally in the view.
