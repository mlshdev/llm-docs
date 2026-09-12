> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent](https://developer.apple.com/documentation/appkit/nsevent)

# NSEvent (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that contains information about an input action, such as a mouse click or a key press.

## Declaration

```swift
class NSEvent
```

<a id="overview"></a>

## Overview

AppKit reports events that occur in a window to the app that created the window. Events include mouse clicks, key presses, and other types of input to the system. An [NSEvent](nsevent.md) object contains pertinent information about each event, such as the event type and when the event occurred. The event type defines what other information is available in the event object. For example, a keyboard event contains information about the pressed keys.

Although you can create [NSEvent](nsevent.md) objects directly, you typically don’t. The system generates them automatically in response to input from the mouse, keyboard, trackpad, or other peripherals such as connected tablets. It enqueues those events in its event queue, and dequeues them when it’s ready to process them. The system delivers events to the most relevant [NSResponder](nsresponder.md) object, which might be the first responder or the object where the event occurred. For example, the system delivers mouse-click events to the view that contains the event location.

To handle events, add support to your app’s [NSResponder](nsresponder.md) objects. You can also use gesture recognizers to handle some events for you and execute your app’s code at appropriate times. For more information, see the [NSResponder](nsresponder.md) reference.

You can also monitor the events your app receives and modify or cancel some events as needed. Install a local monitor using the [addLocalMonitorForEvents(matching:handler:)](nsevent/addlocalmonitorforevents%28matching_handler_%29.md) method to detect specific types of events and take action when your app receives them. Install a global monitor using the [addGlobalMonitorForEvents(matching:handler:)](nsevent/addglobalmonitorforevents%28matching_handler_%29.md) method to monitor events systemwide, although without the ability to modify them.

## Topics

### Creating an event object

- [keyEvent(with:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:)](nsevent/keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:)](nsevent/mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [enterExitEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:)](nsevent/enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [otherEvent(with:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:)](nsevent/otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [init(eventRef:)](nsevent/init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.
- [init(cgEvent:)](nsevent/init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.

### Getting the event type

- [type](nsevent/type.md): The event’s type.
- [NSEvent.EventType](nsevent/eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEvent.EventTypeMask](nsevent/eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [subtype](nsevent/subtype.md): The event’s subtype.
- [NSEvent.EventSubtype](nsevent/eventsubtype.md): Subtypes for various types of events.

### Getting general event information

- [locationInWindow](nsevent/locationinwindow.md): The event location in the base coordinate system of the associated window.
- [timestamp](nsevent/timestamp.md): The time when the event occurred in seconds since system startup.
- [window](nsevent/window.md): The window object associated with the event.
- [windowNumber](nsevent/windownumber.md): The identifier for the window device associated with the event.
- [eventRef](nsevent/eventref.md): An opaque Carbon type associated with this event.
- [cgEvent](nsevent/cgevent.md): The Core Graphics event object corresponding to this event.
- [foreverDuration](nsevent/foreverduration.md): The longest time duration possible.

### Getting modifier flags

- [modifierFlags](nsevent/modifierflags-swift.property.md): An integer bit field that indicates the pressed modifier keys.
- [NSEvent.ModifierFlags](nsevent/modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [modifierFlags](nsevent/modifierflags-swift.type.property.md): The currently pressed modifier keys.

### Getting key event information

- [characters](nsevent/characters.md): The characters associated with a key-up or key-down event.
- [charactersIgnoringModifiers](nsevent/charactersignoringmodifiers.md): The characters generated by a key event as if no modifier key (except for Shift) applies.
- [keyCode](nsevent/keycode.md): The virtual code for the key associated with the event.
- [characters(byApplyingModifiers:)](nsevent/characters%28byapplyingmodifiers_%29.md): Returns the new characters that result if you apply the specified modifier keys to the event.
- [keyRepeatDelay](nsevent/keyrepeatdelay.md): The number of seconds someone must hold down a key before the first key repeat event occurs.
- [keyRepeatInterval](nsevent/keyrepeatinterval.md): The number of seconds someone must hold down a key to generate key-repeat events after the initial delay.
- [specialKey](nsevent/specialkey-swift.property.md): The code associated with a function key or other special key.
- [Function-Key Unicode Values](function-key-unicode-values.md): Constants for reserved keyboard function keys that correspond to unicode characters.
- [NSEvent.SpecialKey](nsevent/specialkey-swift.struct.md): Constants for reserved function keys on the keyboard.
- [isARepeat](nsevent/isarepeat.md): A Boolean value that indicates whether the key event is a repeat.

### Getting mouse event information

- [pressedMouseButtons](nsevent/pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](nsevent/doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](nsevent/mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](nsevent/buttonnumber.md): The button number for a mouse event.
- [clickCount](nsevent/clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](nsevent/associatedeventsmask.md): The associated events mask of a mouse event.

### Getting scroll wheel and flick events

- [deltaX](nsevent/deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](nsevent/deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](nsevent/deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](nsevent/hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](nsevent/scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](nsevent/scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](nsevent/momentumphase.md): The momentum phase for a scroll or flick gesture.
- [isDirectionInvertedFromDevice](nsevent/isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

### Configuring swipe event behaviors

- [isSwipeTrackingFromScrollEventsEnabled](nsevent/isswipetrackingfromscrolleventsenabled.md): A Boolean value that indicates whether to track fluid swipe gestures using scroll events.
- [trackSwipeEvent(options:dampenAmountThresholdMin:max:usingHandler:)](nsevent/trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md): Allows tracking and user interface feedback of scroll wheel events.
- [NSEvent.SwipeTrackingOptions](nsevent/swipetrackingoptions.md): Constants that specify swipe-tracking options.

### Getting gesture and touch information

- [phase](nsevent/phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEvent.Phase](nsevent/phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](nsevent/magnification.md): The amount of change to add to a magnification gesture.
- [touches(matching:in:)](nsevent/touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [allTouches()](nsevent/alltouches%28%29.md): Returns all touch objects associated with the event.
- [touches(for:)](nsevent/touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouches(for:)](nsevent/coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [isMouseCoalescingEnabled](nsevent/ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.
- [NSEvent.GestureAxis](nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

### Getting pressure information

- [pressure](nsevent/pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.
- [stage](nsevent/stage.md): A value that indicates the stage of a pressure gesture event.
- [stageTransition](nsevent/stagetransition.md): The transition value for the stage of a pressure gesture event.
- [pressureBehavior](nsevent/pressurebehavior-swift.property.md): The behavior and progression for a pressure event.
- [NSEvent.PressureBehavior](nsevent/pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.

### Getting tablet proximity information

- [capabilityMask](nsevent/capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](nsevent/deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [isEnteringProximity](nsevent/isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](nsevent/pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](nsevent/pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](nsevent/pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSEvent.PointingDeviceType](nsevent/pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [systemTabletID](nsevent/systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](nsevent/tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](nsevent/uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](nsevent/vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](nsevent/vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.

### Getting tablet pointing information

- [absoluteX](nsevent/absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](nsevent/absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](nsevent/absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [buttonMask](nsevent/buttonmask-swift.property.md): A bit mask identifying the buttons pressed for a tablet event.
- [NSEvent.ButtonMask](nsevent/buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [rotation](nsevent/rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [tangentialPressure](nsevent/tangentialpressure.md): The tangential pressure on the device that generated this event.
- [tilt](nsevent/tilt.md): The scaled tilt values of the pointing device that generated this event.
- [vendorDefined](nsevent/vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.

### Getting tracking area information

- [eventNumber](nsevent/eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingNumber](nsevent/trackingnumber.md): The identifier of a mouse-tracking event.
- [trackingArea](nsevent/trackingarea.md): The tracking area for the event.
- [userData](nsevent/userdata.md): The data associated with a mouse-tracking event.

### Getting custom event information

- [data1](nsevent/data1.md): Additional data associated with this event.
- [data2](nsevent/data2.md): Additional data associated with this event.

### Requesting and stopping periodic events

- [startPeriodicEvents(afterDelay:withPeriod:)](nsevent/startperiodicevents%28afterdelay_withperiod_%29.md): Begins generating periodic events for the current thread.
- [stopPeriodicEvents()](nsevent/stopperiodicevents%28%29.md): Stops generating periodic events for the current thread and discards any periodic events remaining in the queue.

### Monitoring app events

- [addGlobalMonitorForEvents(matching:handler:)](nsevent/addglobalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to other applications.
- [addLocalMonitorForEvents(matching:handler:)](nsevent/addlocalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to this app prior to their dispatch.
- [removeMonitor(\_:)](nsevent/removemonitor%28__%29.md): Removes the specified event monitor.

### Converting a mouse event’s position into a SpriteKit node’s coordinate space

- [location(in:)](nsevent/location%28in_%29.md): Returns the location of the receiver in the coordinate system of the given node.

### Deprecated

- [context](nsevent/context.md): Deprecated. The display graphics context for this event.

### Initializers

- [init(CGEvent:)](nsevent/init%28cgevent_%29-8acvx.md)
- [init(coder:)](nsevent/init%28coder_%29.md)

### Type Properties

- [isTouchSwipeNavigationEnabled](nsevent/istouchswipenavigationenabled.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Mouse, Keyboard, and Touch Events

- [NSTouch](nstouch.md): A snapshot of a particular touch at an instant in time.

# NSEvent (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that contains information about an input action, such as a mouse click or a key press.

## Declaration

```objectivec
@interface NSEvent : NSObject
```

<a id="overview"></a>

## Overview

AppKit reports events that occur in a window to the app that created the window. Events include mouse clicks, key presses, and other types of input to the system. An [NSEvent](nsevent.md) object contains pertinent information about each event, such as the event type and when the event occurred. The event type defines what other information is available in the event object. For example, a keyboard event contains information about the pressed keys.

Although you can create [NSEvent](nsevent.md) objects directly, you typically don’t. The system generates them automatically in response to input from the mouse, keyboard, trackpad, or other peripherals such as connected tablets. It enqueues those events in its event queue, and dequeues them when it’s ready to process them. The system delivers events to the most relevant [NSResponder](nsresponder.md) object, which might be the first responder or the object where the event occurred. For example, the system delivers mouse-click events to the view that contains the event location.

To handle events, add support to your app’s [NSResponder](nsresponder.md) objects. You can also use gesture recognizers to handle some events for you and execute your app’s code at appropriate times. For more information, see the [NSResponder](nsresponder.md) reference.

You can also monitor the events your app receives and modify or cancel some events as needed. Install a local monitor using the [addLocalMonitorForEventsMatchingMask:handler:](nsevent/addlocalmonitorforevents%28matching_handler_%29.md) method to detect specific types of events and take action when your app receives them. Install a global monitor using the [addGlobalMonitorForEventsMatchingMask:handler:](nsevent/addglobalmonitorforevents%28matching_handler_%29.md) method to monitor events systemwide, although without the ability to modify them.

## Topics

### Creating an event object

- [keyEventWithType:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:](nsevent/keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:](nsevent/mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:](nsevent/enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [otherEventWithType:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:](nsevent/otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [eventWithEventRef:](nsevent/init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.
- [eventWithCGEvent:](nsevent/init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.

### Getting the event type

- [type](nsevent/type.md): The event’s type.
- [NSEventType](nsevent/eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEventMask](nsevent/eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [subtype](nsevent/subtype.md): The event’s subtype.
- [NSEventSubtype](nsevent/eventsubtype.md): Subtypes for various types of events.

### Getting general event information

- [locationInWindow](nsevent/locationinwindow.md): The event location in the base coordinate system of the associated window.
- [timestamp](nsevent/timestamp.md): The time when the event occurred in seconds since system startup.
- [window](nsevent/window.md): The window object associated with the event.
- [windowNumber](nsevent/windownumber.md): The identifier for the window device associated with the event.
- [eventRef](nsevent/eventref.md): An opaque Carbon type associated with this event.
- [CGEvent](nsevent/cgevent.md): The Core Graphics event object corresponding to this event.
- [NSEventDurationForever](nsevent/foreverduration.md): The longest time duration possible.

### Getting modifier flags

- [modifierFlags](nsevent/modifierflags-swift.property.md): An integer bit field that indicates the pressed modifier keys.
- [NSEventModifierFlags](nsevent/modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [modifierFlags](nsevent/modifierflags-swift.type.property.md): The currently pressed modifier keys.

### Getting key event information

- [characters](nsevent/characters.md): The characters associated with a key-up or key-down event.
- [charactersIgnoringModifiers](nsevent/charactersignoringmodifiers.md): The characters generated by a key event as if no modifier key (except for Shift) applies.
- [keyCode](nsevent/keycode.md): The virtual code for the key associated with the event.
- [charactersByApplyingModifiers:](nsevent/characters%28byapplyingmodifiers_%29.md): Returns the new characters that result if you apply the specified modifier keys to the event.
- [keyRepeatDelay](nsevent/keyrepeatdelay.md): The number of seconds someone must hold down a key before the first key repeat event occurs.
- [keyRepeatInterval](nsevent/keyrepeatinterval.md): The number of seconds someone must hold down a key to generate key-repeat events after the initial delay.
- [Function-Key Unicode Values](function-key-unicode-values.md): Constants for reserved keyboard function keys that correspond to unicode characters.
- [ARepeat](nsevent/isarepeat.md): A Boolean value that indicates whether the key event is a repeat.

### Getting mouse event information

- [pressedMouseButtons](nsevent/pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](nsevent/doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](nsevent/mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](nsevent/buttonnumber.md): The button number for a mouse event.
- [clickCount](nsevent/clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](nsevent/associatedeventsmask.md): The associated events mask of a mouse event.

### Getting scroll wheel and flick events

- [deltaX](nsevent/deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](nsevent/deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](nsevent/deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](nsevent/hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](nsevent/scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](nsevent/scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](nsevent/momentumphase.md): The momentum phase for a scroll or flick gesture.
- [directionInvertedFromDevice](nsevent/isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

### Configuring swipe event behaviors

- [swipeTrackingFromScrollEventsEnabled](nsevent/isswipetrackingfromscrolleventsenabled.md): A Boolean value that indicates whether to track fluid swipe gestures using scroll events.
- [trackSwipeEventWithOptions:dampenAmountThresholdMin:max:usingHandler:](nsevent/trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md): Allows tracking and user interface feedback of scroll wheel events.
- [NSEventSwipeTrackingOptions](nsevent/swipetrackingoptions.md): Constants that specify swipe-tracking options.

### Getting gesture and touch information

- [phase](nsevent/phase-swift.property.md): The phase of a gesture event, such as a magnify, scroll, or pressure change.
- [NSEventPhase](nsevent/phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [magnification](nsevent/magnification.md): The amount of change to add to a magnification gesture.
- [touchesMatchingPhase:inView:](nsevent/touches%28matching_in_%29.md): Returns the touch objects associated with the specified phase.
- [allTouches](nsevent/alltouches%28%29.md): Returns all touch objects associated with the event.
- [touchesForView:](nsevent/touches%28for_%29.md): Returns the touch objects from the event that belong to the specified view.
- [coalescedTouchesForTouch:](nsevent/coalescedtouches%28for_%29.md): Returns all of the touch objects associated with the specified main touch.
- [mouseCoalescingEnabled](nsevent/ismousecoalescingenabled.md): A Boolean value that indicates whether the system coalesces mouse movement events.
- [NSEventGestureAxis](nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

### Getting pressure information

- [pressure](nsevent/pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.
- [stage](nsevent/stage.md): A value that indicates the stage of a pressure gesture event.
- [stageTransition](nsevent/stagetransition.md): The transition value for the stage of a pressure gesture event.
- [pressureBehavior](nsevent/pressurebehavior-swift.property.md): The behavior and progression for a pressure event.
- [NSPressureBehavior](nsevent/pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.

### Getting tablet proximity information

- [capabilityMask](nsevent/capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](nsevent/deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [enteringProximity](nsevent/isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](nsevent/pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](nsevent/pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](nsevent/pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSPointingDeviceType](nsevent/pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [systemTabletID](nsevent/systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](nsevent/tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](nsevent/uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](nsevent/vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](nsevent/vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.

### Getting tablet pointing information

- [absoluteX](nsevent/absolutex.md): The absolute x coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteY](nsevent/absolutey.md): The absolute y coordinate of a pointing device on its tablet at full tablet resolution.
- [absoluteZ](nsevent/absolutez.md): The absolute z coordinate of pointing device on its tablet at full tablet resolution.
- [buttonMask](nsevent/buttonmask-swift.property.md): A bit mask identifying the buttons pressed for a tablet event.
- [NSEventButtonMask](nsevent/buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [rotation](nsevent/rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [tangentialPressure](nsevent/tangentialpressure.md): The tangential pressure on the device that generated this event.
- [tilt](nsevent/tilt.md): The scaled tilt values of the pointing device that generated this event.
- [vendorDefined](nsevent/vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.

### Getting tracking area information

- [eventNumber](nsevent/eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingNumber](nsevent/trackingnumber.md): The identifier of a mouse-tracking event.
- [trackingArea](nsevent/trackingarea.md): The tracking area for the event.
- [userData](nsevent/userdata.md): The data associated with a mouse-tracking event.

### Getting custom event information

- [data1](nsevent/data1.md): Additional data associated with this event.
- [data2](nsevent/data2.md): Additional data associated with this event.

### Requesting and stopping periodic events

- [startPeriodicEventsAfterDelay:withPeriod:](nsevent/startperiodicevents%28afterdelay_withperiod_%29.md): Begins generating periodic events for the current thread.
- [stopPeriodicEvents](nsevent/stopperiodicevents%28%29.md): Stops generating periodic events for the current thread and discards any periodic events remaining in the queue.

### Monitoring app events

- [addGlobalMonitorForEventsMatchingMask:handler:](nsevent/addglobalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to other applications.
- [addLocalMonitorForEventsMatchingMask:handler:](nsevent/addlocalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to this app prior to their dispatch.
- [removeMonitor:](nsevent/removemonitor%28__%29.md): Removes the specified event monitor.

### Converting a mouse event’s position into a SpriteKit node’s coordinate space

- [locationInNode:](nsevent/location%28in_%29.md): Returns the location of the receiver in the coordinate system of the given node.

### Deprecated

- [context](nsevent/context.md): Deprecated. The display graphics context for this event.

### Type Properties

- [touchSwipeNavigationEnabled](nsevent/istouchswipenavigationenabled.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Mouse, Keyboard, and Touch Events

- [NSTouch](nstouch.md): A snapshot of a particular touch at an instant in time.
