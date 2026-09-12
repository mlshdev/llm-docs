> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohideventservice/dispatchevent](https://developer.apple.com/documentation/hiddriverkit/iohideventservice/dispatchevent)

# dispatchEvent

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Dispatches a HID event to the system.

## Declaration

```objectivec
virtual void dispatchEvent(IOHIDEvent *event);
```

## Parameters

- `event`: The event to dispatch.

<a id="Discussion"></a>

## Discussion

This method is a funnel point for dispatching events to the system’s registered clients. You can also call it directly to dispatch events for which you create an `IOHIDEvent` object.

## See Also

### Dispatching Events

- [dispatchKeyboardEvent](dispatchkeyboardevent.md): Dispatches a keyboard-related event to the system.
- [dispatchRelativePointerEvent](dispatchrelativepointerevent.md): Dispatches a relative pointer event to the system.
- [dispatchAbsolutePointerEvent](dispatchabsolutepointerevent.md): Dispatches an absolute pointer event to the system.
- [dispatchDigitizerStylusEvent](dispatchdigitizerstylusevent.md): Dispatches a digitizer stylus event to the system.
- [dispatchDigitizerTouchEvent](dispatchdigitizertouchevent.md): Dispatches a digitizer touch event to the system.
- [dispatchRelativeScrollWheelEvent](dispatchrelativescrollwheelevent.md): Dispatches a relative scroll wheel event to the system.
- [IOHIDKeyboardEventOptions](../iohidkeyboardeventoptions.md): Options that you use to dispatch keyboard events.
- [IOHIDPointerEventOptions](../iohidpointereventoptions.md): Options that you use to dispatch pointer-related events.
- [IOHIDScrollEventOptions](../iohidscrolleventoptions.md): Options that you use to dispatch scrolling-related events.
