> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/event-type-mask](https://developer.apple.com/documentation/coregraphics/event-type-mask)

# Event Type Mask (Swift)

**Framework:** Core Graphics  
**Kind:** API Collection

Specifies an event mask that represents all event types.

<a id="overview"></a>

## Overview

This constant is typically used with the functions [tapCreate(tap:place:options:eventsOfInterest:callback:userInfo:)](cgevent/tapcreate%28tap_place_options_eventsofinterest_callback_userinfo_%29.md) and [tapCreateForPSN(processSerialNumber:place:options:eventsOfInterest:callback:userInfo:)](cgevent/tapcreateforpsn%28processserialnumber_place_options_eventsofinterest_callback_userinfo_%29.md) to register an event tap that observes all input events.

## See Also

### Constants

- [CGEventField](cgeventfield.md): Constants used as keys to access specialized fields in low-level events.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventSourceStateID](cgeventsourcestateid.md): Constants that specify the possible source states of an event source.
- [Event Source Token](event-source-token.md): Specifies any input event type.
- [CGEventSuppressionState](cgeventsuppressionstate.md): Specify the event suppression states that can occur after posting an event.
- [CGEventTapLocation](cgeventtaplocation.md): Constants that specify possible tapping points for events.
- [CGEventTapOptions](cgeventtapoptions.md): Constants that specify whether a new event tap is an active filter or a passive listener.
- [CGEventTapPlacement](cgeventtapplacement.md): Constants that specify where a new event tap is inserted into the list of active event taps.
- [CGEventType](cgeventtype.md): Constants that specify the different types of input events.
- [CGMouseButton](cgmousebutton.md): Constants that specify buttons on a one, two, or three-button mouse.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [CGEventField.mouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGScrollEventUnit](cgscrolleventunit.md): Constants that specify the unit of measurement for a scrolling event.

# Event Type Mask (Objective-C)

**Framework:** Core Graphics  
**Kind:** API Collection

Specifies an event mask that represents all event types.

<a id="overview"></a>

## Overview

This constant is typically used with the functions [CGEventTapCreate](cgevent/tapcreate%28tap_place_options_eventsofinterest_callback_userinfo_%29.md) and [CGEventTapCreateForPSN](cgevent/tapcreateforpsn%28processserialnumber_place_options_eventsofinterest_callback_userinfo_%29.md) to register an event tap that observes all input events.

## Topics

### Constants

- [kCGEventMaskForAllEvents](kcgeventmaskforallevents.md)

## See Also

### Constants

- [CGEventField](cgeventfield.md): Constants used as keys to access specialized fields in low-level events.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventSourceStateID](cgeventsourcestateid.md): Constants that specify the possible source states of an event source.
- [Event Source Token](event-source-token.md): Specifies any input event type.
- [CGEventSuppressionState](cgeventsuppressionstate.md): Specify the event suppression states that can occur after posting an event.
- [CGEventTapLocation](cgeventtaplocation.md): Constants that specify possible tapping points for events.
- [CGEventTapOptions](cgeventtapoptions.md): Constants that specify whether a new event tap is an active filter or a passive listener.
- [CGEventTapPlacement](cgeventtapplacement.md): Constants that specify where a new event tap is inserted into the list of active event taps.
- [CGEventType](cgeventtype.md): Constants that specify the different types of input events.
- [CGMouseButton](cgmousebutton.md): Constants that specify buttons on a one, two, or three-button mouse.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [kCGMouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGScrollEventUnit](cgscrolleventunit.md): Constants that specify the unit of measurement for a scrolling event.
