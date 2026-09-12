> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohideventservice/dispatchabsolutepointerevent](https://developer.apple.com/documentation/hiddriverkit/iohideventservice/dispatchabsolutepointerevent)

# dispatchAbsolutePointerEvent

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Dispatches an absolute pointer event to the system.

## Declaration

```objectivec
virtual kern_return_t dispatchAbsolutePointerEvent(uint64_t timeStamp, IOFixed x, IOFixed y, uint32_t buttonState, IOOptionBits options, bool accelerate);
```

## Parameters

- `timeStamp`: The timestamp of the event. Use the timestamp of the report element that is the source of the event.
- `x`: The X value, specified in the range `0` to `1`.
- `y`: The Y value, specified in the range `0` to `1`.
- `buttonState`: The current button state, if any.
- `options`: Additional options for pointer events. Specify `0` for no options. For a list of other values, see [IOHIDPointerEventOptions](../iohidpointereventoptions.md).
- `accelerate`: A Boolean value indicating whether to apply the acceleration algorithm to the pointer event. Specify `false` if you don’t want to apply that logic.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Call this method from your event service to dispatch a keyboard event to the system. Typically, you call this method after determining that a report contains data representing a mouse- or pointer-related event.

## See Also

### Dispatching Events

- [dispatchKeyboardEvent](dispatchkeyboardevent.md): Dispatches a keyboard-related event to the system.
- [dispatchRelativePointerEvent](dispatchrelativepointerevent.md): Dispatches a relative pointer event to the system.
- [dispatchDigitizerStylusEvent](dispatchdigitizerstylusevent.md): Dispatches a digitizer stylus event to the system.
- [dispatchDigitizerTouchEvent](dispatchdigitizertouchevent.md): Dispatches a digitizer touch event to the system.
- [dispatchRelativeScrollWheelEvent](dispatchrelativescrollwheelevent.md): Dispatches a relative scroll wheel event to the system.
- [dispatchEvent](dispatchevent.md): Dispatches a HID event to the system.
- [IOHIDKeyboardEventOptions](../iohidkeyboardeventoptions.md): Options that you use to dispatch keyboard events.
- [IOHIDPointerEventOptions](../iohidpointereventoptions.md): Options that you use to dispatch pointer-related events.
- [IOHIDScrollEventOptions](../iohidscrolleventoptions.md): Options that you use to dispatch scrolling-related events.
