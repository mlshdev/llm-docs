> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/mouseevent(with:location:modifierflags:timestamp:windownumber:context:eventnumber:clickcount:pressure:)](https://developer.apple.com/documentation/appkit/nsevent/mouseevent(with:location:modifierflags:timestamp:windownumber:context:eventnumber:clickcount:pressure:))

# mouseEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.

## Declaration

```swift
class func mouseEvent(with type: NSEvent.EventType, location: NSPoint, modifierFlags flags: NSEvent.ModifierFlags, timestamp time: TimeInterval, windowNumber wNum: Int, context unusedPassNil: NSGraphicsContext?, eventNumber eNum: Int, clickCount cNum: Int, pressure: Float) -> NSEvent?
```

## Parameters

- `type`: One of the modifier key masks described in [NSEvent.EventType](eventtype.md), or an `NSInternalInconsistencyException` is raised.
- `location`: The cursor location in the base coordinate system of the window specified by `windowNum`.
- `flags`: An integer bit field containing any of the modifier key masks described in `Getting Unicode Values`, combined using the C bitwise OR operator.
- `time`: The time the event occurred in seconds since system startup.
- `wNum`: An integer that identifies the window device associated with the event, which is associated with the `NSWindow` that will receive the event.
- `unusedPassNil`: The display graphics context of the event. Pass `nil` for this parameter.
- `eNum`: An identifier for the new event. It’s normally taken from a counter for mouse events, which continually increases as the application runs.
- `cNum`: The number of mouse clicks associated with the mouse event.
- `pressure`: A value from `0.0` to `1.0` indicating the pressure applied to the input device on a mouse event, used for an appropriate device such as a graphics tablet. For devices that aren’t pressure-sensitive, the value should be either `0.0` or `1.0`.

<a id="return-value"></a>

## Return Value

The created `NSEvent` instance or `nil` if the instance could not be created.

## See Also

### Related Documentation

- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [systemUptime](https://developer.apple.com/documentation/foundation/processinfo/systemuptime): The amount of time the system has been awake since the last time it was restarted.
- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.

### Creating an event object

- [keyEvent(with:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:)](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [enterExitEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:)](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [otherEvent(with:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:)](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [init(eventRef:)](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.
- [init(cgEvent:)](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.

# mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.

## Declaration

```objectivec
+ (NSEvent *) mouseEventWithType:(NSEventType) type location:(NSPoint) location modifierFlags:(NSEventModifierFlags) flags timestamp:(NSTimeInterval) time windowNumber:(NSInteger) wNum context:(NSGraphicsContext *) unusedPassNil eventNumber:(NSInteger) eNum clickCount:(NSInteger) cNum pressure:(float) pressure;
```

## Parameters

- `type`: One of the modifier key masks described in [NSEventType](eventtype.md), or an `NSInternalInconsistencyException` is raised.
- `location`: The cursor location in the base coordinate system of the window specified by `windowNum`.
- `flags`: An integer bit field containing any of the modifier key masks described in `Getting Unicode Values`, combined using the C bitwise OR operator.
- `time`: The time the event occurred in seconds since system startup.
- `wNum`: An integer that identifies the window device associated with the event, which is associated with the `NSWindow` that will receive the event.
- `unusedPassNil`: The display graphics context of the event. Pass `nil` for this parameter.
- `eNum`: An identifier for the new event. It’s normally taken from a counter for mouse events, which continually increases as the application runs.
- `cNum`: The number of mouse clicks associated with the mouse event.
- `pressure`: A value from `0.0` to `1.0` indicating the pressure applied to the input device on a mouse event, used for an appropriate device such as a graphics tablet. For devices that aren’t pressure-sensitive, the value should be either `0.0` or `1.0`.

<a id="return-value"></a>

## Return Value

The created `NSEvent` instance or `nil` if the instance could not be created.

## See Also

### Related Documentation

- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [eventNumber](eventnumber.md): The counter value of the latest mouse or tracking-rectangle event object.
- [systemUptime](https://developer.apple.com/documentation/foundation/processinfo/systemuptime): The amount of time the system has been awake since the last time it was restarted.
- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.

### Creating an event object

- [keyEventWithType:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [otherEventWithType:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [eventWithEventRef:](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.
- [eventWithCGEvent:](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.
