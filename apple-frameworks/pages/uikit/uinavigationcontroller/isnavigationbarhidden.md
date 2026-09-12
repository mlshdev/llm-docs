> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/isnavigationbarhidden](https://developer.apple.com/documentation/uikit/uinavigationcontroller/isnavigationbarhidden)

# isNavigationBarHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the navigation bar is hidden.

## Declaration

```swift
var isNavigationBarHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the navigation bar is hidden. The default value is [false](https://developer.apple.com/documentation/swift/false). Setting this property changes the visibility of the navigation bar without animating the changes. If you want to animate the change, use the [setNavigationBarHidden(\_:animated:)](setnavigationbarhidden%28__animated_%29.md)method instead.

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsOnSwipe](hidesbarsonswipe.md): A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.
- [hidesBarsWhenVerticallyCompact](hidesbarswhenverticallycompact.md): A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.
- [hidesBarsWhenKeyboardAppears](hidesbarswhenkeyboardappears.md): A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.
- [barHideOnTapGestureRecognizer](barhideontapgesturerecognizer.md): The gesture recognizer used to hide and show the navigation and toolbar.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.

# navigationBarHidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the navigation bar is hidden.

## Declaration

```objectivec
@property (nonatomic, getter=isNavigationBarHidden) BOOL navigationBarHidden;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the navigation bar is hidden. The default value is [false](https://developer.apple.com/documentation/swift/false). Setting this property changes the visibility of the navigation bar without animating the changes. If you want to animate the change, use the [setNavigationBarHidden:animated:](setnavigationbarhidden%28__animated_%29.md)method instead.

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsOnSwipe](hidesbarsonswipe.md): A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.
- [hidesBarsWhenVerticallyCompact](hidesbarswhenverticallycompact.md): A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.
- [hidesBarsWhenKeyboardAppears](hidesbarswhenkeyboardappears.md): A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.
- [barHideOnTapGestureRecognizer](barhideontapgesturerecognizer.md): The gesture recognizer used to hide and show the navigation and toolbar.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.
