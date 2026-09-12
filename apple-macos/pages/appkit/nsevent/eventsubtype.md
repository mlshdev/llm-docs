> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventsubtype](https://developer.apple.com/documentation/appkit/nsevent/eventsubtype)

# NSEvent.EventSubtype (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Subtypes for various types of events.

## Declaration

```swift
enum EventSubtype
```

<a id="overview"></a>

## Overview

The event subtype contains one of these constants only when the event’s [type](type.md) property contains [NSAppKitDefined](../nsappkitdefined.md), [NSSystemDefined](../nssystemdefined.md), or [NSApplicationDefined](../nsapplicationdefined.md) or a mouse-related event type.

## Topics

### Getting AppKit Event Subtypes

These subtypes apply when the event type is [NSEvent.EventType.appKitDefined](eventtype/appkitdefined.md).

- [NSEvent.EventSubtype.applicationActivated](eventsubtype/applicationactivated.md): An app-activation event occurred.
- [NSEvent.EventSubtype.applicationDeactivated](eventsubtype/applicationdeactivated.md): An app-deactivation event occurred.
- [NSEvent.EventSubtype.screenChanged](eventsubtype/screenchanged.md): An event that indicates a window changed screens.
- [NSEvent.EventSubtype.windowExposed](eventsubtype/windowexposed.md): An event that indicates a window’s contents are visible again.
- [NSEvent.EventSubtype.windowMoved](eventsubtype/windowmoved.md): An event that indicates a window moved.

### Getting System Event Subtypes

This subtype applies when the event type is [NSEvent.EventType.systemDefined](eventtype/systemdefined.md).

- [powerOff](eventsubtype/poweroff.md): An event that indicates a system shutdown or restart operation is in progress.
- [powerOff](eventsubtype/poweroff.md): An event that indicates a system shutdown or restart operation is in progress.

### Getting Other Subtypes

- [mouseEvent](eventsubtype/mouseevent.md): A mouse event occurred.
- [tabletPoint](eventsubtype/tabletpoint.md): A tablet-pointer event occurred.
- [tabletProximity](eventsubtype/tabletproximity.md): A tablet-proximity event occurred.
- [NSEvent.EventSubtype.touch](eventsubtype/touch.md): A touch event occurred.

### Initializers

- [init(rawValue:)](eventsubtype/init%28rawvalue_%29.md)

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
- [NSEvent.EventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEvent.EventTypeMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [subtype](subtype.md): The event’s subtype.

# NSEventSubtype (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Subtypes for various types of events.

## Declaration

```objectivec
enum NSEventSubtype : short;
```

<a id="overview"></a>

## Overview

The event subtype contains one of these constants only when the event’s [type](type.md) property contains [NSAppKitDefined](../nsappkitdefined.md), [NSSystemDefined](../nssystemdefined.md), or [NSApplicationDefined](../nsapplicationdefined.md) or a mouse-related event type.

## Topics

### Getting AppKit Event Subtypes

These subtypes apply when the event type is [NSEventTypeAppKitDefined](eventtype/appkitdefined.md).

- [NSEventSubtypeApplicationActivated](eventsubtype/applicationactivated.md): An app-activation event occurred.
- [NSEventSubtypeApplicationDeactivated](eventsubtype/applicationdeactivated.md): An app-deactivation event occurred.
- [NSEventSubtypeScreenChanged](eventsubtype/screenchanged.md): An event that indicates a window changed screens.
- [NSEventSubtypeWindowExposed](eventsubtype/windowexposed.md): An event that indicates a window’s contents are visible again.
- [NSEventSubtypeWindowMoved](eventsubtype/windowmoved.md): An event that indicates a window moved.

### Getting System Event Subtypes

This subtype applies when the event type is [NSEventTypeSystemDefined](eventtype/systemdefined.md).

- [NSEventSubtypePowerOff](eventsubtype/poweroff.md): An event that indicates a system shutdown or restart operation is in progress.
- [NSEventSubtypePowerOff](eventsubtype/poweroff.md): An event that indicates a system shutdown or restart operation is in progress.

### Getting Other Subtypes

- [NSEventSubtypeMouseEvent](eventsubtype/mouseevent.md): A mouse event occurred.
- [NSEventSubtypeTabletPoint](eventsubtype/tabletpoint.md): A tablet-pointer event occurred.
- [NSEventSubtypeTabletProximity](eventsubtype/tabletproximity.md): A tablet-proximity event occurred.
- [NSEventSubtypeTouch](eventsubtype/touch.md): A touch event occurred.

### Deprecated

- [NSAWTEventType](../nsawteventtype.md): Deprecated. An event type used to support Java applications.
- [NSApplicationActivatedEventType](../nsapplicationactivatedeventtype.md): Deprecated. The application has been activated.
- [NSApplicationDeactivatedEventType](../nsapplicationdeactivatedeventtype.md): Deprecated. The application has been deactivated.
- [NSMouseEventSubtype](../nsmouseeventsubtype.md): Deprecated. Indicates a purely mouse event.
- [NSPowerOffEventType](../nspoweroffeventtype.md): Deprecated. Specifies that the user is turning off the computer.
- [NSScreenChangedEventType](../nsscreenchangedeventtype.md): Deprecated. An NSWindow has changed screens.
- [NSTabletPointEventSubtype](../nstabletpointeventsubtype.md): Deprecated. Indicates a tablet-pointer event; see description of `NSTabletPoint`.
- [NSTabletProximityEventSubtype](../nstabletproximityeventsubtype.md): Deprecated. Indicates a tablet-proximity event; see description of `NSTabletProximity`.
- [NSTouchEventSubtype](../nstoucheventsubtype.md): Deprecated. Indicates a touch event subtype.
- [NSWindowExposedEventType](../nswindowexposedeventtype.md): Deprecated. A non-retained NSWindow has been exposed.
- [NSWindowMovedEventType](../nswindowmovedeventtype.md): Deprecated. An NSWindow has moved.

## See Also

### Getting the event type

- [type](type.md): The event’s type.
- [NSEventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEventMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [subtype](subtype.md): The event’s subtype.
