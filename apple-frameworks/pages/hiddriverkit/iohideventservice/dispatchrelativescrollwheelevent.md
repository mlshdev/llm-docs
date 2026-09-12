> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohideventservice/dispatchrelativescrollwheelevent](https://developer.apple.com/documentation/hiddriverkit/iohideventservice/dispatchrelativescrollwheelevent)

# dispatchRelativeScrollWheelEvent

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Dispatches a relative scroll wheel event to the system.

## Declaration

```objectivec
virtual kern_return_t dispatchRelativeScrollWheelEvent(uint64_t timeStamp, IOFixed dx, IOFixed dy, IOFixed dz, IOOptionBits options, bool accelerate);
```

## Parameters

- `timeStamp`: The timestamp of the event. Use the timestamp of the report element that is the source of the event.
- `dx`: The delta X value.
- `dy`: The delta Y value.
- `dz`: The delta Z value.
- `options`: Additional options for scrolling-related events. Specify `0` for no options. For a list of other values, see [IOHIDScrollEventOptions](../iohidscrolleventoptions.md).
- `accelerate`: Scroll events are subject to an acceleration algorithm. Pass in `false` if you don’t wish to have acceleration logic applied to the scroll event.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Call this method from your event service to dispatch a scroll-wheel event to the system. Typically, you call this method when handling a report from the device, after you determine that the report originated from scroll-wheel hardware or otherwise represents a scrolling event.

## See Also

### Dispatching Events

- [dispatchKeyboardEvent](dispatchkeyboardevent.md): Dispatches a keyboard-related event to the system.
- [dispatchRelativePointerEvent](dispatchrelativepointerevent.md): Dispatches a relative pointer event to the system.
- [dispatchAbsolutePointerEvent](dispatchabsolutepointerevent.md): Dispatches an absolute pointer event to the system.
- [dispatchDigitizerStylusEvent](dispatchdigitizerstylusevent.md): Dispatches a digitizer stylus event to the system.
- [dispatchDigitizerTouchEvent](dispatchdigitizertouchevent.md): Dispatches a digitizer touch event to the system.
- [dispatchEvent](dispatchevent.md): Dispatches a HID event to the system.
- [IOHIDKeyboardEventOptions](../iohidkeyboardeventoptions.md): Options that you use to dispatch keyboard events.
- [IOHIDPointerEventOptions](../iohidpointereventoptions.md): Options that you use to dispatch pointer-related events.
- [IOHIDScrollEventOptions](../iohidscrolleventoptions.md): Options that you use to dispatch scrolling-related events.
