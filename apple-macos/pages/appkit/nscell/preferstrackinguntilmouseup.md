> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/preferstrackinguntilmouseup](https://developer.apple.com/documentation/appkit/nscell/preferstrackinguntilmouseup)

# prefersTrackingUntilMouseUp (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.

## Declaration

```swift
class var prefersTrackingUntilMouseUp: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if tracking stops when the cursor leaves the cell, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation returns [false](https://developer.apple.com/documentation/swift/false). Subclasses may override this method to return a different value.

## See Also

### Tracking the Mouse

- [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTracking(at:in:)](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking(last:current:in:)](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking(last:current:in:mouseIsUp:)](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [getPeriodicDelay(\_:interval:)](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.

# prefersTrackingUntilMouseUp (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.

## Declaration

```objectivec
@property (class, readonly) BOOL prefersTrackingUntilMouseUp;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if tracking stops when the cursor leaves the cell, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation returns [false](https://developer.apple.com/documentation/swift/false). Subclasses may override this method to return a different value.

## See Also

### Tracking the Mouse

- [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTrackingAt:inView:](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking:at:inView:](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking:at:inView:mouseIsUp:](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [getPeriodicDelay:interval:](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.
