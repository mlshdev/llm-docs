> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/touchesshouldcancel(in:)](https://developer.apple.com/documentation/uikit/uiscrollview/touchesshouldcancel(in:))

# touchesShouldCancel(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns whether to cancel touches related to the content subview and start dragging.

## Declaration

```swift
func touchesShouldCancel(in view: UIView) -> Bool
```

## Parameters

- `view`: The view object in the content that’s being touched.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to cancel further touch messages to `view`, [false](https://developer.apple.com/documentation/swift/false) to have `view` continue to receive those messages. The default returned value is [true](https://developer.apple.com/documentation/swift/true) if `view` is not a [UIControl](../uicontrol.md) object; otherwise, it returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The scroll view calls this method just after it starts sending tracking messages to the content view. If it receives [false](https://developer.apple.com/documentation/swift/false) from this method, it stops dragging and forwards the touch events to the content subview. The scroll view doesn’t call this method if the value of the [canCancelContentTouches](cancancelcontenttouches.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing touches

- [touchesShouldBegin(\_:with:in:)](touchesshouldbegin%28__with_in_%29.md): Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.
- [canCancelContentTouches](cancancelcontenttouches.md): A Boolean value that controls whether touches in the content view always lead to tracking.
- [delaysContentTouches](delayscontenttouches.md): A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.
- [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md): Deprecated. The underlying gesture recognizer for directional button presses.

# touchesShouldCancelInContentView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns whether to cancel touches related to the content subview and start dragging.

## Declaration

```objectivec
- (BOOL) touchesShouldCancelInContentView:(UIView *) view;
```

## Parameters

- `view`: The view object in the content that’s being touched.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to cancel further touch messages to `view`, [false](https://developer.apple.com/documentation/swift/false) to have `view` continue to receive those messages. The default returned value is [true](https://developer.apple.com/documentation/swift/true) if `view` is not a [UIControl](../uicontrol.md) object; otherwise, it returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The scroll view calls this method just after it starts sending tracking messages to the content view. If it receives [false](https://developer.apple.com/documentation/swift/false) from this method, it stops dragging and forwards the touch events to the content subview. The scroll view doesn’t call this method if the value of the [canCancelContentTouches](cancancelcontenttouches.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing touches

- [touchesShouldBegin:withEvent:inContentView:](touchesshouldbegin%28__with_in_%29.md): Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.
- [canCancelContentTouches](cancancelcontenttouches.md): A Boolean value that controls whether touches in the content view always lead to tracking.
- [delaysContentTouches](delayscontenttouches.md): A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.
- [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md): Deprecated. The underlying gesture recognizer for directional button presses.
