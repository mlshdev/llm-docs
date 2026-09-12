> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/mouselocationoutsideofeventstream](https://developer.apple.com/documentation/appkit/nswindow/mouselocationoutsideofeventstream)

# mouseLocationOutsideOfEventStream (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.

## Declaration

```swift
var mouseLocationOutsideOfEventStream: NSPoint { get }
```

<a id="Discussion"></a>

## Discussion

For the same information in screen coordinates, use `NSEvent`’s [mouseLocation](../nsevent/mouselocation.md).

## See Also

### Related Documentation

- [currentEvent](../nsapplication/currentevent.md): The last event object that the app retrieved from the event queue.

### Handling Mouse Events

- [acceptsMouseMovedEvents](acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [windowNumber(at:belowWindowWithWindowNumber:)](windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [trackEvents(matching:timeout:mode:handler:)](trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [performDrag(with:)](performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [foreverDuration](../nsevent/foreverduration.md): The longest time duration possible.

# mouseLocationOutsideOfEventStream (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.

## Declaration

```objectivec
@property (readonly) NSPoint mouseLocationOutsideOfEventStream;
```

<a id="Discussion"></a>

## Discussion

For the same information in screen coordinates, use `NSEvent`’s [mouseLocation](../nsevent/mouselocation.md).

## See Also

### Related Documentation

- [currentEvent](../nsapplication/currentevent.md): The last event object that the app retrieved from the event queue.

### Handling Mouse Events

- [acceptsMouseMovedEvents](acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [windowNumberAtPoint:belowWindowWithWindowNumber:](windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [trackEventsMatchingMask:timeout:mode:handler:](trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [performWindowDragWithEvent:](performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [NSEventDurationForever](../nsevent/foreverduration.md): The longest time duration possible.
