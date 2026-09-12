> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventtype](https://developer.apple.com/documentation/coregraphics/cgeventtype)

# CGEventType (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Constants that specify the different types of input events.

## Declaration

```swift
enum CGEventType
```

<a id="overview"></a>

## Overview

These constants are used:

- In the functions [tapCreate(tap:place:options:eventsOfInterest:callback:userInfo:)](cgevent/tapcreate%28tap_place_options_eventsofinterest_callback_userinfo_%29.md) and [tapCreateForPSN(processSerialNumber:place:options:eventsOfInterest:callback:userInfo:)](cgevent/tapcreateforpsn%28processserialnumber_place_options_eventsofinterest_callback_userinfo_%29.md) to specify the events of interest for the new event tap.
- To indicate the event type passed to your event tap callback function.
- In the function [init(mouseEventSource:mouseType:mouseCursorPosition:mouseButton:)](cgevent/init%28mouseeventsource_mousetype_mousecursorposition_mousebutton_%29.md) to specify the type of mouse event.
- In the functions [type](cgevent/type.md) and [CGEventSetType](cgeventsettype.md) to identify the event type.
- In the functions [counterForEventType(\_:eventType:)](cgeventsource/counterforeventtype%28__eventtype_%29.md) and [secondsSinceLastEventType(\_:eventType:)](cgeventsource/secondssincelasteventtype%28__eventtype_%29.md) to indicate the event type.

Note that tablet devices may generate mouse events with embedded tablet data, or tablet pointer and proximity events. Tablet mouse events allow tablets to be used with applications that are not tablet-aware.

## Topics

### Constants

- [CGEventType.null](cgeventtype/null.md): Specifies a null event.
- [CGEventType.leftMouseDown](cgeventtype/leftmousedown.md): Specifies a mouse down event with the left button.
- [CGEventType.leftMouseUp](cgeventtype/leftmouseup.md): Specifies a mouse up event with the left button.
- [CGEventType.rightMouseDown](cgeventtype/rightmousedown.md): Specifies a mouse down event with the right button.
- [CGEventType.rightMouseUp](cgeventtype/rightmouseup.md): Specifies a mouse up event with the right button.
- [CGEventType.mouseMoved](cgeventtype/mousemoved.md): Specifies a mouse moved event.
- [CGEventType.leftMouseDragged](cgeventtype/leftmousedragged.md): Specifies a mouse drag event with the left button down.
- [CGEventType.rightMouseDragged](cgeventtype/rightmousedragged.md): Specifies a mouse drag event with the right button down.
- [CGEventType.keyDown](cgeventtype/keydown.md): Specifies a key down event.
- [CGEventType.keyUp](cgeventtype/keyup.md): Specifies a key up event.
- [CGEventType.flagsChanged](cgeventtype/flagschanged.md): Specifies a key changed event for a modifier or status key.
- [CGEventType.scrollWheel](cgeventtype/scrollwheel.md): Specifies a scroll wheel moved event.
- [CGEventType.tabletPointer](cgeventtype/tabletpointer.md): Specifies a tablet pointer event.
- [CGEventType.tabletProximity](cgeventtype/tabletproximity.md): Specifies a tablet proximity event.
- [CGEventType.otherMouseDown](cgeventtype/othermousedown.md): Specifies a mouse down event with one of buttons 2-31.
- [CGEventType.otherMouseUp](cgeventtype/othermouseup.md): Specifies a mouse up event with one of buttons 2-31.
- [CGEventType.otherMouseDragged](cgeventtype/othermousedragged.md): Specifies a mouse drag event with one of buttons 2-31 down.
- [CGEventType.tapDisabledByTimeout](cgeventtype/tapdisabledbytimeout.md): Specifies an event indicating the event tap is disabled because of timeout.
- [CGEventType.tapDisabledByUserInput](cgeventtype/tapdisabledbyuserinput.md): Specifies an event indicating the event tap is disabled because of user input.

### Initializers

- [init(rawValue:)](cgeventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
- [CGColorRenderingIntent](cgcolorrenderingintent.md): Handling options for colors that are not located within the destination color space of a graphics context.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
- [CGDisplayStreamFrameStatus](cgdisplaystreamframestatus.md): Describes a frame update event.
- [CGDisplayStreamUpdateRectType](cgdisplaystreamupdaterecttype.md): Use these constants to determine which rectangles your app is interested in.
- [CGError](cgerror.md): A uniform type for result codes returned by functions in Core Graphics.
- [CGEventField](cgeventfield.md): Constants used as keys to access specialized fields in low-level events.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [CGEventField.mouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGEventSourceStateID](cgeventsourcestateid.md): Constants that specify the possible source states of an event source.
- [CGEventSuppressionState](cgeventsuppressionstate.md): Specify the event suppression states that can occur after posting an event.
- [CGEventTapLocation](cgeventtaplocation.md): Constants that specify possible tapping points for events.

# CGEventType (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Constants that specify the different types of input events.

## Declaration

```objectivec
enum CGEventType : uint32_t;
```

<a id="overview"></a>

## Overview

These constants are used:

- In the functions [CGEventTapCreate](cgevent/tapcreate%28tap_place_options_eventsofinterest_callback_userinfo_%29.md) and [CGEventTapCreateForPSN](cgevent/tapcreateforpsn%28processserialnumber_place_options_eventsofinterest_callback_userinfo_%29.md) to specify the events of interest for the new event tap.
- To indicate the event type passed to your event tap callback function.
- In the function [CGEventCreateMouseEvent](cgevent/init%28mouseeventsource_mousetype_mousecursorposition_mousebutton_%29.md) to specify the type of mouse event.
- In the functions [CGEventGetType](cgevent/type.md) and [CGEventSetType](cgeventsettype.md) to identify the event type.
- In the functions [CGEventSourceCounterForEventType](cgeventsource/counterforeventtype%28__eventtype_%29.md) and [CGEventSourceSecondsSinceLastEventType](cgeventsource/secondssincelasteventtype%28__eventtype_%29.md) to indicate the event type.

Note that tablet devices may generate mouse events with embedded tablet data, or tablet pointer and proximity events. Tablet mouse events allow tablets to be used with applications that are not tablet-aware.

## Topics

### Constants

- [kCGEventNull](cgeventtype/null.md): Specifies a null event.
- [kCGEventLeftMouseDown](cgeventtype/leftmousedown.md): Specifies a mouse down event with the left button.
- [kCGEventLeftMouseUp](cgeventtype/leftmouseup.md): Specifies a mouse up event with the left button.
- [kCGEventRightMouseDown](cgeventtype/rightmousedown.md): Specifies a mouse down event with the right button.
- [kCGEventRightMouseUp](cgeventtype/rightmouseup.md): Specifies a mouse up event with the right button.
- [kCGEventMouseMoved](cgeventtype/mousemoved.md): Specifies a mouse moved event.
- [kCGEventLeftMouseDragged](cgeventtype/leftmousedragged.md): Specifies a mouse drag event with the left button down.
- [kCGEventRightMouseDragged](cgeventtype/rightmousedragged.md): Specifies a mouse drag event with the right button down.
- [kCGEventKeyDown](cgeventtype/keydown.md): Specifies a key down event.
- [kCGEventKeyUp](cgeventtype/keyup.md): Specifies a key up event.
- [kCGEventFlagsChanged](cgeventtype/flagschanged.md): Specifies a key changed event for a modifier or status key.
- [kCGEventScrollWheel](cgeventtype/scrollwheel.md): Specifies a scroll wheel moved event.
- [kCGEventTabletPointer](cgeventtype/tabletpointer.md): Specifies a tablet pointer event.
- [kCGEventTabletProximity](cgeventtype/tabletproximity.md): Specifies a tablet proximity event.
- [kCGEventOtherMouseDown](cgeventtype/othermousedown.md): Specifies a mouse down event with one of buttons 2-31.
- [kCGEventOtherMouseUp](cgeventtype/othermouseup.md): Specifies a mouse up event with one of buttons 2-31.
- [kCGEventOtherMouseDragged](cgeventtype/othermousedragged.md): Specifies a mouse drag event with one of buttons 2-31 down.
- [kCGEventTapDisabledByTimeout](cgeventtype/tapdisabledbytimeout.md): Specifies an event indicating the event tap is disabled because of timeout.
- [kCGEventTapDisabledByUserInput](cgeventtype/tapdisabledbyuserinput.md): Specifies an event indicating the event tap is disabled because of user input.

## See Also

### Enumerations

- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
- [CGColorRenderingIntent](cgcolorrenderingintent.md): Handling options for colors that are not located within the destination color space of a graphics context.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
- [CGDisplayStreamFrameStatus](cgdisplaystreamframestatus.md): Describes a frame update event.
- [CGDisplayStreamUpdateRectType](cgdisplaystreamupdaterecttype.md): Use these constants to determine which rectangles your app is interested in.
- [CGError](cgerror.md): A uniform type for result codes returned by functions in Core Graphics.
- [CGEventField](cgeventfield.md): Constants used as keys to access specialized fields in low-level events.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [kCGMouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGEventSourceStateID](cgeventsourcestateid.md): Constants that specify the possible source states of an event source.
- [CGEventSuppressionState](cgeventsuppressionstate.md): Specify the event suppression states that can occur after posting an event.
- [CGEventTapLocation](cgeventtaplocation.md): Constants that specify possible tapping points for events.
