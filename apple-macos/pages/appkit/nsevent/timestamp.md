> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/timestamp](https://developer.apple.com/documentation/appkit/nsevent/timestamp)

# timestamp (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The time when the event occurred in seconds since system startup.

## Declaration

```swift
var timestamp: TimeInterval { get }
```

## See Also

### Related Documentation

- [systemUptime](https://developer.apple.com/documentation/foundation/processinfo/systemuptime): The amount of time the system has been awake since the last time it was restarted.

### Getting general event information

- [locationInWindow](locationinwindow.md): The event location in the base coordinate system of the associated window.
- [window](window.md): The window object associated with the event.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [eventRef](eventref.md): An opaque Carbon type associated with this event.
- [cgEvent](cgevent.md): The Core Graphics event object corresponding to this event.
- [foreverDuration](foreverduration.md): The longest time duration possible.

# timestamp (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The time when the event occurred in seconds since system startup.

## Declaration

```objectivec
@property (readonly) NSTimeInterval timestamp;
```

## See Also

### Related Documentation

- [systemUptime](https://developer.apple.com/documentation/foundation/processinfo/systemuptime): The amount of time the system has been awake since the last time it was restarted.

### Getting general event information

- [locationInWindow](locationinwindow.md): The event location in the base coordinate system of the associated window.
- [window](window.md): The window object associated with the event.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [eventRef](eventref.md): An opaque Carbon type associated with this event.
- [CGEvent](cgevent.md): The Core Graphics event object corresponding to this event.
- [NSEventDurationForever](foreverduration.md): The longest time duration possible.
