> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/hidesbarswhenverticallycompact](https://developer.apple.com/documentation/uikit/uinavigationcontroller/hidesbarswhenverticallycompact)

# hidesBarsWhenVerticallyCompact (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.

## Declaration

```swift
var hidesBarsWhenVerticallyCompact: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the navigation controller hides its navigation bar and toolbar when it transitions to a vertically compact environment. Upon returning to a vertically regular environment, the navigation controller automatically shows both bars again. In addition, unhandled taps in the content area cause the navigation controller to show both bars again. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsOnSwipe](hidesbarsonswipe.md): A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.
- [hidesBarsWhenKeyboardAppears](hidesbarswhenkeyboardappears.md): A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.
- [isNavigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.
- [barHideOnTapGestureRecognizer](barhideontapgesturerecognizer.md): The gesture recognizer used to hide and show the navigation and toolbar.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.

# hidesBarsWhenVerticallyCompact (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL hidesBarsWhenVerticallyCompact;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the navigation controller hides its navigation bar and toolbar when it transitions to a vertically compact environment. Upon returning to a vertically regular environment, the navigation controller automatically shows both bars again. In addition, unhandled taps in the content area cause the navigation controller to show both bars again. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsOnSwipe](hidesbarsonswipe.md): A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.
- [hidesBarsWhenKeyboardAppears](hidesbarswhenkeyboardappears.md): A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.
- [navigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.
- [barHideOnTapGestureRecognizer](barhideontapgesturerecognizer.md): The gesture recognizer used to hide and show the navigation and toolbar.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.
