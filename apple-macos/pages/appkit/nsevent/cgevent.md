> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/cgevent](https://developer.apple.com/documentation/appkit/nsevent/cgevent)

# cgEvent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The Core Graphics event object corresponding to this event.

## Declaration

```swift
var cgEvent: CGEvent? { get }
```

<a id="Discussion"></a>

## Discussion

The [CGEvent](https://developer.apple.com/documentation/coregraphics/cgevent) opaque type returned is autoreleased. If no `CGEventRef` object corresponding to the `NSEvent` object can be created, this method returns `NULL`.

## See Also

### Related Documentation

- [init(cgEvent:)](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.

### Getting general event information

- [locationInWindow](locationinwindow.md): The event location in the base coordinate system of the associated window.
- [timestamp](timestamp.md): The time when the event occurred in seconds since system startup.
- [window](window.md): The window object associated with the event.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [eventRef](eventref.md): An opaque Carbon type associated with this event.
- [foreverDuration](foreverduration.md): The longest time duration possible.

# CGEvent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The Core Graphics event object corresponding to this event.

## Declaration

```objectivec
@property (readonly, nullable) CGEventRef CGEvent;
```

<a id="Discussion"></a>

## Discussion

The [CGEventRef](https://developer.apple.com/documentation/coregraphics/cgevent) opaque type returned is autoreleased. If no `CGEventRef` object corresponding to the `NSEvent` object can be created, this method returns `NULL`.

## See Also

### Related Documentation

- [eventWithCGEvent:](init%28cgevent_%29-4igjn.md): Creates and returns an event object for a Core Graphics event.

### Getting general event information

- [locationInWindow](locationinwindow.md): The event location in the base coordinate system of the associated window.
- [timestamp](timestamp.md): The time when the event occurred in seconds since system startup.
- [window](window.md): The window object associated with the event.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [eventRef](eventref.md): An opaque Carbon type associated with this event.
- [NSEventDurationForever](foreverduration.md): The longest time duration possible.
