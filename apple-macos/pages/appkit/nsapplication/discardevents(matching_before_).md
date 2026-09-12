> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/discardevents(matching:before:)](https://developer.apple.com/documentation/appkit/nsapplication/discardevents(matching:before:))

# discardEvents(matching:before:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes all events matching the given mask and generated before the specified event.

## Declaration

```swift
func discardEvents(matching mask: NSEvent.EventTypeMask, before lastEvent: NSEvent?)
```

## Parameters

- `mask`: Contains one or more flags indicating the types of events to discard. The constants section of the [NSEvent](../nsevent.md) class defines the constants you can add together to create this mask. The discussion section also lists some of the constants that are typically used.
- `lastEvent`: A marker event that you use to indicate which events should be discarded. Events that occurred before this event are discarded but those that occurred after it are not.

<a id="Discussion"></a>

## Discussion

Use this method to ignore any events that occurred before a specific event. For example, suppose your app has a tracking loop that you exit when the user releases the mouse button. You could use this method, specifying `NSAnyEventMask` as the mask argument and the ending mouse-up event as the `lastEvent` argument, to discard all events that occurred while you were tracking mouse movements in your loop. Passing the mouse-up event as `lastEvent` ensures that any events that might have occurred after the mouse-up event (that is, that appear in the queue after the mouse-up event) aren’t discarded.

> **Note**

>  Typically, you send this message to an [NSWindow](../nswindow.md) object, rather than to the app object. Discarding events for a window clears out all of the events for that window only, leaving events for other windows in place.

For the `mask` parameter, you can add together event type constants such as the following:

- `NSLeftMouseDownMask`
- `NSLeftMouseUpMask`
- `NSRightMouseDownMask`
- `NSRightMouseUpMask`
- `NSMouseMovedMask`
- `NSLeftMouseDraggedMask`
- `NSRightMouseDraggedMask`
- `NSMouseEnteredMask`
- `NSMouseExitedMask`
- `NSKeyDownMask`
- `NSKeyUpMask`
- `NSFlagsChangedMask`
- `NSPeriodicMask`
- `NSCursorUpdateMask`
- `NSAnyEventMask`

This method can also be called in subthreads. Events posted in subthreads bubble up in the main thread event queue.

## See Also

### Managing the event loop

- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [isRunning](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run()](run%28%29.md): Starts the main event loop.
- [finishLaunching()](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop(\_:)](stop%28__%29.md): Stops the main event loop.
- [sendEvent(\_:)](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

# discardEventsMatchingMask:beforeEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes all events matching the given mask and generated before the specified event.

## Declaration

```objectivec
- (void) discardEventsMatchingMask:(NSEventMask) mask beforeEvent:(NSEvent *) lastEvent;
```

## Parameters

- `mask`: Contains one or more flags indicating the types of events to discard. The constants section of the [NSEvent](../nsevent.md) class defines the constants you can add together to create this mask. The discussion section also lists some of the constants that are typically used.
- `lastEvent`: A marker event that you use to indicate which events should be discarded. Events that occurred before this event are discarded but those that occurred after it are not.

<a id="Discussion"></a>

## Discussion

Use this method to ignore any events that occurred before a specific event. For example, suppose your app has a tracking loop that you exit when the user releases the mouse button. You could use this method, specifying `NSAnyEventMask` as the mask argument and the ending mouse-up event as the `lastEvent` argument, to discard all events that occurred while you were tracking mouse movements in your loop. Passing the mouse-up event as `lastEvent` ensures that any events that might have occurred after the mouse-up event (that is, that appear in the queue after the mouse-up event) aren’t discarded.

> **Note**

>  Typically, you send this message to an [NSWindow](../nswindow.md) object, rather than to the app object. Discarding events for a window clears out all of the events for that window only, leaving events for other windows in place.

For the `mask` parameter, you can add together event type constants such as the following:

- `NSLeftMouseDownMask`
- `NSLeftMouseUpMask`
- `NSRightMouseDownMask`
- `NSRightMouseUpMask`
- `NSMouseMovedMask`
- `NSLeftMouseDraggedMask`
- `NSRightMouseDraggedMask`
- `NSMouseEnteredMask`
- `NSMouseExitedMask`
- `NSKeyDownMask`
- `NSKeyUpMask`
- `NSFlagsChangedMask`
- `NSPeriodicMask`
- `NSCursorUpdateMask`
- `NSAnyEventMask`

This method can also be called in subthreads. Events posted in subthreads bubble up in the main thread event queue.

## See Also

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [running](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run](run%28%29.md): Starts the main event loop.
- [finishLaunching](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop:](stop%28__%29.md): Stops the main event loop.
- [sendEvent:](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
- [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.
