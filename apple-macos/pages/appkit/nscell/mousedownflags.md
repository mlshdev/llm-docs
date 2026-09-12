> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/mousedownflags](https://developer.apple.com/documentation/appkit/nscell/mousedownflags)

# mouseDownFlags (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The modifier flags for the last (left) mouse-down event.

## Declaration

```swift
var mouseDownFlags: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the value of the modifier flags from the most recent [NSEvent](../nsevent.md) object representing a mouse-down event. If tracking has not yet occurred or the event contained no modifier keys, the value of this property is `0`.

## See Also

### Related Documentation

- [modifierFlags](../nsevent/modifierflags-swift.property.md): An integer bit field that indicates the pressed modifier keys.

### Tracking the Mouse

- [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTracking(at:in:)](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking(last:current:in:)](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking(last:current:in:mouseIsUp:)](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay(\_:interval:)](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.

# mouseDownFlags (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The modifier flags for the last (left) mouse-down event.

## Declaration

```objectivec
@property (readonly) NSInteger mouseDownFlags;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the value of the modifier flags from the most recent [NSEvent](../nsevent.md) object representing a mouse-down event. If tracking has not yet occurred or the event contained no modifier keys, the value of this property is `0`.

## See Also

### Related Documentation

- [modifierFlags](../nsevent/modifierflags-swift.property.md): An integer bit field that indicates the pressed modifier keys.

### Tracking the Mouse

- [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTrackingAt:inView:](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking:at:inView:](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [stopTracking:at:inView:mouseIsUp:](stoptracking%28last_current_in_mouseisup_%29.md): Stops tracking mouse events within the receiver.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay:interval:](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.
