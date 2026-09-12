> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/hidesbarsonswipe](https://developer.apple.com/documentation/uikit/uinavigationcontroller/hidesbarsonswipe)

# hidesBarsOnSwipe (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.

## Declaration

```swift
var hidesBarsOnSwipe: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), an upward swipe hides the navigation bar and toolbar. A downward swipe shows both bars again. If the toolbar does not have any items, it remains visible even after a swipe. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsWhenVerticallyCompact](hidesbarswhenverticallycompact.md): A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.
- [hidesBarsWhenKeyboardAppears](hidesbarswhenkeyboardappears.md): A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.
- [isNavigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.
- [barHideOnTapGestureRecognizer](barhideontapgesturerecognizer.md): The gesture recognizer used to hide and show the navigation and toolbar.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.

# hidesBarsOnSwipe (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL hidesBarsOnSwipe;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), an upward swipe hides the navigation bar and toolbar. A downward swipe shows both bars again. If the toolbar does not have any items, it remains visible even after a swipe. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsWhenVerticallyCompact](hidesbarswhenverticallycompact.md): A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.
- [hidesBarsWhenKeyboardAppears](hidesbarswhenkeyboardappears.md): A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.
- [navigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.
- [barHideOnTapGestureRecognizer](barhideontapgesturerecognizer.md): The gesture recognizer used to hide and show the navigation and toolbar.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.
