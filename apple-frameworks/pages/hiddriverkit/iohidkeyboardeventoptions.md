> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidkeyboardeventoptions](https://developer.apple.com/documentation/hiddriverkit/iohidkeyboardeventoptions)

# IOHIDKeyboardEventOptions

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit · macOS

Options that you use to dispatch keyboard events.

## Declaration

```objectivec
typedef enum { ... } IOHIDKeyboardEventOptions;
```

<a id="overview"></a>

## Overview

Pass these options to the [dispatchKeyboardEvent](iohideventservice/dispatchkeyboardevent.md) method of [IOHIDEventService](iohideventservice.md).

## Topics

### Getting the Keyboard Event Option

- [kIOHIDKeyboardEventOptionsNoKeyRepeat](iohidkeyboardeventoptions/kiohidkeyboardeventoptionsnokeyrepeat.md): An option for not applying the default key repeat logic to the event.

## See Also

### Dispatching Events

- [dispatchKeyboardEvent](iohideventservice/dispatchkeyboardevent.md): Dispatches a keyboard-related event to the system.
- [dispatchRelativePointerEvent](iohideventservice/dispatchrelativepointerevent.md): Dispatches a relative pointer event to the system.
- [dispatchAbsolutePointerEvent](iohideventservice/dispatchabsolutepointerevent.md): Dispatches an absolute pointer event to the system.
- [dispatchDigitizerStylusEvent](iohideventservice/dispatchdigitizerstylusevent.md): Dispatches a digitizer stylus event to the system.
- [dispatchDigitizerTouchEvent](iohideventservice/dispatchdigitizertouchevent.md): Dispatches a digitizer touch event to the system.
- [dispatchRelativeScrollWheelEvent](iohideventservice/dispatchrelativescrollwheelevent.md): Dispatches a relative scroll wheel event to the system.
- [dispatchEvent](iohideventservice/dispatchevent.md): Dispatches a HID event to the system.
- [IOHIDPointerEventOptions](iohidpointereventoptions.md): Options that you use to dispatch pointer-related events.
- [IOHIDScrollEventOptions](iohidscrolleventoptions.md): Options that you use to dispatch scrolling-related events.
