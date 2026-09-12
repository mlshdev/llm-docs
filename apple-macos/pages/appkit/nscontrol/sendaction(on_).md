> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/sendaction(on:)](https://developer.apple.com/documentation/appkit/nscontrol/sendaction(on:))

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

- `mask`: A bit mask containing the conditions for sending the action. The only conditions that are actually checked are associated with the `NSLeftMouseDownMask`,  `NSLeftMouseUpMask`, `NSLeftMouseDraggedMask`, and `NSPeriodicMask` bits.

<a id="return-value"></a>

## Return Value

A bit mask containing the previous settings. This bit mask uses the same values as specified in the `mask` parameter.

<a id="Discussion"></a>

## Discussion

You use this method during mouse tracking when the mouse button changes state, the mouse moves, or if the cell is marked to send its action continuously while tracking. Because of this, the only bits checked in `mask` are `NSLeftMouseDownMask`, `NSLeftMouseUpMask`, `NSLeftMouseDraggedMask`, and `NSPeriodicMask`, which are declared in the [NSEvent](../nsevent.md) class reference.

The default implementation of this method simply invokes the [sendAction(on:)](../nscell/sendaction%28on_%29.md) method of its associated cell.

## See Also

### Related Documentation

- [sendAction(on:)](../nscell/sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

### Implementing the Target-Action Mechanism

- [action](action.md): The default action-message selector associated with the control.
- [target](target.md): The target object that receives action messages from the cell.
- [isContinuous](iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendAction(\_:to:)](sendaction%28__to_%29.md): Causes the specified action to be sent to the target.

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

- `mask`: A bit mask containing the conditions for sending the action. The only conditions that are actually checked are associated with the `NSLeftMouseDownMask`,  `NSLeftMouseUpMask`, `NSLeftMouseDraggedMask`, and `NSPeriodicMask` bits.

<a id="return-value"></a>

## Return Value

A bit mask containing the previous settings. This bit mask uses the same values as specified in the `mask` parameter.

<a id="Discussion"></a>

## Discussion

You use this method during mouse tracking when the mouse button changes state, the mouse moves, or if the cell is marked to send its action continuously while tracking. Because of this, the only bits checked in `mask` are `NSLeftMouseDownMask`, `NSLeftMouseUpMask`, `NSLeftMouseDraggedMask`, and `NSPeriodicMask`, which are declared in the [NSEvent](../nsevent.md) class reference.

The default implementation of this method simply invokes the [sendActionOn:](../nscell/sendaction%28on_%29.md) method of its associated cell.

## See Also

### Related Documentation

- [sendActionOn:](../nscell/sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

### Implementing the Target-Action Mechanism

- [action](action.md): The default action-message selector associated with the control.
- [target](target.md): The target object that receives action messages from the cell.
- [continuous](iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendAction:to:](sendaction%28__to_%29.md): Causes the specified action to be sent to the target.
