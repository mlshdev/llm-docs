> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/touchesshouldbegin(_:with:in:)](https://developer.apple.com/documentation/uikit/uiscrollview/touchesshouldbegin(_:with:in:))

# touchesShouldBegin(\_:with:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.

## Declaration

```swift
func touchesShouldBegin(_ touches: Set<UITouch>, with event: UIEvent?, in view: UIView) -> Bool
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances that represent the touches for the starting phase of the event represented by `event`.
- `event`: An object representing the event to which the touch objects in `touches` belong.
- `view`: The subview in the content where the touch-down gesture occurred.

<a id="return-value"></a>

## Return Value

Return [false](https://developer.apple.com/documentation/swift/false) if you don’t want the scroll view to send event messages to `view`. If you want `view` to receive those messages, return [true](https://developer.apple.com/documentation/swift/true) (the default).

<a id="Discussion"></a>

## Discussion

The default behavior of [UIScrollView](../uiscrollview.md) is to invoke the [UIResponder](../uiresponder.md) event-handling methods of the target subview that the touches occur in.

## See Also

### Managing touches

- [touchesShouldCancel(in:)](touchesshouldcancel%28in_%29.md): Returns whether to cancel touches related to the content subview and start dragging.
- [canCancelContentTouches](cancancelcontenttouches.md): A Boolean value that controls whether touches in the content view always lead to tracking.
- [delaysContentTouches](delayscontenttouches.md): A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.
- [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md): Deprecated. The underlying gesture recognizer for directional button presses.

# touchesShouldBegin:withEvent:inContentView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Overridden by subclasses to customize the default behavior when a finger touches down in displayed content.

## Declaration

```objectivec
- (BOOL) touchesShouldBegin:(NSSet<UITouch *> *) touches withEvent:(UIEvent *) event inContentView:(UIView *) view;
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances that represent the touches for the starting phase of the event represented by `event`.
- `event`: An object representing the event to which the touch objects in `touches` belong.
- `view`: The subview in the content where the touch-down gesture occurred.

<a id="return-value"></a>

## Return Value

Return [false](https://developer.apple.com/documentation/swift/false) if you don’t want the scroll view to send event messages to `view`. If you want `view` to receive those messages, return [true](https://developer.apple.com/documentation/swift/true) (the default).

<a id="Discussion"></a>

## Discussion

The default behavior of [UIScrollView](../uiscrollview.md) is to invoke the [UIResponder](../uiresponder.md) event-handling methods of the target subview that the touches occur in.

## See Also

### Managing touches

- [touchesShouldCancelInContentView:](touchesshouldcancel%28in_%29.md): Returns whether to cancel touches related to the content subview and start dragging.
- [canCancelContentTouches](cancancelcontenttouches.md): A Boolean value that controls whether touches in the content view always lead to tracking.
- [delaysContentTouches](delayscontenttouches.md): A Boolean value that determines whether the scroll view delays the handling of touch-down gestures.
- [directionalPressGestureRecognizer](directionalpressgesturerecognizer.md): Deprecated. The underlying gesture recognizer for directional button presses.
