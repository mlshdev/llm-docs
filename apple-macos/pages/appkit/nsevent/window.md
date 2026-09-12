> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/window](https://developer.apple.com/documentation/appkit/nsevent/window)

# window (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window object associated with the event.

## Declaration

```swift
weak var window: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

Periodic events do not have a window. The result of accessing this property on a periodic event is undefined.

## See Also

### Getting general event information

- [locationInWindow](locationinwindow.md): The event location in the base coordinate system of the associated window.
- [timestamp](timestamp.md): The time when the event occurred in seconds since system startup.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [eventRef](eventref.md): An opaque Carbon type associated with this event.
- [cgEvent](cgevent.md): The Core Graphics event object corresponding to this event.
- [foreverDuration](foreverduration.md): The longest time duration possible.

# window (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window object associated with the event.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSWindow * window;
```

<a id="Discussion"></a>

## Discussion

Periodic events do not have a window. The result of accessing this property on a periodic event is undefined.

## See Also

### Getting general event information

- [locationInWindow](locationinwindow.md): The event location in the base coordinate system of the associated window.
- [timestamp](timestamp.md): The time when the event occurred in seconds since system startup.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [eventRef](eventref.md): An opaque Carbon type associated with this event.
- [CGEvent](cgevent.md): The Core Graphics event object corresponding to this event.
- [NSEventDurationForever](foreverduration.md): The longest time duration possible.
