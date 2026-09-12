> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtype](https://developer.apple.com/documentation/appkit/nsevent/eventtype)

# NSEvent.EventType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants for the types of events that responder objects can handle.

## Declaration

```swift
enum EventType
```

<a id="overview"></a>

## Overview

These constants appear in the event’s [type](type.md) property. You also use them when you construct new events.

## Topics

### Getting Mouse-Related Event Types

- [NSEvent.EventType.leftMouseDown](eventtype/leftmousedown.md): The user pressed the left mouse button.
- [NSEvent.EventType.leftMouseDragged](eventtype/leftmousedragged.md): The user moved the mouse while holding down the left mouse button.
- [NSEvent.EventType.leftMouseUp](eventtype/leftmouseup.md): The user released the left mouse button.
- [NSEvent.EventType.rightMouseDown](eventtype/rightmousedown.md): The user pressed the right mouse button.
- [NSEvent.EventType.rightMouseUp](eventtype/rightmouseup.md): The user released the right mouse button.
- [NSEvent.EventType.rightMouseDragged](eventtype/rightmousedragged.md): The user moved the mouse while holding down the right mouse button.
- [NSEvent.EventType.otherMouseDown](eventtype/othermousedown.md): The user pressed a tertiary mouse button.
- [NSEvent.EventType.otherMouseDragged](eventtype/othermousedragged.md): The user moved the mouse while holding down a tertiary mouse button.
- [NSEvent.EventType.otherMouseUp](eventtype/othermouseup.md): The user released a tertiary mouse button.
- [NSEvent.EventType.mouseMoved](eventtype/mousemoved.md): The user moved the mouse in a way that caused the cursor to move onscreen.
- [NSEvent.EventType.mouseEntered](eventtype/mouseentered.md): The cursor entered a well-defined area, such as a view.
- [NSEvent.EventType.mouseExited](eventtype/mouseexited.md): The cursor exited a well-defined area, such as a view.

### Getting Keyboard Event Types

- [NSEvent.EventType.keyDown](eventtype/keydown.md): The user pressed a key on the keyboard.
- [NSEvent.EventType.keyUp](eventtype/keyup.md): The user released a key on the keyboard.

### Getting Touch-Based Events

- [NSEvent.EventType.beginGesture](eventtype/begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEvent.EventType.endGesture](eventtype/endgesture.md): Deprecated. An event that marks the end of a gesture.
- [NSEvent.EventType.magnify](eventtype/magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEvent.EventType.smartMagnify](eventtype/smartmagnify.md): The user performed a smart-zoom gesture.
- [NSEvent.EventType.swipe](eventtype/swipe.md): The user performed a swipe gesture.
- [NSEvent.EventType.rotate](eventtype/rotate.md): The user performed a rotate gesture.
- [NSEvent.EventType.gesture](eventtype/gesture.md): The user performed a nonspecific type of gesture.
- [NSEvent.EventType.directTouch](eventtype/directtouch.md): The user touched a portion of the touch bar.
- [NSEvent.EventType.tabletPoint](eventtype/tabletpoint.md): The user touched a point on a tablet.
- [NSEvent.EventType.tabletProximity](eventtype/tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEvent.EventType.pressure](eventtype/pressure.md): An event that reports a change in pressure on a pressure-sensitive device.

### Getting Other Input Types

- [NSEvent.EventType.scrollWheel](eventtype/scrollwheel.md): The scroll wheel position changed.
- [NSEvent.EventType.changeMode](eventtype/changemode.md): The user changed the mode of a connected device.

### Getting System Event Types

- [NSEvent.EventType.appKitDefined](eventtype/appkitdefined.md): An AppKit-related event occurred.
- [NSEvent.EventType.applicationDefined](eventtype/applicationdefined.md): An app-defined event occurred.
- [NSEvent.EventType.cursorUpdate](eventtype/cursorupdate.md): An event that updates the cursor.
- [NSEvent.EventType.flagsChanged](eventtype/flagschanged.md): The event flags changed.
- [NSEvent.EventType.periodic](eventtype/periodic.md): An event that provides execution time to periodic tasks.
- [NSEvent.EventType.quickLook](eventtype/quicklook.md): An event that initiates a Quick Look request.
- [NSEvent.EventType.systemDefined](eventtype/systemdefined.md): A system-related event occurred.

### Enumeration Cases

- [NSEvent.EventType.mouseCancelled](eventtype/mousecancelled.md)

### Initializers

- [init(rawValue:)](eventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the event type

- [type](type.md): The event’s type.
- [NSEvent.EventTypeMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [subtype](subtype.md): The event’s subtype.
- [NSEvent.EventSubtype](eventsubtype.md): Subtypes for various types of events.

# NSEventType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants for the types of events that responder objects can handle.

## Declaration

```objectivec
enum NSEventType : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants appear in the event’s [type](type.md) property. You also use them when you construct new events.

## Topics

### Getting Mouse-Related Event Types

- [NSEventTypeLeftMouseDown](eventtype/leftmousedown.md): The user pressed the left mouse button.
- [NSEventTypeLeftMouseDragged](eventtype/leftmousedragged.md): The user moved the mouse while holding down the left mouse button.
- [NSEventTypeLeftMouseUp](eventtype/leftmouseup.md): The user released the left mouse button.
- [NSEventTypeRightMouseDown](eventtype/rightmousedown.md): The user pressed the right mouse button.
- [NSEventTypeRightMouseUp](eventtype/rightmouseup.md): The user released the right mouse button.
- [NSEventTypeRightMouseDragged](eventtype/rightmousedragged.md): The user moved the mouse while holding down the right mouse button.
- [NSEventTypeOtherMouseDown](eventtype/othermousedown.md): The user pressed a tertiary mouse button.
- [NSEventTypeOtherMouseDragged](eventtype/othermousedragged.md): The user moved the mouse while holding down a tertiary mouse button.
- [NSEventTypeOtherMouseUp](eventtype/othermouseup.md): The user released a tertiary mouse button.
- [NSEventTypeMouseMoved](eventtype/mousemoved.md): The user moved the mouse in a way that caused the cursor to move onscreen.
- [NSEventTypeMouseEntered](eventtype/mouseentered.md): The cursor entered a well-defined area, such as a view.
- [NSEventTypeMouseExited](eventtype/mouseexited.md): The cursor exited a well-defined area, such as a view.

### Getting Keyboard Event Types

- [NSEventTypeKeyDown](eventtype/keydown.md): The user pressed a key on the keyboard.
- [NSEventTypeKeyUp](eventtype/keyup.md): The user released a key on the keyboard.

### Getting Touch-Based Events

- [NSEventTypeBeginGesture](eventtype/begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEventTypeEndGesture](eventtype/endgesture.md): Deprecated. An event that marks the end of a gesture.
- [NSEventTypeMagnify](eventtype/magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEventTypeSmartMagnify](eventtype/smartmagnify.md): The user performed a smart-zoom gesture.
- [NSEventTypeSwipe](eventtype/swipe.md): The user performed a swipe gesture.
- [NSEventTypeRotate](eventtype/rotate.md): The user performed a rotate gesture.
- [NSEventTypeGesture](eventtype/gesture.md): The user performed a nonspecific type of gesture.
- [NSEventTypeDirectTouch](eventtype/directtouch.md): The user touched a portion of the touch bar.
- [NSEventTypeTabletPoint](eventtype/tabletpoint.md): The user touched a point on a tablet.
- [NSEventTypeTabletProximity](eventtype/tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEventTypePressure](eventtype/pressure.md): An event that reports a change in pressure on a pressure-sensitive device.

### Getting Other Input Types

- [NSEventTypeScrollWheel](eventtype/scrollwheel.md): The scroll wheel position changed.
- [NSEventTypeChangeMode](eventtype/changemode.md): The user changed the mode of a connected device.

### Getting System Event Types

- [NSEventTypeAppKitDefined](eventtype/appkitdefined.md): An AppKit-related event occurred.
- [NSEventTypeApplicationDefined](eventtype/applicationdefined.md): An app-defined event occurred.
- [NSEventTypeCursorUpdate](eventtype/cursorupdate.md): An event that updates the cursor.
- [NSEventTypeFlagsChanged](eventtype/flagschanged.md): The event flags changed.
- [NSEventTypePeriodic](eventtype/periodic.md): An event that provides execution time to periodic tasks.
- [NSEventTypeQuickLook](eventtype/quicklook.md): An event that initiates a Quick Look request.
- [NSEventTypeSystemDefined](eventtype/systemdefined.md): A system-related event occurred.

### Deprecated

- [NSLeftMouseDown](../nsleftmousedown.md): Deprecated. A left mouse-down event.
- [NSLeftMouseUp](../nsleftmouseup.md): Deprecated. A left mouse-up event.
- [NSRightMouseDown](../nsrightmousedown.md): Deprecated. A right mouse-down event.
- [NSRightMouseUp](../nsrightmouseup.md): Deprecated. A right mouse-up event.
- [NSOtherMouseDown](../nsothermousedown.md): Deprecated. An other mouse-down event.
- [NSOtherMouseUp](../nsothermouseup.md): Deprecated. An other mouse-up event.
- [NSMouseMoved](../nsmousemoved.md): Deprecated. A mouse-moved event.
- [NSLeftMouseDragged](../nsleftmousedragged.md): Deprecated. A left mouse-dragged event.
- [NSRightMouseDragged](../nsrightmousedragged.md): Deprecated. A right mouse-dragged event.
- [NSOtherMouseDragged](../nsothermousedragged.md): Deprecated. An other mouse-dragged event.
- [NSMouseEntered](../nsmouseentered.md): Deprecated. A mouse-entered event.
- [NSMouseExited](../nsmouseexited.md): Deprecated. A mouse-exited event.
- [NSCursorUpdate](../nscursorupdate.md): Deprecated. A cursor-update event.
- [NSKeyDown](../nskeydown.md): Deprecated. A key-down event.
- [NSKeyUp](../nskeyup.md): Deprecated. A key-up event.
- [NSFlagsChanged](../nsflagschanged.md): Deprecated. A flags-changed event.
- [NSAppKitDefined](../nsappkitdefined.md): Deprecated. An AppKit-defined event.
- [NSSystemDefined](../nssystemdefined.md): Deprecated. A system-defined event.
- [NSApplicationDefined](../nsapplicationdefined.md): Deprecated. An app-defined event.
- [NSPeriodic](../nsperiodic.md): Deprecated. A periodic event.
- [NSScrollWheel](../nsscrollwheel.md): Deprecated. A scroll-wheel event.
- [NSTabletPoint](../nstabletpoint.md): Deprecated. An event representing the current state of a tablet pointing device, including its location, pressure, and tilt.
- [NSTabletProximity](../nstabletproximity.md): Deprecated. An event representing the proximity of a pointing device to its tablet.

### Enumeration Cases

- [NSEventTypeMouseCancelled](eventtype/mousecancelled.md)

## See Also

### Getting the event type

- [type](type.md): The event’s type.
- [NSEventMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [subtype](subtype.md): The event’s subtype.
- [NSEventSubtype](eventsubtype.md): Subtypes for various types of events.
