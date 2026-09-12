> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/init(eventref:)](https://developer.apple.com/documentation/appkit/nsevent/init(eventref:))

# init(eventRef:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Creates and returns a new event object for a Carbon event.

## Declaration

```swift
init?(eventRef: UnsafeRawPointer)
```

## Parameters

- `eventRef`: The `EventRef` opaque type to be associated with the created `NSEvent` object.

<a id="return-value"></a>

## Return Value

An autoreleased `NSEvent` object corresponding to `eventRef` or `nil` if `eventRef` cannot be converted into an equivalent `NSEvent` object.

<a id="Discussion"></a>

## Discussion

This method is valid for all events. The created `NSEvent` object retains the `EventRef` object and is released when the `NSEvent` object is freed.

## See Also

### Related Documentation

- [eventRef](eventref.md): An opaque Carbon type associated with this event.

### Creating an event object

- [keyEvent(with:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:)](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:)](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [enterExitEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:)](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [otherEvent(with:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:)](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [init(cgEvent:)](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.

# eventWithEventRef: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Creates and returns a new event object for a Carbon event.

## Declaration

```objectivec
+ (NSEvent *) eventWithEventRef:(const void *) eventRef;
```

## Parameters

- `eventRef`: The `EventRef` opaque type to be associated with the created `NSEvent` object.

<a id="return-value"></a>

## Return Value

An autoreleased `NSEvent` object corresponding to `eventRef` or `nil` if `eventRef` cannot be converted into an equivalent `NSEvent` object.

<a id="Discussion"></a>

## Discussion

This method is valid for all events. The created `NSEvent` object retains the `EventRef` object and is released when the `NSEvent` object is freed.

## See Also

### Related Documentation

- [eventRef](eventref.md): An opaque Carbon type associated with this event.

### Creating an event object

- [keyEventWithType:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [otherEventWithType:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [eventWithCGEvent:](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.
