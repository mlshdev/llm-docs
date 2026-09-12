> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgevent](https://developer.apple.com/documentation/coregraphics/cgevent)

# CGEvent (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

Defines an opaque type that represents a low-level hardware event.

## Declaration

```swift
class CGEvent
```

<a id="overview"></a>

## Overview

Low-level hardware events of this type are referred to as Quartz events. A typical event in macOS originates when the user manipulates an input device such as a mouse or a keyboard. The device driver associated with that device, through the I/O Kit, creates a low-level event, puts it in the window server’s event queue, and notifies the window server. The window server creates a Quartz event, annotates the event, and dispatches the event to the appropriate run-loop port of the target process. There the event is picked up by the Carbon Event Manager and forwarded to the event-handling mechanism appropriate to the application environment. You can use event taps to gain access to Quartz events at several different steps in this process.

This opaque type is derived from CFType and inherits the properties that all Core Foundation types have in common. For more information, see [CFTypeRef](../corefoundation/cftyperef.md).

## Topics

### Initializers

- [copy()](cgevent/copy%28%29.md): Returns a copy of an existing Quartz event.
- [init(keyboardEventSource:virtualKey:keyDown:)](cgevent/init%28keyboardeventsource_virtualkey_keydown_%29.md): Returns a new Quartz keyboard event.
- [init(mouseEventSource:mouseType:mouseCursorPosition:mouseButton:)](cgevent/init%28mouseeventsource_mousetype_mousecursorposition_mousebutton_%29.md): Returns a new Quartz mouse event.
- [init(source:)](cgevent/init%28source_%29.md): Returns a new Quartz event.
- [init(withDataAllocator:data:)](cgevent/init%28withdataallocator_data_%29.md): Returns a Quartz event created from a flattened data representation of the event.
- [init(scrollWheelEvent2Source:units:wheelCount:wheel1:wheel2:wheel3:)](cgevent/init%28scrollwheelevent2source_units_wheelcount_wheel1_wheel2_wheel3_%29.md)

### Instance Properties

- [flags](cgevent/flags.md): Returns the event flags of a Quartz event.
- [location](cgevent/location.md): Returns the location of a Quartz mouse event.
- [timestamp](cgevent/timestamp.md): Returns the timestamp of a Quartz event.
- [type](cgevent/type.md): Returns the event type of a Quartz event (left mouse down, for example).
- [unflippedLocation](cgevent/unflippedlocation.md): Returns the location of a Quartz mouse event.
- [data](cgevent/data.md)

### Type Properties

- [typeID](cgevent/typeid.md): Returns the type identifier for the opaque type `CGEventRef`.

### Instance Methods

- [getDoubleValueField(\_:)](cgevent/getdoublevaluefield%28__%29.md): Returns the floating-point value of a field in a Quartz event.
- [getIntegerValueField(\_:)](cgevent/getintegervaluefield%28__%29.md): Returns the integer value of a field in a Quartz event.
- [keyboardGetUnicodeString(maxStringLength:actualStringLength:unicodeString:)](cgevent/keyboardgetunicodestring%28maxstringlength_actualstringlength_unicodestring_%29.md): Returns the Unicode string associated with a Quartz keyboard event.
- [keyboardSetUnicodeString(stringLength:unicodeString:)](cgevent/keyboardsetunicodestring%28stringlength_unicodestring_%29.md): Sets the Unicode string associated with a Quartz keyboard event.
- [post(tap:)](cgevent/post%28tap_%29.md): Posts a Quartz event into the event stream at a specified location.
- [postToPSN(processSerialNumber:)](cgevent/posttopsn%28processserialnumber_%29.md): Posts a Quartz event into the event stream for a specific application.
- [postToPid(\_:)](cgevent/posttopid%28__%29.md)
- [setDoubleValueField(\_:value:)](cgevent/setdoublevaluefield%28__value_%29.md): Sets the floating-point value of a field in a Quartz event.
- [setIntegerValueField(\_:value:)](cgevent/setintegervaluefield%28__value_%29.md): Sets the integer value of a field in a Quartz event.
- [setSource(\_:)](cgevent/setsource%28__%29.md): Sets the event source of a Quartz event.
- [tapPostEvent(\_:)](cgevent/tappostevent%28__%29.md): Posts a Quartz event from an event tap into the event stream.

### Type Methods

- [tapCreate(tap:place:options:eventsOfInterest:callback:userInfo:)](cgevent/tapcreate%28tap_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap.
- [tapCreateForPSN(processSerialNumber:place:options:eventsOfInterest:callback:userInfo:)](cgevent/tapcreateforpsn%28processserialnumber_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap for a specified process.
- [tapCreateForPid(pid:place:options:eventsOfInterest:callback:userInfo:)](cgevent/tapcreateforpid%28pid_place_options_eventsofinterest_callback_userinfo_%29.md)
- [tapEnable(tap:enable:)](cgevent/tapenable%28tap_enable_%29.md): Enables or disables an event tap.
- [tapIsEnabled(tap:)](cgevent/tapisenabled%28tap_%29.md): Returns a Boolean value indicating whether an event tap is enabled.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data Types

- [CGButtonCount](cgbuttoncount.md): Represents the number of buttons being set in a synthetic mouse event.
- [CGCharCode](cgcharcode.md): Represents a character generated by pressing one or more keys on a keyboard.
- [CGDirectDisplayID](cgdirectdisplayid.md): A unique identifier for an attached display.
- [CGDisplayBlendFraction](cgdisplayblendfraction.md): The percentage of blend color used in a fade operation.
- [CGDisplayConfigRef](cgdisplayconfigref.md): A reference to a display configuration transaction.
- [CGDisplayCount](cgdisplaycount.md): Deprecated. The number of displays in various lists.
- [CGDisplayErr](cgdisplayerr.md): Deprecated. A uniform type for result codes returned by functions in Quartz Display Services.
- [CGDisplayFadeInterval](cgdisplayfadeinterval.md): The duration in seconds of a fade operation or a fade hardware reservation.
- [CGDisplayFadeReservationToken](cgdisplayfadereservationtoken.md): A token issued by Quartz when reserving one or more displays for a fade operation during a specified interval.
- [CGDisplayMode](cgdisplaymode.md): A reference to a display mode object.
- [CGDisplayReconfigurationCallBack](cgdisplayreconfigurationcallback.md): A client-supplied callback function that’s invoked whenever the configuration of a local display is changed.
- [CGDisplayReservationInterval](cgdisplayreservationinterval.md): The time interval for a fade reservation.
- [CGDisplayStream](cgdisplaystream.md): A reference to a display stream object.
- [CGDisplayStreamFrameAvailableHandler](cgdisplaystreamframeavailablehandler.md): A block called when a data stream has a new frame event to process.
- [CGDisplayStreamUpdate](cgdisplaystreamupdate.md): A reference to frame update’s metadata.

# CGEventRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

Defines an opaque type that represents a low-level hardware event.

## Declaration

```objectivec
typedef struct __CGEvent * CGEventRef;
```

<a id="overview"></a>

## Overview

Low-level hardware events of this type are referred to as Quartz events. A typical event in macOS originates when the user manipulates an input device such as a mouse or a keyboard. The device driver associated with that device, through the I/O Kit, creates a low-level event, puts it in the window server’s event queue, and notifies the window server. The window server creates a Quartz event, annotates the event, and dispatches the event to the appropriate run-loop port of the target process. There the event is picked up by the Carbon Event Manager and forwarded to the event-handling mechanism appropriate to the application environment. You can use event taps to gain access to Quartz events at several different steps in this process.

This opaque type is derived from CFType and inherits the properties that all Core Foundation types have in common. For more information, see [CFTypeRef](../corefoundation/cftyperef.md).

## Topics

### Initializers

- [CGEventCreateCopy](cgevent/copy%28%29.md): Returns a copy of an existing Quartz event.
- [CGEventCreateKeyboardEvent](cgevent/init%28keyboardeventsource_virtualkey_keydown_%29.md): Returns a new Quartz keyboard event.
- [CGEventCreateMouseEvent](cgevent/init%28mouseeventsource_mousetype_mousecursorposition_mousebutton_%29.md): Returns a new Quartz mouse event.
- [CGEventCreate](cgevent/init%28source_%29.md): Returns a new Quartz event.
- [CGEventCreateFromData](cgevent/init%28withdataallocator_data_%29.md): Returns a Quartz event created from a flattened data representation of the event.
- [CGEventCreateScrollWheelEvent2](cgevent/init%28scrollwheelevent2source_units_wheelcount_wheel1_wheel2_wheel3_%29.md)

### Instance Properties

- [CGEventGetFlags](cgevent/flags.md): Returns the event flags of a Quartz event.
- [CGEventGetLocation](cgevent/location.md): Returns the location of a Quartz mouse event.
- [CGEventGetTimestamp](cgevent/timestamp.md): Returns the timestamp of a Quartz event.
- [CGEventGetType](cgevent/type.md): Returns the event type of a Quartz event (left mouse down, for example).
- [CGEventGetUnflippedLocation](cgevent/unflippedlocation.md): Returns the location of a Quartz mouse event.

### Type Properties

- [CGEventGetTypeID](cgevent/typeid.md): Returns the type identifier for the opaque type `CGEventRef`.

### Instance Methods

- [CGEventGetDoubleValueField](cgevent/getdoublevaluefield%28__%29.md): Returns the floating-point value of a field in a Quartz event.
- [CGEventGetIntegerValueField](cgevent/getintegervaluefield%28__%29.md): Returns the integer value of a field in a Quartz event.
- [CGEventKeyboardGetUnicodeString](cgevent/keyboardgetunicodestring%28maxstringlength_actualstringlength_unicodestring_%29.md): Returns the Unicode string associated with a Quartz keyboard event.
- [CGEventKeyboardSetUnicodeString](cgevent/keyboardsetunicodestring%28stringlength_unicodestring_%29.md): Sets the Unicode string associated with a Quartz keyboard event.
- [CGEventPost](cgevent/post%28tap_%29.md): Posts a Quartz event into the event stream at a specified location.
- [CGEventPostToPSN](cgevent/posttopsn%28processserialnumber_%29.md): Posts a Quartz event into the event stream for a specific application.
- [CGEventPostToPid](cgevent/posttopid%28__%29.md)
- [CGEventSetDoubleValueField](cgevent/setdoublevaluefield%28__value_%29.md): Sets the floating-point value of a field in a Quartz event.
- [CGEventSetIntegerValueField](cgevent/setintegervaluefield%28__value_%29.md): Sets the integer value of a field in a Quartz event.
- [CGEventSetSource](cgevent/setsource%28__%29.md): Sets the event source of a Quartz event.
- [CGEventTapPostEvent](cgevent/tappostevent%28__%29.md): Posts a Quartz event from an event tap into the event stream.

### Type Methods

- [CGEventTapCreate](cgevent/tapcreate%28tap_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap.
- [CGEventTapCreateForPSN](cgevent/tapcreateforpsn%28processserialnumber_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap for a specified process.
- [CGEventTapCreateForPid](cgevent/tapcreateforpid%28pid_place_options_eventsofinterest_callback_userinfo_%29.md)
- [CGEventTapEnable](cgevent/tapenable%28tap_enable_%29.md): Enables or disables an event tap.
- [CGEventTapIsEnabled](cgevent/tapisenabled%28tap_%29.md): Returns a Boolean value indicating whether an event tap is enabled.

## See Also

### Data Types

- [CGButtonCount](cgbuttoncount.md): Represents the number of buttons being set in a synthetic mouse event.
- [CGCharCode](cgcharcode.md): Represents a character generated by pressing one or more keys on a keyboard.
- [CGDirectDisplayID](cgdirectdisplayid.md): A unique identifier for an attached display.
- [CGDisplayBlendFraction](cgdisplayblendfraction.md): The percentage of blend color used in a fade operation.
- [CGDisplayConfigRef](cgdisplayconfigref.md): A reference to a display configuration transaction.
- [CGDisplayCount](cgdisplaycount.md): Deprecated. The number of displays in various lists.
- [CGDisplayErr](cgdisplayerr.md): Deprecated. A uniform type for result codes returned by functions in Quartz Display Services.
- [CGDisplayFadeInterval](cgdisplayfadeinterval.md): The duration in seconds of a fade operation or a fade hardware reservation.
- [CGDisplayFadeReservationToken](cgdisplayfadereservationtoken.md): A token issued by Quartz when reserving one or more displays for a fade operation during a specified interval.
- [CGDisplayModeRef](cgdisplaymode.md): A reference to a display mode object.
- [CGDisplayReconfigurationCallBack](cgdisplayreconfigurationcallback.md): A client-supplied callback function that’s invoked whenever the configuration of a local display is changed.
- [CGDisplayReservationInterval](cgdisplayreservationinterval.md): The time interval for a fade reservation.
- [CGDisplayStreamRef](cgdisplaystream.md): A reference to a display stream object.
- [CGDisplayStreamFrameAvailableHandler](cgdisplaystreamframeavailablehandler.md): A block called when a data stream has a new frame event to process.
- [CGDisplayStreamUpdateRef](cgdisplaystreamupdate.md): A reference to frame update’s metadata.
