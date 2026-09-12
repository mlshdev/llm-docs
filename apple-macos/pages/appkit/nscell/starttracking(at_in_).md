> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/starttracking(at:in:)](https://developer.apple.com/documentation/appkit/nscell/starttracking(at:in:))

# startTracking(at:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Begins tracking mouse events within the receiver.

## Declaration

```swift
func startTracking(at startPoint: NSPoint, in controlView: NSView) -> Bool
```

## Parameters

- `startPoint`: The initial location of the cursor.
- `controlView`: The `NSControl` object managing the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is set to respond continuously or set to respond when the mouse is dragged, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The `NSCell` implementation of [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md) invokes this method when tracking begins.  Subclasses can override this method to implement special mouse-tracking behavior at the beginning of mouse tracking—for example, displaying a special cursor.

## See Also

### Tracking the Mouse

- [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [continueTracking(last:current:in:)](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking(last:current:in:mouseIsUp:)](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay(\_:interval:)](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.

# startTrackingAt:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Begins tracking mouse events within the receiver.

## Declaration

```objectivec
- (BOOL) startTrackingAt:(NSPoint) startPoint inView:(NSView *) controlView;
```

## Parameters

- `startPoint`: The initial location of the cursor.
- `controlView`: The `NSControl` object managing the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is set to respond continuously or set to respond when the mouse is dragged, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The `NSCell` implementation of [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md) invokes this method when tracking begins.  Subclasses can override this method to implement special mouse-tracking behavior at the beginning of mouse tracking—for example, displaying a special cursor.

## See Also

### Tracking the Mouse

- [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [continueTracking:at:inView:](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking:at:inView:mouseIsUp:](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay:interval:](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.
