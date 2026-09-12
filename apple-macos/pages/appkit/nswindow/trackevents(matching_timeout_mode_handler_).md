> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/trackevents(matching:timeout:mode:handler:)](https://developer.apple.com/documentation/appkit/nswindow/trackevents(matching:timeout:mode:handler:))

# trackEvents(matching:timeout:mode:handler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.

## Declaration

```swift
func trackEvents(matching mask: NSEvent.EventTypeMask, timeout: TimeInterval, mode: RunLoop.Mode, handler trackingHandler: (NSEvent?, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `mask`: The event mask (see `NSEventMask` in [NSEvent](../nsevent.md) for possible values).
- `timeout`: The maximum time interval the system waits for an event before passing `nil` to the handler.
- `mode`: The run loop mode.
- `trackingHandler`: A block that is called to track the events. The block takes the following parameters:

  - **event**: The event to examine.
  - **stop**: A Boolean value that indicates when tracking should stop.

<a id="Discussion"></a>

## Discussion

You can use this method in a tracking loop to get pressure events when you add [pressure](../nsevent/eventtypemask/pressure.md) to the event mask. This method returns when tracking terminates.

Each event is removed from the event queue and then passed to the tracking handler. If a matching event does not exist in the event queue, the main thread blocks in the specified runloop mode until an event of the requested type is received or the specified timeout expires. If the timeout expires, the tracking handler is called with a `nil` event (a negative timeout is interpreted as `0`). Use `NSEventDurationForever` to prevent timing out. Tracking continues until you set `stop` to [true](https://developer.apple.com/documentation/swift/true). Note that calls to [nextEvent(matching:)](nextevent%28matching_%29.md) are allowed inside the `trackingHandler` block.

## See Also

### Handling Mouse Events

- [acceptsMouseMovedEvents](acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [windowNumber(at:belowWindowWithWindowNumber:)](windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [performDrag(with:)](performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [foreverDuration](../nsevent/foreverduration.md): The longest time duration possible.

# trackEventsMatchingMask:timeout:mode:handler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.

## Declaration

```objectivec
- (void) trackEventsMatchingMask:(NSEventMask) mask timeout:(NSTimeInterval) timeout mode:(NSRunLoopMode) mode handler:(void (^)(NSEvent *event, BOOL *stop)) trackingHandler;
```

## Parameters

- `mask`: The event mask (see `NSEventMask` in [NSEvent](../nsevent.md) for possible values).
- `timeout`: The maximum time interval the system waits for an event before passing `nil` to the handler.
- `mode`: The run loop mode.
- `trackingHandler`: A block that is called to track the events. The block takes the following parameters:

  - **event**: The event to examine.
  - **stop**: A Boolean value that indicates when tracking should stop.

<a id="Discussion"></a>

## Discussion

You can use this method in a tracking loop to get pressure events when you add [NSEventMaskPressure](../nsevent/eventtypemask/pressure.md) to the event mask. This method returns when tracking terminates.

Each event is removed from the event queue and then passed to the tracking handler. If a matching event does not exist in the event queue, the main thread blocks in the specified runloop mode until an event of the requested type is received or the specified timeout expires. If the timeout expires, the tracking handler is called with a `nil` event (a negative timeout is interpreted as `0`). Use `NSEventDurationForever` to prevent timing out. Tracking continues until you set `stop` to [true](https://developer.apple.com/documentation/swift/true). Note that calls to [nextEventMatchingMask:](nextevent%28matching_%29.md) are allowed inside the `trackingHandler` block.

## See Also

### Handling Mouse Events

- [acceptsMouseMovedEvents](acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [windowNumberAtPoint:belowWindowWithWindowNumber:](windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [performWindowDragWithEvent:](performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [NSEventDurationForever](../nsevent/foreverduration.md): The longest time duration possible.
