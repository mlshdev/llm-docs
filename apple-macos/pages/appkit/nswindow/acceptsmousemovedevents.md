> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/acceptsmousemovedevents](https://developer.apple.com/documentation/appkit/nswindow/acceptsmousemovedevents)

# acceptsMouseMovedEvents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window accepts mouse-moved events.

## Declaration

```swift
var acceptsMouseMovedEvents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window accepts (and distributes) mouse-moved events; otherwise, [false](https://developer.apple.com/documentation/swift/false). By default the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Handling Mouse Events

- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [windowNumber(at:belowWindowWithWindowNumber:)](windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [trackEvents(matching:timeout:mode:handler:)](trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [performDrag(with:)](performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [foreverDuration](../nsevent/foreverduration.md): The longest time duration possible.

# acceptsMouseMovedEvents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window accepts mouse-moved events.

## Declaration

```objectivec
@property BOOL acceptsMouseMovedEvents;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window accepts (and distributes) mouse-moved events; otherwise, [false](https://developer.apple.com/documentation/swift/false). By default the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Handling Mouse Events

- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [windowNumberAtPoint:belowWindowWithWindowNumber:](windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [trackEventsMatchingMask:timeout:mode:handler:](trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [performWindowDragWithEvent:](performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [NSEventDurationForever](../nsevent/foreverduration.md): The longest time duration possible.
