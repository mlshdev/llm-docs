> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventref](https://developer.apple.com/documentation/appkit/nsevent/eventref)

# eventRef (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An opaque Carbon type associated with this event.

## Declaration

```swift
var eventRef: UnsafeRawPointer? { get }
```

<a id="Discussion"></a>

## Discussion

This method is valid for all types of events. The `EventRef` object is retained by the receiver, so it is valid as long as the `NSEvent` object is valid, and is released when the `NSEvent` object is freed. You can use `RetainEvent(_:)` to extend the lifetime of the `EventRef` object, with a corresponding `ReleaseEvent(_:)` when you are done with it.

The system typically creates user-input events with an associated `EventRef`. Other `NSEvent` objects create an `EventRef` when this property is first accessed, if possible. If there is no equivalent `NSEvent` for this event, the property is set to `NULL`.

## See Also

### Related Documentation

- [init(eventRef:)](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.

### Getting general event information

- [locationInWindow](locationinwindow.md): The event location in the base coordinate system of the associated window.
- [timestamp](timestamp.md): The time when the event occurred in seconds since system startup.
- [window](window.md): The window object associated with the event.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [cgEvent](cgevent.md): The Core Graphics event object corresponding to this event.
- [foreverDuration](foreverduration.md): The longest time duration possible.

# eventRef (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An opaque Carbon type associated with this event.

## Declaration

```objectivec
@property (readonly, nullable) const void * eventRef;
```

<a id="Discussion"></a>

## Discussion

This method is valid for all types of events. The `EventRef` object is retained by the receiver, so it is valid as long as the `NSEvent` object is valid, and is released when the `NSEvent` object is freed. You can use `RetainEvent(_:)` to extend the lifetime of the `EventRef` object, with a corresponding `ReleaseEvent(_:)` when you are done with it.

The system typically creates user-input events with an associated `EventRef`. Other `NSEvent` objects create an `EventRef` when this property is first accessed, if possible. If there is no equivalent `NSEvent` for this event, the property is set to `NULL`.

## See Also

### Related Documentation

- [eventWithEventRef:](init%28eventref_%29.md): Creates and returns a new event object for a Carbon event.

### Getting general event information

- [locationInWindow](locationinwindow.md): The event location in the base coordinate system of the associated window.
- [timestamp](timestamp.md): The time when the event occurred in seconds since system startup.
- [window](window.md): The window object associated with the event.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [CGEvent](cgevent.md): The Core Graphics event object corresponding to this event.
- [NSEventDurationForever](foreverduration.md): The longest time duration possible.
