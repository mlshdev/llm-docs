> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/init(cgevent:)-4igjn](https://developer.apple.com/documentation/appkit/nsevent/init(cgevent:)-4igjn)

# init(cgEvent:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Creates and returns an event object for a Core Graphics event.

## Declaration

```swift
init?(cgEvent: CGEvent)
```

## Parameters

- `cgEvent`: A [CGEvent](https://developer.apple.com/documentation/coregraphics/cgevent) opaque type that represents an event.

<a id="return-value"></a>

## Return Value

An autoreleased `NSEvent` object that is equivalent to `cgEvent`.

<a id="Discussion"></a>

## Discussion

The returned object retains the `CGEventRef` object (`cgEvent`) until it (the Objective-C object) is freed—it then releases the `CGEventRef` object.  If no Cocoa event corresponds to the `CGEventRef` object, this method returns `nil`.

## See Also

### Related Documentation

- [cgEvent](cgevent.md): The Core Graphics event object corresponding to this event.

### Creating an event object

- [keyEvent(with:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:)](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:)](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [enterExitEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:)](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [otherEvent(with:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:)](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [init(eventRef:)](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.

# eventWithCGEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Creates and returns an event object for a Core Graphics event.

## Declaration

```objectivec
+ (NSEvent *) eventWithCGEvent:(CGEventRef) cgEvent;
```

## Parameters

- `cgEvent`: A [CGEventRef](https://developer.apple.com/documentation/coregraphics/cgevent) opaque type that represents an event.

<a id="return-value"></a>

## Return Value

An autoreleased `NSEvent` object that is equivalent to `cgEvent`.

<a id="Discussion"></a>

## Discussion

The returned object retains the `CGEventRef` object (`cgEvent`) until it (the Objective-C object) is freed—it then releases the `CGEventRef` object.  If no Cocoa event corresponds to the `CGEventRef` object, this method returns `nil`.

## See Also

### Related Documentation

- [CGEvent](cgevent.md): The Core Graphics event object corresponding to this event.

### Creating an event object

- [keyEventWithType:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md): Creates and returns a new event object that describes a key event.
- [mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [enterExitEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:trackingNumber:userData:](enterexitevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_trackingnumber_userdata_%29.md): Creates and returns a new event object that describes a tracking-rectangle or cursor-update event.
- [otherEventWithType:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.
- [eventWithEventRef:](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.
