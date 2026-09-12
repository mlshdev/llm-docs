> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/trackmouse(with:in:of:untilmouseup:)](https://developer.apple.com/documentation/appkit/nscell/trackmouse(with:in:of:untilmouseup:))

# trackMouse(with:in:of:untilMouseUp:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initiates the mouse tracking behavior in a cell.

## Declaration

```swift
func trackMouse(with event: NSEvent, in cellFrame: NSRect, of controlView: NSView, untilMouseUp flag: Bool) -> Bool
```

## Parameters

- `event`: The event that caused the mouse tracking to occur.
- `cellFrame`: The receiver’s frame rectangle.
- `controlView`: The view containing the receiver. This is usually an `NSControl` object.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), mouse tracking continues until the user releases the mouse button. If [false](https://developer.apple.com/documentation/swift/false), tracking continues until the cursor leaves the tracking rectangle, specified by the `cellFrame` parameter, regardless of the mouse button state. See the discussion for more information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the mouse tracking conditions are met, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is generally not overridden because the default implementation invokes other `NSCell` methods that can be overridden to handle specific events in a dragging session. This method’s return value depends on the `untilMouseUp` flag. If `untilMouseUp` is set to [true](https://developer.apple.com/documentation/swift/true), this method returns [true](https://developer.apple.com/documentation/swift/true) if the mouse button goes up while the cursor is anywhere; [false](https://developer.apple.com/documentation/swift/false), otherwise. If `untilMouseUp` is set to [false](https://developer.apple.com/documentation/swift/false), this method returns [true](https://developer.apple.com/documentation/swift/true) if the mouse button goes up while the cursor is within `cellFrame`; [false](https://developer.apple.com/documentation/swift/false), otherwise.

This method first invokes [startTracking(at:in:)](starttracking%28at_in_%29.md). If that method returns [true](https://developer.apple.com/documentation/swift/true), then as mouse-dragged events are intercepted, [continueTracking(last:current:in:)](continuetracking%28last_current_in_%29.md) is invoked until either the method returns [false](https://developer.apple.com/documentation/swift/false) or the mouse is released. Finally, [stopTracking(last:current:in:mouseIsUp:)](stoptracking%28last_current_in_mouseisup_%29.md) is invoked if the mouse is released. If `untilMouseUp` is [true](https://developer.apple.com/documentation/swift/true), it’s invoked when the mouse button goes up while the cursor is anywhere. If `untilMouseUp` is [false](https://developer.apple.com/documentation/swift/false), it’s invoked when the mouse button goes up while the cursor is within `cellFrame`. You usually override one or more of these methods to respond to specific mouse events.

## See Also

### Tracking the Mouse

- [startTracking(at:in:)](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking(last:current:in:)](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking(last:current:in:mouseIsUp:)](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay(\_:interval:)](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.

# trackMouse:inRect:ofView:untilMouseUp: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initiates the mouse tracking behavior in a cell.

## Declaration

```objectivec
- (BOOL) trackMouse:(NSEvent *) event inRect:(NSRect) cellFrame ofView:(NSView *) controlView untilMouseUp:(BOOL) flag;
```

## Parameters

- `event`: The event that caused the mouse tracking to occur.
- `cellFrame`: The receiver’s frame rectangle.
- `controlView`: The view containing the receiver. This is usually an `NSControl` object.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), mouse tracking continues until the user releases the mouse button. If [false](https://developer.apple.com/documentation/swift/false), tracking continues until the cursor leaves the tracking rectangle, specified by the `cellFrame` parameter, regardless of the mouse button state. See the discussion for more information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the mouse tracking conditions are met, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is generally not overridden because the default implementation invokes other `NSCell` methods that can be overridden to handle specific events in a dragging session. This method’s return value depends on the `untilMouseUp` flag. If `untilMouseUp` is set to [true](https://developer.apple.com/documentation/swift/true), this method returns [true](https://developer.apple.com/documentation/swift/true) if the mouse button goes up while the cursor is anywhere; [false](https://developer.apple.com/documentation/swift/false), otherwise. If `untilMouseUp` is set to [false](https://developer.apple.com/documentation/swift/false), this method returns [true](https://developer.apple.com/documentation/swift/true) if the mouse button goes up while the cursor is within `cellFrame`; [false](https://developer.apple.com/documentation/swift/false), otherwise.

This method first invokes [startTrackingAt:inView:](starttracking%28at_in_%29.md). If that method returns [true](https://developer.apple.com/documentation/swift/true), then as mouse-dragged events are intercepted, [continueTracking:at:inView:](continuetracking%28last_current_in_%29.md) is invoked until either the method returns [false](https://developer.apple.com/documentation/swift/false) or the mouse is released. Finally, [stopTracking:at:inView:mouseIsUp:](stoptracking%28last_current_in_mouseisup_%29.md) is invoked if the mouse is released. If `untilMouseUp` is [true](https://developer.apple.com/documentation/swift/true), it’s invoked when the mouse button goes up while the cursor is anywhere. If `untilMouseUp` is [false](https://developer.apple.com/documentation/swift/false), it’s invoked when the mouse button goes up while the cursor is within `cellFrame`. You usually override one or more of these methods to respond to specific mouse events.

## See Also

### Tracking the Mouse

- [startTrackingAt:inView:](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking:at:inView:](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking:at:inView:mouseIsUp:](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay:interval:](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.
