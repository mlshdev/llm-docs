> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/getperiodicdelay(_:interval:)](https://developer.apple.com/documentation/appkit/nscell/getperiodicdelay(_:interval:))

# getPeriodicDelay(\_:interval:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the initial delay and repeat values for continuous sending of action messages to target objects.

## Declaration

```swift
func getPeriodicDelay(_ delay: UnsafeMutablePointer<Float>, interval: UnsafeMutablePointer<Float>)
```

## Parameters

- `delay`: On input, a pointer to a floating-point variable. On output, the variable contains the current delay (measured in seconds) before messages are sent. This parameter must not be `NULL`.
- `interval`: On input, a pointer to a floating point variable. On output, the variable contains the interval (measured in seconds) at which messages are sent. This parameter must not be `NULL`.

<a id="Discussion"></a>

## Discussion

The default implementation returns a delay of `0.2` and an interval of `0.025` seconds. Subclasses can override this method to supply their own delay and interval values.

## See Also

### Related Documentation

- [isContinuous](iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.

### Tracking the Mouse

- [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTracking(at:in:)](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking(last:current:in:)](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking(last:current:in:mouseIsUp:)](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.

# getPeriodicDelay:interval: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the initial delay and repeat values for continuous sending of action messages to target objects.

## Declaration

```objectivec
- (void) getPeriodicDelay:(float *) delay interval:(float *) interval;
```

## Parameters

- `delay`: On input, a pointer to a floating-point variable. On output, the variable contains the current delay (measured in seconds) before messages are sent. This parameter must not be `NULL`.
- `interval`: On input, a pointer to a floating point variable. On output, the variable contains the interval (measured in seconds) at which messages are sent. This parameter must not be `NULL`.

<a id="Discussion"></a>

## Discussion

The default implementation returns a delay of `0.2` and an interval of `0.025` seconds. Subclasses can override this method to supply their own delay and interval values.

## See Also

### Related Documentation

- [continuous](iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.

### Tracking the Mouse

- [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTrackingAt:inView:](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking:at:inView:](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking:at:inView:mouseIsUp:](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
