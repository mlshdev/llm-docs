> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/continuetracking(last:current:in:)](https://developer.apple.com/documentation/appkit/nscell/continuetracking(last:current:in:))

# continueTracking(last:current:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.

## Declaration

```swift
func continueTracking(last lastPoint: NSPoint, current currentPoint: NSPoint, in controlView: NSView) -> Bool
```

## Parameters

- `lastPoint`: Contains either the initial location of the cursor when tracking began or the previous current point.
- `currentPoint`: The current location of the cursor.
- `controlView`: The `NSControl` object managing the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if mouse tracking should continue, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked in [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md). The default implementation returns [true](https://developer.apple.com/documentation/swift/true) if the cell is set to continuously send action messages to its target when the mouse button is down or the mouse is being dragged. Subclasses can override this method to provide more sophisticated tracking behavior.

## See Also

### Tracking the Mouse

- [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTracking(at:in:)](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [stopTracking(last:current:in:mouseIsUp:)](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay(\_:interval:)](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.

# continueTracking:at:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.

## Declaration

```objectivec
- (BOOL) continueTracking:(NSPoint) lastPoint at:(NSPoint) currentPoint inView:(NSView *) controlView;
```

## Parameters

- `lastPoint`: Contains either the initial location of the cursor when tracking began or the previous current point.
- `currentPoint`: The current location of the cursor.
- `controlView`: The `NSControl` object managing the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if mouse tracking should continue, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked in [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md). The default implementation returns [true](https://developer.apple.com/documentation/swift/true) if the cell is set to continuously send action messages to its target when the mouse button is down or the mouse is being dragged. Subclasses can override this method to provide more sophisticated tracking behavior.

## See Also

### Tracking the Mouse

- [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTrackingAt:inView:](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [stopTracking:at:inView:mouseIsUp:](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay:interval:](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.
