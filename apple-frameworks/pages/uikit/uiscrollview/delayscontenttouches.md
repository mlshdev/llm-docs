> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/delayscontenttouches](https://developer.apple.com/documentation/uikit/uiscrollview/delayscontenttouches)

# delaysContentTouches (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.

## Declaration

```swift
var delaysContentTouches: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view delays handling the touch-down gesture until it can determine if scrolling is the intent. If the value is [false](https://developer.apple.com/documentation/swift/false) , the scroll view immediately calls [touchesShouldBegin(\_:with:in:)](touchesshouldbegin%28__with_in_%29.md). The default value is [true](https://developer.apple.com/documentation/swift/true).

See the class description for a fuller discussion.

## See Also

### Managing touches

- [touchesShouldBegin(\_:with:in:)](touchesshouldbegin%28__with_in_%29.md): Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.
- [touchesShouldCancel(in:)](touchesshouldcancel%28in_%29.md): Returns whether to cancel touches related to the content subview and start dragging.
- [canCancelContentTouches](cancancelcontenttouches.md): A Boolean value that controls whether touches in the content view always lead to tracking.
- [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md): Deprecated. The underlying gesture recognizer for directional button presses.

# delaysContentTouches (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.

## Declaration

```objectivec
@property (nonatomic) BOOL delaysContentTouches;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view delays handling the touch-down gesture until it can determine if scrolling is the intent. If the value is [false](https://developer.apple.com/documentation/swift/false) , the scroll view immediately calls [touchesShouldBegin:withEvent:inContentView:](touchesshouldbegin%28__with_in_%29.md). The default value is [true](https://developer.apple.com/documentation/swift/true).

See the class description for a fuller discussion.

## See Also

### Managing touches

- [touchesShouldBegin:withEvent:inContentView:](touchesshouldbegin%28__with_in_%29.md): Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.
- [touchesShouldCancelInContentView:](touchesshouldcancel%28in_%29.md): Returns whether to cancel touches related to the content subview and start dragging.
- [canCancelContentTouches](cancancelcontenttouches.md): A Boolean value that controls whether touches in the content view always lead to tracking.
- [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md): Deprecated. The underlying gesture recognizer for directional button presses.
