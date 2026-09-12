> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/quartz-event-services](https://developer.apple.com/documentation/coregraphics/quartz-event-services)

# Quartz Event Services (Swift)

**Framework:** Core Graphics  
**Kind:** API Collection

Provides features for managing *event taps*—filters for observing and altering the stream of low-level user input events in macOS.

<a id="overview"></a>

## Overview

Event taps make it possible to monitor and filter input events from several points within the system, prior to their delivery to a foreground application. Event taps complement and extend the capabilities of the Carbon event monitor mechanism, which allows an application to observe input events delivered to other processes.

Event taps are designed to serve as a Section 508 enabling technology. For example, consider a software system to assist a person with language impairments, designed to perform keyboard filtering with spoken review. Such a system could use an event tap to monitor all keystrokes, perform dictionary checks and matches, and recite the assembled word back to the user on detection of a word break in the input stream. If acceptable to the user, as indicated by an additional input keystroke or other gesture, the events would be posted into the system for delivery to the foreground application.

Introduced in OS X version 10.4, event taps provide functionality similar to the Win32 functions `SetWinEventHook` when used to establish an out-of-context event hook, and `SendInput`. Quartz Event Services also includes an older set of event-related functions declared in the file `CGRemoteOperation.h`. These functions are still supported, but they are not recommended for new development.

## Topics

### Working With Events

- [typeID](cgevent/typeid.md): Returns the type identifier for the opaque type `CGEventRef`.
- [init(source:)](cgevent/init%28source_%29.md): Returns a new Quartz event.
- [init(withDataAllocator:data:)](cgevent/init%28withdataallocator_data_%29.md): Returns a Quartz event created from a flattened data representation of the event.
- [init(mouseEventSource:mouseType:mouseCursorPosition:mouseButton:)](cgevent/init%28mouseeventsource_mousetype_mousecursorposition_mousebutton_%29.md): Returns a new Quartz mouse event.
- [init(keyboardEventSource:virtualKey:keyDown:)](cgevent/init%28keyboardeventsource_virtualkey_keydown_%29.md): Returns a new Quartz keyboard event.
- [copy()](cgevent/copy%28%29.md): Returns a copy of an existing Quartz event.
- [init(event:)](cgeventsource/init%28event_%29.md): Returns a Quartz event source created from an existing Quartz event.
- [setSource(\_:)](cgevent/setsource%28__%29.md): Sets the event source of a Quartz event.
- [type](cgevent/type.md): Returns the event type of a Quartz event (left mouse down, for example).
- [timestamp](cgevent/timestamp.md): Returns the timestamp of a Quartz event.
- [location](cgevent/location.md): Returns the location of a Quartz mouse event.
- [unflippedLocation](cgevent/unflippedlocation.md): Returns the location of a Quartz mouse event.
- [flags](cgevent/flags.md): Returns the event flags of a Quartz event.
- [keyboardGetUnicodeString(maxStringLength:actualStringLength:unicodeString:)](cgevent/keyboardgetunicodestring%28maxstringlength_actualstringlength_unicodestring_%29.md): Returns the Unicode string associated with a Quartz keyboard event.
- [keyboardSetUnicodeString(stringLength:unicodeString:)](cgevent/keyboardsetunicodestring%28stringlength_unicodestring_%29.md): Sets the Unicode string associated with a Quartz keyboard event.
- [getIntegerValueField(\_:)](cgevent/getintegervaluefield%28__%29.md): Returns the integer value of a field in a Quartz event.
- [setIntegerValueField(\_:value:)](cgevent/setintegervaluefield%28__value_%29.md): Sets the integer value of a field in a Quartz event.
- [getDoubleValueField(\_:)](cgevent/getdoublevaluefield%28__%29.md): Returns the floating-point value of a field in a Quartz event.
- [setDoubleValueField(\_:value:)](cgevent/setdoublevaluefield%28__value_%29.md): Sets the floating-point value of a field in a Quartz event.

### Working With Event Taps

- [tapCreate(tap:place:options:eventsOfInterest:callback:userInfo:)](cgevent/tapcreate%28tap_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap.
- [tapCreateForPSN(processSerialNumber:place:options:eventsOfInterest:callback:userInfo:)](cgevent/tapcreateforpsn%28processserialnumber_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap for a specified process.
- [tapEnable(tap:enable:)](cgevent/tapenable%28tap_enable_%29.md): Enables or disables an event tap.
- [tapIsEnabled(tap:)](cgevent/tapisenabled%28tap_%29.md): Returns a Boolean value indicating whether an event tap is enabled.
- [tapPostEvent(\_:)](cgevent/tappostevent%28__%29.md): Posts a Quartz event from an event tap into the event stream.
- [post(tap:)](cgevent/post%28tap_%29.md): Posts a Quartz event into the event stream at a specified location.
- [postToPSN(processSerialNumber:)](cgevent/posttopsn%28processserialnumber_%29.md): Posts a Quartz event into the event stream for a specific application.
- [CGGetEventTapList(\_:\_:\_:)](cggeteventtaplist%28______%29.md): Gets a list of currently installed event taps.

### Working With Event Sources

- [typeID](cgeventsource/typeid.md): Returns the type identifier for the opaque type `CGEventSourceRef`.
- [init(stateID:)](cgeventsource/init%28stateid_%29.md): Returns a Quartz event source created with a specified source state.
- [keyboardType](cgeventsource/keyboardtype.md): Returns the keyboard type to be used with a Quartz event source.
- [sourceStateID](cgeventsource/sourcestateid.md): Returns the source state associated with a Quartz event source.
- [buttonState(\_:button:)](cgeventsource/buttonstate%28__button_%29.md): Returns a Boolean value indicating the current button state of a Quartz event source.
- [keyState(\_:key:)](cgeventsource/keystate%28__key_%29.md): Returns a Boolean value indicating the current keyboard state of a Quartz event source.
- [flagsState(\_:)](cgeventsource/flagsstate%28__%29.md): Returns the current flags of a Quartz event source.
- [secondsSinceLastEventType(\_:eventType:)](cgeventsource/secondssincelasteventtype%28__eventtype_%29.md): Returns the elapsed time since the last event for a Quartz event source.
- [counterForEventType(\_:eventType:)](cgeventsource/counterforeventtype%28__eventtype_%29.md): Returns a count of events of a given type seen since the window server started.
- [userData](cgeventsource/userdata.md): Returns the 64-bit user-specified data for a Quartz event source.
- [getLocalEventsFilterDuringSuppressionState(\_:)](cgeventsource/getlocaleventsfilterduringsuppressionstate%28__%29.md): Returns the mask that indicates which classes of local hardware events are enabled during event suppression.
- [setLocalEventsFilterDuringSuppressionState(\_:state:)](cgeventsource/setlocaleventsfilterduringsuppressionstate%28__state_%29.md): Sets the mask that indicates which classes of local hardware events are enabled during event suppression.
- [localEventsSuppressionInterval](cgeventsource/localeventssuppressioninterval.md): Returns the interval that local hardware events may be suppressed following the posting of a Quartz event.
- [pixelsPerLine](cgeventsource/pixelsperline.md): Gets the scale of pixels per line in a scrolling event source.

### Callbacks

- [CGEventTapCallBack](cgeventtapcallback.md): A client-supplied callback function that’s invoked whenever an associated event tap receives a Quartz event.

### Data Types

- [CGButtonCount](cgbuttoncount.md): Represents the number of buttons being set in a synthetic mouse event.
- [CGCharCode](cgcharcode.md): Represents a character generated by pressing one or more keys on a keyboard.
- [CGEventMask](cgeventmask.md): Defines a mask that identifies the set of Quartz events to be observed in an event tap.
- [CGEvent](cgevent.md): Defines an opaque type that represents a low-level hardware event.
- [CGEventSourceKeyboardType](cgeventsourcekeyboardtype.md): Defines a code that represents the type of keyboard used with a specified event source.
- [CGEventSource](cgeventsource.md): Defines an opaque type that represents the source of a Quartz event.
- [CGEventTapInformation](cgeventtapinformation.md): Defines the structure used to report information about event taps.
- [CGEventTapProxy](cgeventtapproxy.md): Defines an opaque type that represents state within the client application that’s associated with an event tap.
- [CGEventTimestamp](cgeventtimestamp.md): Defines the elapsed time in nanoseconds since startup that a Quartz event occurred.
- [CGKeyCode](cgkeycode.md): Represents the virtual key codes used in keyboard events.
- [CGWheelCount](cgwheelcount.md): Represents the number of wheels being set in a scroll wheel event.

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
- [Event Type Mask](event-type-mask.md): Specifies an event mask that represents all event types.
- [CGMouseButton](cgmousebutton.md): Constants that specify buttons on a one, two, or three-button mouse.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [CGEventField.mouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGScrollEventUnit](cgscrolleventunit.md): Constants that specify the unit of measurement for a scrolling event.

### Deprecated Functions

- [CGPostKeyboardEvent(\_:\_:\_:)](cgpostkeyboardevent%28______%29.md): Deprecated. Synthesizes a low-level keyboard event on the local machine.
- [CGEnableEventStateCombining(\_:)](cgenableeventstatecombining%28__%29.md): Deprecated. Enables or disables the merging of actual key and mouse state with the application-specified state in a synthetic event.
- [CGInhibitLocalEvents(\_:)](cginhibitlocalevents%28__%29.md): Deprecated. Turns off local hardware events in the current session.
- [CGSetLocalEventsFilterDuringSuppressionState(\_:\_:)](cgsetlocaleventsfilterduringsuppressionstate%28____%29.md): Deprecated. Filters local hardware events from the keyboard and mouse during the short interval after a synthetic event is posted.
- [CGSetLocalEventsSuppressionInterval(\_:)](cgsetlocaleventssuppressioninterval%28__%29.md): Deprecated. Sets the time interval in seconds that local hardware events are suppressed after posting a synthetic event.

## See Also

### Services

- [Quartz Display Services](quartz-display-services.md): Provides direct access to features in the macOS window server for configuring and controlling display hardware.
- [Quartz Window Services](quartz-window-services.md): Provides information about the windows managed by the macOS window server.

# Quartz Event Services (Objective-C)

**Framework:** Core Graphics  
**Kind:** API Collection

Provides features for managing *event taps*—filters for observing and altering the stream of low-level user input events in macOS.

<a id="overview"></a>

## Overview

Event taps make it possible to monitor and filter input events from several points within the system, prior to their delivery to a foreground application. Event taps complement and extend the capabilities of the Carbon event monitor mechanism, which allows an application to observe input events delivered to other processes.

Event taps are designed to serve as a Section 508 enabling technology. For example, consider a software system to assist a person with language impairments, designed to perform keyboard filtering with spoken review. Such a system could use an event tap to monitor all keystrokes, perform dictionary checks and matches, and recite the assembled word back to the user on detection of a word break in the input stream. If acceptable to the user, as indicated by an additional input keystroke or other gesture, the events would be posted into the system for delivery to the foreground application.

Introduced in OS X version 10.4, event taps provide functionality similar to the Win32 functions `SetWinEventHook` when used to establish an out-of-context event hook, and `SendInput`. Quartz Event Services also includes an older set of event-related functions declared in the file `CGRemoteOperation.h`. These functions are still supported, but they are not recommended for new development.

## Topics

### Working With Events

- [CGEventGetTypeID](cgevent/typeid.md): Returns the type identifier for the opaque type `CGEventRef`.
- [CGEventCreate](cgevent/init%28source_%29.md): Returns a new Quartz event.
- [CGEventCreateData](cgeventcreatedata.md): Returns a flattened data representation of a Quartz event.
- [CGEventCreateFromData](cgevent/init%28withdataallocator_data_%29.md): Returns a Quartz event created from a flattened data representation of the event.
- [CGEventCreateMouseEvent](cgevent/init%28mouseeventsource_mousetype_mousecursorposition_mousebutton_%29.md): Returns a new Quartz mouse event.
- [CGEventCreateKeyboardEvent](cgevent/init%28keyboardeventsource_virtualkey_keydown_%29.md): Returns a new Quartz keyboard event.
- [CGEventCreateScrollWheelEvent](cgeventcreatescrollwheelevent.md): Returns a new Quartz scrolling event.
- [CGEventCreateCopy](cgevent/copy%28%29.md): Returns a copy of an existing Quartz event.
- [CGEventCreateSourceFromEvent](cgeventsource/init%28event_%29.md): Returns a Quartz event source created from an existing Quartz event.
- [CGEventSetSource](cgevent/setsource%28__%29.md): Sets the event source of a Quartz event.
- [CGEventGetType](cgevent/type.md): Returns the event type of a Quartz event (left mouse down, for example).
- [CGEventSetType](cgeventsettype.md): Sets the event type of a Quartz event (left mouse down, for example).
- [CGEventGetTimestamp](cgevent/timestamp.md): Returns the timestamp of a Quartz event.
- [CGEventSetTimestamp](cgeventsettimestamp.md): Sets the timestamp of a Quartz event.
- [CGEventGetLocation](cgevent/location.md): Returns the location of a Quartz mouse event.
- [CGEventGetUnflippedLocation](cgevent/unflippedlocation.md): Returns the location of a Quartz mouse event.
- [CGEventSetLocation](cgeventsetlocation.md): Sets the location of a Quartz mouse event.
- [CGEventGetFlags](cgevent/flags.md): Returns the event flags of a Quartz event.
- [CGEventSetFlags](cgeventsetflags.md): Sets the event flags of a Quartz event.
- [CGEventKeyboardGetUnicodeString](cgevent/keyboardgetunicodestring%28maxstringlength_actualstringlength_unicodestring_%29.md): Returns the Unicode string associated with a Quartz keyboard event.
- [CGEventKeyboardSetUnicodeString](cgevent/keyboardsetunicodestring%28stringlength_unicodestring_%29.md): Sets the Unicode string associated with a Quartz keyboard event.
- [CGEventGetIntegerValueField](cgevent/getintegervaluefield%28__%29.md): Returns the integer value of a field in a Quartz event.
- [CGEventSetIntegerValueField](cgevent/setintegervaluefield%28__value_%29.md): Sets the integer value of a field in a Quartz event.
- [CGEventGetDoubleValueField](cgevent/getdoublevaluefield%28__%29.md): Returns the floating-point value of a field in a Quartz event.
- [CGEventSetDoubleValueField](cgevent/setdoublevaluefield%28__value_%29.md): Sets the floating-point value of a field in a Quartz event.

### Working With Event Taps

- [CGEventTapCreate](cgevent/tapcreate%28tap_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap.
- [CGEventTapCreateForPSN](cgevent/tapcreateforpsn%28processserialnumber_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap for a specified process.
- [CGEventTapEnable](cgevent/tapenable%28tap_enable_%29.md): Enables or disables an event tap.
- [CGEventTapIsEnabled](cgevent/tapisenabled%28tap_%29.md): Returns a Boolean value indicating whether an event tap is enabled.
- [CGEventTapPostEvent](cgevent/tappostevent%28__%29.md): Posts a Quartz event from an event tap into the event stream.
- [CGEventPost](cgevent/post%28tap_%29.md): Posts a Quartz event into the event stream at a specified location.
- [CGEventPostToPSN](cgevent/posttopsn%28processserialnumber_%29.md): Posts a Quartz event into the event stream for a specific application.
- [CGGetEventTapList](cggeteventtaplist%28______%29.md): Gets a list of currently installed event taps.
- [CGEventMaskBit](cgeventmaskbit.md): Generates an event mask for a single type of event.

### Working With Event Sources

- [CGEventSourceGetTypeID](cgeventsource/typeid.md): Returns the type identifier for the opaque type `CGEventSourceRef`.
- [CGEventSourceCreate](cgeventsource/init%28stateid_%29.md): Returns a Quartz event source created with a specified source state.
- [CGEventSourceGetKeyboardType](cgeventsource/keyboardtype.md): Returns the keyboard type to be used with a Quartz event source.
- [CGEventSourceSetKeyboardType](cgeventsourcesetkeyboardtype.md): Sets the keyboard type to be used with a Quartz event source.
- [CGEventSourceGetSourceStateID](cgeventsource/sourcestateid.md): Returns the source state associated with a Quartz event source.
- [CGEventSourceButtonState](cgeventsource/buttonstate%28__button_%29.md): Returns a Boolean value indicating the current button state of a Quartz event source.
- [CGEventSourceKeyState](cgeventsource/keystate%28__key_%29.md): Returns a Boolean value indicating the current keyboard state of a Quartz event source.
- [CGEventSourceFlagsState](cgeventsource/flagsstate%28__%29.md): Returns the current flags of a Quartz event source.
- [CGEventSourceSecondsSinceLastEventType](cgeventsource/secondssincelasteventtype%28__eventtype_%29.md): Returns the elapsed time since the last event for a Quartz event source.
- [CGEventSourceCounterForEventType](cgeventsource/counterforeventtype%28__eventtype_%29.md): Returns a count of events of a given type seen since the window server started.
- [CGEventSourceGetUserData](cgeventsource/userdata.md): Returns the 64-bit user-specified data for a Quartz event source.
- [CGEventSourceSetUserData](cgeventsourcesetuserdata.md): Sets the 64-bit user-specified data for a Quartz event source.
- [CGEventSourceGetLocalEventsFilterDuringSuppressionState](cgeventsource/getlocaleventsfilterduringsuppressionstate%28__%29.md): Returns the mask that indicates which classes of local hardware events are enabled during event suppression.
- [CGEventSourceSetLocalEventsFilterDuringSuppressionState](cgeventsource/setlocaleventsfilterduringsuppressionstate%28__state_%29.md): Sets the mask that indicates which classes of local hardware events are enabled during event suppression.
- [CGEventSourceGetLocalEventsSuppressionInterval](cgeventsource/localeventssuppressioninterval.md): Returns the interval that local hardware events may be suppressed following the posting of a Quartz event.
- [CGEventSourceSetLocalEventsSuppressionInterval](cgeventsourcesetlocaleventssuppressioninterval.md): Sets the interval that local hardware events may be suppressed following the posting of a Quartz event.
- [CGEventSourceGetPixelsPerLine](cgeventsource/pixelsperline.md): Gets the scale of pixels per line in a scrolling event source.
- [CGEventSourceSetPixelsPerLine](cgeventsourcesetpixelsperline.md): Sets the scale of pixels per line in a scrolling event source.

### Callbacks

- [CGEventTapCallBack](cgeventtapcallback.md): A client-supplied callback function that’s invoked whenever an associated event tap receives a Quartz event.

### Data Types

- [CGButtonCount](cgbuttoncount.md): Represents the number of buttons being set in a synthetic mouse event.
- [CGCharCode](cgcharcode.md): Represents a character generated by pressing one or more keys on a keyboard.
- [CGEventMask](cgeventmask.md): Defines a mask that identifies the set of Quartz events to be observed in an event tap.
- [CGEventRef](cgevent.md): Defines an opaque type that represents a low-level hardware event.
- [CGEventSourceKeyboardType](cgeventsourcekeyboardtype.md): Defines a code that represents the type of keyboard used with a specified event source.
- [CGEventSourceRef](cgeventsource.md): Defines an opaque type that represents the source of a Quartz event.
- [CGEventTapInformation](cgeventtapinformation.md): Defines the structure used to report information about event taps.
- [CGEventTapProxy](cgeventtapproxy.md): Defines an opaque type that represents state within the client application that’s associated with an event tap.
- [CGEventTimestamp](cgeventtimestamp.md): Defines the elapsed time in nanoseconds since startup that a Quartz event occurred.
- [CGKeyCode](cgkeycode.md): Represents the virtual key codes used in keyboard events.
- [CGWheelCount](cgwheelcount.md): Represents the number of wheels being set in a scroll wheel event.

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
- [Event Type Mask](event-type-mask.md): Specifies an event mask that represents all event types.
- [CGMouseButton](cgmousebutton.md): Constants that specify buttons on a one, two, or three-button mouse.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [kCGMouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGScrollEventUnit](cgscrolleventunit.md): Constants that specify the unit of measurement for a scrolling event.

### Deprecated Functions

- [CGPostKeyboardEvent](cgpostkeyboardevent%28______%29.md): Deprecated. Synthesizes a low-level keyboard event on the local machine.
- [CGPostMouseEvent](cgpostmouseevent.md): Deprecated. Synthesizes a low-level mouse-button event on the local machine.
- [CGPostScrollWheelEvent](cgpostscrollwheelevent.md): Deprecated. Synthesizes a low-level scrolling event on the local machine.
- [CGEnableEventStateCombining](cgenableeventstatecombining%28__%29.md): Deprecated. Enables or disables the merging of actual key and mouse state with the application-specified state in a synthetic event.
- [CGInhibitLocalEvents](cginhibitlocalevents%28__%29.md): Deprecated. Turns off local hardware events in the current session.
- [CGSetLocalEventsFilterDuringSuppressionState](cgsetlocaleventsfilterduringsuppressionstate%28____%29.md): Deprecated. Filters local hardware events from the keyboard and mouse during the short interval after a synthetic event is posted.
- [CGSetLocalEventsFilterDuringSupressionState](cgsetlocaleventsfilterduringsupressionstate.md)
- [CGSetLocalEventsSuppressionInterval](cgsetlocaleventssuppressioninterval%28__%29.md): Deprecated. Sets the time interval in seconds that local hardware events are suppressed after posting a synthetic event.

## See Also

### Services

- [Quartz Display Services](quartz-display-services.md): Provides direct access to features in the macOS window server for configuring and controlling display hardware.
- [Quartz Window Services](quartz-window-services.md): Provides information about the windows managed by the macOS window server.
