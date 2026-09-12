> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/cancancelcontenttouches](https://developer.apple.com/documentation/uikit/uiscrollview/cancancelcontenttouches)

# canCancelContentTouches (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether touches in the content view always lead to tracking.

## Declaration

```swift
var canCancelContentTouches: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) and a view in the content has begun tracking a finger touching it, and if the user drags the finger enough to initiate a scroll, the view receives a [touchesCancelled(\_:with:)](../uiresponder/touchescancelled%28__with_%29.md) message and the scroll view handles the touch as a scroll. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the scroll view doesn’t scroll regardless of finger movement once the content view starts tracking.

## See Also

### Managing touches

- [touchesShouldBegin(\_:with:in:)](touchesshouldbegin%28__with_in_%29.md): Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.
- [touchesShouldCancel(in:)](touchesshouldcancel%28in_%29.md): Returns whether to cancel touches related to the content subview and start dragging.
- [delaysContentTouches](delayscontenttouches.md): A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.
- [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md): Deprecated. The underlying gesture recognizer for directional button presses.

# canCancelContentTouches (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether touches in the content view always lead to tracking.

## Declaration

```objectivec
@property (nonatomic) BOOL canCancelContentTouches;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) and a view in the content has begun tracking a finger touching it, and if the user drags the finger enough to initiate a scroll, the view receives a [touchesCancelled:withEvent:](../uiresponder/touchescancelled%28__with_%29.md) message and the scroll view handles the touch as a scroll. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the scroll view doesn’t scroll regardless of finger movement once the content view starts tracking.

## See Also

### Managing touches

- [touchesShouldBegin:withEvent:inContentView:](touchesshouldbegin%28__with_in_%29.md): Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.
- [touchesShouldCancelInContentView:](touchesshouldcancel%28in_%29.md): Returns whether to cancel touches related to the content subview and start dragging.
- [delaysContentTouches](delayscontenttouches.md): A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.
- [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md): Deprecated. The underlying gesture recognizer for directional button presses.
