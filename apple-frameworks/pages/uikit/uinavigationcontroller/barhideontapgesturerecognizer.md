> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/barhideontapgesturerecognizer](https://developer.apple.com/documentation/uikit/uinavigationcontroller/barhideontapgesturerecognizer)

# barHideOnTapGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The gesture recognizer used to hide and show the navigation and toolbar.

## Declaration

```swift
unowned(unsafe) var barHideOnTapGestureRecognizer: UITapGestureRecognizer { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the gesture recognizer used to hide or show the bars. The gesture recognizer is inactive unless the [hidesBarsOnTap](hidesbarsontap.md) property is [true](https://developer.apple.com/documentation/swift/true). You can make changes to the gesture recognizer as needed but must not change its delegate and you must not remove the default target object and action that come configured with it. Do not try to replace this gesture recognizer by overriding the property.

If you tie this gesture recognizer to one of your own, make sure both recognize their gestures simultaneously to ensure that each has a chance to handle the event.

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsOnSwipe](hidesbarsonswipe.md): A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.
- [hidesBarsWhenVerticallyCompact](hidesbarswhenverticallycompact.md): A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.
- [hidesBarsWhenKeyboardAppears](hidesbarswhenkeyboardappears.md): A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.
- [isNavigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.

# barHideOnTapGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The gesture recognizer used to hide and show the navigation and toolbar.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) UITapGestureRecognizer * barHideOnTapGestureRecognizer;
```

<a id="Discussion"></a>

## Discussion

This property contains the gesture recognizer used to hide or show the bars. The gesture recognizer is inactive unless the [hidesBarsOnTap](hidesbarsontap.md) property is [true](https://developer.apple.com/documentation/swift/true). You can make changes to the gesture recognizer as needed but must not change its delegate and you must not remove the default target object and action that come configured with it. Do not try to replace this gesture recognizer by overriding the property.

If you tie this gesture recognizer to one of your own, make sure both recognize their gestures simultaneously to ensure that each has a chance to handle the event.

## See Also

### Hiding the navigation bar

- [hidesBarsOnTap](hidesbarsontap.md): A Boolean value indicating whether the navigation controller allows hiding of its bars using a tap gesture.
- [hidesBarsOnSwipe](hidesbarsonswipe.md): A Boolean value indicating whether the navigation bar hides its bars in response to a swipe gesture.
- [hidesBarsWhenVerticallyCompact](hidesbarswhenverticallycompact.md): A Boolean value indicating whether the navigation controller hides its bars in a vertically compact environment.
- [hidesBarsWhenKeyboardAppears](hidesbarswhenkeyboardappears.md): A Boolean value indicating whether the navigation controller hides its bars when the keyboard appears.
- [navigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.
- [barHideOnSwipeGestureRecognizer](barhideonswipegesturerecognizer.md): The gesture recognizer used to hide the navigation bar and toolbar.
