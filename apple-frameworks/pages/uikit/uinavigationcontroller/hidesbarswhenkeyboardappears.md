> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/hidesbarswhenkeyboardappears](https://developer.apple.com/documentation/uikit/uinavigationcontroller/hidesbarswhenkeyboardappears)

# hidesBarsWhenKeyboardAppears (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.

## Declaration

```swift
var hidesBarsWhenKeyboardAppears: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the appearance of the keyboard causes the navigation controller to hide its navigation bar and toolbar. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsOnSwipe](hidesbarsonswipe.md): A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.
- [hidesBarsWhenVerticallyCompact](hidesbarswhenverticallycompact.md): A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.
- [isNavigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.
- [barHideOnTapGestureRecognizer](barhideontapgesturerecognizer.md): The gesture recognizer used to hide and show the navigation and toolbar.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.

# hidesBarsWhenKeyboardAppears (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL hidesBarsWhenKeyboardAppears;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the appearance of the keyboard causes the navigation controller to hide its navigation bar and toolbar. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsOnSwipe](hidesbarsonswipe.md): A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.
- [hidesBarsWhenVerticallyCompact](hidesbarswhenverticallycompact.md): A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.
- [navigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.
- [barHideOnTapGestureRecognizer](barhideontapgesturerecognizer.md): The gesture recognizer used to hide and show the navigation and toolbar.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.
