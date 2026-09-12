> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/directionalpressgesturerecognizer](https://developer.apple.com/documentation/uikit/uiscrollview/directionalpressgesturerecognizer)

# directionalPressGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+

The underlying gesture recognizer for directional button presses.

## Declaration

```swift
var directionalPressGestureRecognizer: UIGestureRecognizer { get }
```

<a id="Discussion"></a>

## Discussion

The [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md) is disabled by default. If you want to perform scrolling in direct response to up, down, left, and right arrow button presses, instead of scrolling indirectly in response to focus updates, enable this gesture recognizer.

## See Also

### Managing touches

- [touchesShouldBegin(\_:with:in:)](touchesshouldbegin%28__with_in_%29.md): Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.
- [touchesShouldCancel(in:)](touchesshouldcancel%28in_%29.md): Returns whether to cancel touches related to the content subview and start dragging.
- [canCancelContentTouches](cancancelcontenttouches.md): A Boolean value that controls whether touches in the content view always lead to tracking.
- [delaysContentTouches](delayscontenttouches.md): A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.

# directionalPressGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+

The underlying gesture recognizer for directional button presses.

## Declaration

```objectivec
@property (nonatomic, readonly) UIGestureRecognizer * directionalPressGestureRecognizer;
```

<a id="Discussion"></a>

## Discussion

The [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md) is disabled by default. If you want to perform scrolling in direct response to up, down, left, and right arrow button presses, instead of scrolling indirectly in response to focus updates, enable this gesture recognizer.

## See Also

### Managing touches

- [touchesShouldBegin:withEvent:inContentView:](touchesshouldbegin%28__with_in_%29.md): Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.
- [touchesShouldCancelInContentView:](touchesshouldcancel%28in_%29.md): Returns whether to cancel touches related to the content subview and start dragging.
- [canCancelContentTouches](cancancelcontenttouches.md): A Boolean value that controls whether touches in the content view always lead to tracking.
- [delaysContentTouches](delayscontenttouches.md): A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.
