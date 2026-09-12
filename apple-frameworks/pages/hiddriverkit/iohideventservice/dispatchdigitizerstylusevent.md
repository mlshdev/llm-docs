> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohideventservice/dispatchdigitizerstylusevent](https://developer.apple.com/documentation/hiddriverkit/iohideventservice/dispatchdigitizerstylusevent)

# dispatchDigitizerStylusEvent

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Dispatches a digitizer stylus event to the system.

## Declaration

```objectivec
virtual kern_return_t dispatchDigitizerStylusEvent(uint64_t timeStamp, IOHIDDigitizerStylusData *stylusData);
```

## Parameters

- `timeStamp`: The timestamp of the event. Use the timestamp of the report element that is the source of the event.
- `stylusData`: A structure containing the stylus data. For more information, see [IOHIDDigitizerStylusData](../iohiddigitizerstylusdata.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses must override it to dispatch stylus events.

## See Also

### Dispatching Events

- [dispatchKeyboardEvent](dispatchkeyboardevent.md): Dispatches a keyboard-related event to the system.
- [dispatchRelativePointerEvent](dispatchrelativepointerevent.md): Dispatches a relative pointer event to the system.
- [dispatchAbsolutePointerEvent](dispatchabsolutepointerevent.md): Dispatches an absolute pointer event to the system.
- [dispatchDigitizerTouchEvent](dispatchdigitizertouchevent.md): Dispatches a digitizer touch event to the system.
- [dispatchRelativeScrollWheelEvent](dispatchrelativescrollwheelevent.md): Dispatches a relative scroll wheel event to the system.
- [dispatchEvent](dispatchevent.md): Dispatches a HID event to the system.
- [IOHIDKeyboardEventOptions](../iohidkeyboardeventoptions.md): Options that you use to dispatch keyboard events.
- [IOHIDPointerEventOptions](../iohidpointereventoptions.md): Options that you use to dispatch pointer-related events.
- [IOHIDScrollEventOptions](../iohidscrolleventoptions.md): Options that you use to dispatch scrolling-related events.
