> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/otherevent(with:location:modifierflags:timestamp:windownumber:context:subtype:data1:data2:)](https://developer.apple.com/documentation/appkit/nsevent/otherevent(with:location:modifierflags:timestamp:windownumber:context:subtype:data1:data2:))

# otherEvent(with:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new event object that describes a custom event.

## Declaration

```swift
class func otherEvent(with type: NSEvent.EventType, location: NSPoint, modifierFlags flags: NSEvent.ModifierFlags, timestamp time: TimeInterval, windowNumber wNum: Int, context unusedPassNil: NSGraphicsContext?, subtype: Int16, data1 d1: Int, data2 d2: Int) -> NSEvent?
```

## Parameters

- `type`: One of the following event-type constants:

  - `NSAppKitDefined`
  - `NSSystemDefined`
  - `NSApplicationDefined`
  - `NSPeriodic`

  If `type` is anything else, an `NSInternalInconsistencyException` is raised. Your code should only create events of type `NSApplicationDefined`.
- `location`: The cursor location in the base coordinate system of the window specified by `windowNum`.
- `flags`: An integer bit field containing any of the modifier key masks described in `Getting Unicode Values`, combined using the C bitwise OR operator.
- `time`: The time the event occurred in seconds since system startup.
- `wNum`: An integer that identifies the window device associated with the event, which is associated with the `NSWindow` that will receive the event.
- `unusedPassNil`: The display graphics context of the event. Pass `nil` for this parameter.
- `subtype`: A numeric identifier that further differentiates custom events of types `NSAppKitDefined`, `NSSystemDefined`, and `NSApplicationDefined`. `NSPeriodic` events don’t use this attribute.
- `d1`: Additional data associated with the event. `NSPeriodic` events don’t use these attributes.
- `d2`: Additional data associated with the event. `NSPeriodic` events don’t use these attributes.

<a id="return-value"></a>

## Return Value

The created `NSEvent` object or `nil` if the object couldn’t be created.

## See Also

### Related Documentation

- [subtype](subtype.md): The event’s subtype.
- [data1](data1.md): Additional data associated with this event.
- [systemUptime](https://developer.apple.com/documentation/foundation/processinfo/systemuptime): The amount of time the system has been awake since the last time it was restarted.
- [data2](data2.md): Additional data associated with this event.

### Creating an event object

- [keyEvent(with:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:)](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:)](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [enterExitEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:)](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [init(eventRef:)](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.
- [init(cgEvent:)](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.

# otherEventWithType:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new event object that describes a custom event.

## Declaration

```objectivec
+ (NSEvent *) otherEventWithType:(NSEventType) type location:(NSPoint) location modifierFlags:(NSEventModifierFlags) flags timestamp:(NSTimeInterval) time windowNumber:(NSInteger) wNum context:(NSGraphicsContext *) unusedPassNil subtype:(short) subtype data1:(NSInteger) d1 data2:(NSInteger) d2;
```

## Parameters

- `type`: One of the following event-type constants:

  - `NSAppKitDefined`
  - `NSSystemDefined`
  - `NSApplicationDefined`
  - `NSPeriodic`

  If `type` is anything else, an `NSInternalInconsistencyException` is raised. Your code should only create events of type `NSApplicationDefined`.
- `location`: The cursor location in the base coordinate system of the window specified by `windowNum`.
- `flags`: An integer bit field containing any of the modifier key masks described in `Getting Unicode Values`, combined using the C bitwise OR operator.
- `time`: The time the event occurred in seconds since system startup.
- `wNum`: An integer that identifies the window device associated with the event, which is associated with the `NSWindow` that will receive the event.
- `unusedPassNil`: The display graphics context of the event. Pass `nil` for this parameter.
- `subtype`: A numeric identifier that further differentiates custom events of types `NSAppKitDefined`, `NSSystemDefined`, and `NSApplicationDefined`. `NSPeriodic` events don’t use this attribute.
- `d1`: Additional data associated with the event. `NSPeriodic` events don’t use these attributes.
- `d2`: Additional data associated with the event. `NSPeriodic` events don’t use these attributes.

<a id="return-value"></a>

## Return Value

The created `NSEvent` object or `nil` if the object couldn’t be created.

## See Also

### Related Documentation

- [subtype](subtype.md): The event’s subtype.
- [data1](data1.md): Additional data associated with this event.
- [systemUptime](https://developer.apple.com/documentation/foundation/processinfo/systemuptime): The amount of time the system has been awake since the last time it was restarted.
- [data2](data2.md): Additional data associated with this event.

### Creating an event object

- [keyEventWithType:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [eventWithEventRef:](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.
- [eventWithCGEvent:](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.
