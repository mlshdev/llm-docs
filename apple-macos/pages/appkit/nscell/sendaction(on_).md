> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/sendaction(on:)](https://developer.apple.com/documentation/appkit/nscell/sendaction(on:))

# sendAction(on:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the conditions on which the receiver sends action messages to its target.

## Declaration

```swift
func sendAction(on mask: NSEvent.EventTypeMask) -> Int
```

## Parameters

- `mask`: A bit mask containing the conditions for sending the action. The only conditions that are actually checked are associated with the [NSLeftMouseDownMask](../nsleftmousedownmask.md),  [NSLeftMouseUpMask](../nsleftmouseupmask.md), [NSLeftMouseDraggedMask](../nsleftmousedraggedmask.md), and [NSPeriodicMask](../nsperiodicmask.md) bits.

<a id="return-value"></a>

## Return Value

A bit mask containing the previous settings. This bit mask uses the same values as specified in the `mask` parameter.

<a id="Discussion"></a>

## Discussion

You use this method during mouse tracking when the mouse button changes state, the mouse moves, or if the cell is marked to send its action continuously while tracking. Because of this, the only bits checked in `mask` are [NSLeftMouseDownMask](../nsleftmousedownmask.md),  [NSLeftMouseUpMask](../nsleftmouseupmask.md), [NSLeftMouseDraggedMask](../nsleftmousedraggedmask.md), and [NSPeriodicMask](../nsperiodicmask.md), which are declared in the [NSEvent](../nsevent.md) class reference.

You can use the [isContinuous](iscontinuous.md) property to turn on the flag corresponding to [NSPeriodicMask](../nsperiodicmask.md) or [NSLeftMouseDraggedMask](../nsleftmousedraggedmask.md), whichever is appropriate to the given subclass of `NSCell`.

## See Also

### Managing the Target and Action

- [action](action.md): The action performed by the cell.
- [target](target.md): The object that receives the cell’s action messages.
- [isContinuous](iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.

# sendActionOn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the conditions on which the receiver sends action messages to its target.

## Declaration

```objectivec
- (NSInteger) sendActionOn:(NSEventMask) mask;
```

## Parameters

- `mask`: A bit mask containing the conditions for sending the action. The only conditions that are actually checked are associated with the [NSLeftMouseDownMask](../nsleftmousedownmask.md),  [NSLeftMouseUpMask](../nsleftmouseupmask.md), [NSLeftMouseDraggedMask](../nsleftmousedraggedmask.md), and [NSPeriodicMask](../nsperiodicmask.md) bits.

<a id="return-value"></a>

## Return Value

A bit mask containing the previous settings. This bit mask uses the same values as specified in the `mask` parameter.

<a id="Discussion"></a>

## Discussion

You use this method during mouse tracking when the mouse button changes state, the mouse moves, or if the cell is marked to send its action continuously while tracking. Because of this, the only bits checked in `mask` are [NSLeftMouseDownMask](../nsleftmousedownmask.md),  [NSLeftMouseUpMask](../nsleftmouseupmask.md), [NSLeftMouseDraggedMask](../nsleftmousedraggedmask.md), and [NSPeriodicMask](../nsperiodicmask.md), which are declared in the [NSEvent](../nsevent.md) class reference.

You can use the [continuous](iscontinuous.md) property to turn on the flag corresponding to [NSPeriodicMask](../nsperiodicmask.md) or [NSLeftMouseDraggedMask](../nsleftmousedraggedmask.md), whichever is appropriate to the given subclass of `NSCell`.

## See Also

### Managing the Target and Action

- [action](action.md): The action performed by the cell.
- [target](target.md): The object that receives the cell’s action messages.
- [continuous](iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.
