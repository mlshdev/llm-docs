> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/performdrag(with:)](https://developer.apple.com/documentation/appkit/nswindow/performdrag(with:))

# performDrag(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Starts a window drag based on the specified mouse-down event.

## Declaration

```swift
func performDrag(with event: NSEvent)
```

## Parameters

- `event`: The original mouse-down event received by the application or a view.

<a id="Discussion"></a>

## Discussion

Your application (or a view) can call this method after receiving and examining a mouse-down event. Upon examination of the event, a view may allow that portion of the window to start a window drag and can hand off the work to the Window Server process by calling this method. Doing so allows the window to participate in space switching and other system features.

This method returns right away, and a mouse-up event may not get sent.

## See Also

### Handling Mouse Events

- [acceptsMouseMovedEvents](acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [windowNumber(at:belowWindowWithWindowNumber:)](windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [trackEvents(matching:timeout:mode:handler:)](trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [foreverDuration](../nsevent/foreverduration.md): The longest time duration possible.

# performWindowDragWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Starts a window drag based on the specified mouse-down event.

## Declaration

```objectivec
- (void) performWindowDragWithEvent:(NSEvent *) event;
```

## Parameters

- `event`: The original mouse-down event received by the application or a view.

<a id="Discussion"></a>

## Discussion

Your application (or a view) can call this method after receiving and examining a mouse-down event. Upon examination of the event, a view may allow that portion of the window to start a window drag and can hand off the work to the Window Server process by calling this method. Doing so allows the window to participate in space switching and other system features.

This method returns right away, and a mouse-up event may not get sent.

## See Also

### Handling Mouse Events

- [acceptsMouseMovedEvents](acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [windowNumberAtPoint:belowWindowWithWindowNumber:](windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [trackEventsMatchingMask:timeout:mode:handler:](trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [NSEventDurationForever](../nsevent/foreverduration.md): The longest time duration possible.
