> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/stoptracking(last:current:in:mouseisup:)](https://developer.apple.com/documentation/appkit/nscell/stoptracking(last:current:in:mouseisup:))

# stopTracking(last:current:in:mouseIsUp:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops tracking mouse events within the receiver.

## Declaration

```swift
func stopTracking(last lastPoint: NSPoint, current stopPoint: NSPoint, in controlView: NSView, mouseIsUp flag: Bool)
```

## Parameters

- `lastPoint`: Contains the previous position of the cursor.
- `stopPoint`: The current location of the cursor.
- `controlView`: The `NSControl` object managing the receiver.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), this method was invoked because the user released the mouse button; otherwise, if [false](https://developer.apple.com/documentation/swift/false), the cursor left the designated tracking rectangle.

<a id="Discussion"></a>

## Discussion

The default `NSCell` implementation of [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md) invokes this method when the cursor has left the bounds of the receiver or the mouse button goes up. The default `NSCell` implementation of this method does nothing. Subclasses often override this method to provide customized tracking behavior. The following example increments the state of a tristate cell when the mouse button is clicked:

```objc
- (void)stopTracking:(NSPoint)lastPoint at:(NSPoint)stopPoint
    inView:(NSView *)controlView mouseIsUp:(BOOL)flag
{
    if (flag == YES) {
        [self setTriState:([self triState]+1)];
    }
}
```

## See Also

### Tracking the Mouse

- [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTracking(at:in:)](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking(last:current:in:)](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay(\_:interval:)](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.

# stopTracking:at:inView:mouseIsUp: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops tracking mouse events within the receiver.

## Declaration

```objectivec
- (void) stopTracking:(NSPoint) lastPoint at:(NSPoint) stopPoint inView:(NSView *) controlView mouseIsUp:(BOOL) flag;
```

## Parameters

- `lastPoint`: Contains the previous position of the cursor.
- `stopPoint`: The current location of the cursor.
- `controlView`: The `NSControl` object managing the receiver.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), this method was invoked because the user released the mouse button; otherwise, if [false](https://developer.apple.com/documentation/swift/false), the cursor left the designated tracking rectangle.

<a id="Discussion"></a>

## Discussion

The default `NSCell` implementation of [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md) invokes this method when the cursor has left the bounds of the receiver or the mouse button goes up. The default `NSCell` implementation of this method does nothing. Subclasses often override this method to provide customized tracking behavior. The following example increments the state of a tristate cell when the mouse button is clicked:

```objc
- (void)stopTracking:(NSPoint)lastPoint at:(NSPoint)stopPoint
    inView:(NSView *)controlView mouseIsUp:(BOOL)flag
{
    if (flag == YES) {
        [self setTriState:([self triState]+1)];
    }
}
```

## See Also

### Tracking the Mouse

- [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [startTrackingAt:inView:](starttracking%28at_in_%29.md): Begins tracking mouse events within the receiver.
- [continueTracking:at:inView:](continuetracking%28last_current_in_%29.md): Returns a Boolean value that indicates whether mouse tracking should continue in the receiving cell.
- [mouseDownFlags](mousedownflags.md): The modifier flags for the last (left) mouse-down event.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value that indicates whether tracking stops when the cursor leaves the cell.
- [getPeriodicDelay:interval:](getperiodicdelay%28__interval_%29.md): Returns the initial delay and repeat values for continuous sending of action messages to target objects.
