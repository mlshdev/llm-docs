> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/enterexitevent(with:location:modifierflags:timestamp:windownumber:context:eventnumber:trackingnumber:userdata:)](https://developer.apple.com/documentation/appkit/nsevent/enterexitevent(with:location:modifierflags:timestamp:windownumber:context:eventnumber:trackingnumber:userdata:))

# enterExitEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.

## Declaration

```swift
class func enterExitEvent(with type: NSEvent.EventType, location: NSPoint, modifierFlags flags: NSEvent.ModifierFlags, timestamp time: TimeInterval, windowNumber wNum: Int, context unusedPassNil: NSGraphicsContext?, eventNumber eNum: Int, trackingNumber tNum: Int, userData data: UnsafeMutableRawPointer?) -> NSEvent?
```

## Parameters

- `type`: One of the following event-type constants:  `NSMouseEntered`, `NSMouseExited`, `NSCursorUpdate`. If the specified constant is not one of these, an `NSInternalInconsistencyException` is raised
- `location`: The cursor location in the base coordinate system of the window specified by `windowNum`.
- `flags`: An integer bit field containing any of the modifier key masks described in `Getting Unicode Values`, combined using the C bitwise OR operator.
- `time`: The time the event occurred in seconds since system startup.
- `wNum`: An integer that identifies the window device associated with the event, which is associated with the `NSWindow` that will receive the event.
- `unusedPassNil`: The display graphics context of the event. Pass `nil` for this parameter.
- `eNum`: An identifier for the new event. It’s normally taken from a counter for mouse events, which continually increases as the application runs.
- `tNum`: A number that identifies the tracking rectangle. This identifier is the same as that returned by the `NSView` method [addTrackingRect(\_:owner:userData:assumeInside:)](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md).
- `data`: Data arbitrarily associated with the tracking rectangle when it was set up using the `NSView` method [addTrackingRect(\_:owner:userData:assumeInside:)](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md).

<a id="return-value"></a>

## Return Value

The created `NSEvent` object or `nil` if the object could not be created.

## See Also

### Related Documentation

- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingNumber](trackingnumber.md): The identifier of a mouse-tracking event.
- [systemUptime](https://developer.apple.com/documentation/foundation/processinfo/systemuptime): The amount of time the system has been awake since the last time it was restarted.
- [userData](userdata.md): The data associated with a mouse-tracking event.

### Creating an event object

- [keyEvent(with:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:)](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:)](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [otherEvent(with:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:)](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [init(eventRef:)](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.
- [init(cgEvent:)](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.

# enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.

## Declaration

```objectivec
+ (NSEvent *) enterExitEventWithType:(NSEventType) type location:(NSPoint) location modifierFlags:(NSEventModifierFlags) flags timestamp:(NSTimeInterval) time windowNumber:(NSInteger) wNum context:(NSGraphicsContext *) unusedPassNil eventNumber:(NSInteger) eNum trackingNumber:(NSInteger) tNum userData:(void *) data;
```

## Parameters

- `type`: One of the following event-type constants:  `NSMouseEntered`, `NSMouseExited`, `NSCursorUpdate`. If the specified constant is not one of these, an `NSInternalInconsistencyException` is raised
- `location`: The cursor location in the base coordinate system of the window specified by `windowNum`.
- `flags`: An integer bit field containing any of the modifier key masks described in `Getting Unicode Values`, combined using the C bitwise OR operator.
- `time`: The time the event occurred in seconds since system startup.
- `wNum`: An integer that identifies the window device associated with the event, which is associated with the `NSWindow` that will receive the event.
- `unusedPassNil`: The display graphics context of the event. Pass `nil` for this parameter.
- `eNum`: An identifier for the new event. It’s normally taken from a counter for mouse events, which continually increases as the application runs.
- `tNum`: A number that identifies the tracking rectangle. This identifier is the same as that returned by the `NSView` method [addTrackingRect:owner:userData:assumeInside:](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md).
- `data`: Data arbitrarily associated with the tracking rectangle when it was set up using the `NSView` method [addTrackingRect:owner:userData:assumeInside:](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md).

<a id="return-value"></a>

## Return Value

The created `NSEvent` object or `nil` if the object could not be created.

## See Also

### Related Documentation

- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [trackingNumber](trackingnumber.md): The identifier of a mouse-tracking event.
- [systemUptime](https://developer.apple.com/documentation/foundation/processinfo/systemuptime): The amount of time the system has been awake since the last time it was restarted.
- [userData](userdata.md): The data associated with a mouse-tracking event.

### Creating an event object

- [keyEventWithType:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [otherEventWithType:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [eventWithEventRef:](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.
- [eventWithCGEvent:](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.
