> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/stop(_:)](https://developer.apple.com/documentation/appkit/nsapplication/stop(_:))

# stop(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops the main event loop.

## Declaration

```swift
func stop(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method notifies the app that you want to exit the current run loop as soon as it finishes processing the current [NSEvent](../nsevent.md) object. This method doesn’t forcibly exit the current run loop. Instead it sets a flag that the app checks only after it finishes dispatching an actual event object. For example, you could call this method from an action method responding to a button click or from one of the many methods defined by the [NSResponder](../nsresponder.md) class. However, calling this method from a timer or run-loop observer routine wouldn’t stop the run loop because they don’t result in the posting of an [NSEvent](../nsevent.md) object.

If you call this method from an event handler running in your main run loop, the app object exits out of the [run()](run%28%29.md) method, thereby returning control to the `main()` function. If you call this method from within a modal event loop, it will exit the modal loop instead of the main event loop.

## See Also

### Related Documentation

- [runModalSession(\_:)](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSession(for:)](beginmodalsession%28for_%29.md).
- [terminate(\_:)](terminate%28__%29.md): Terminates the receiver.
- [runModal(for:)](runmodal%28for_%29.md): Starts a modal event loop for the specified window.

### Managing the event loop

- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [isRunning](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run()](run%28%29.md): Starts the main event loop.
- [finishLaunching()](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [sendEvent(\_:)](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

# stop: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops the main event loop.

## Declaration

```objectivec
- (void) stop:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method notifies the app that you want to exit the current run loop as soon as it finishes processing the current [NSEvent](../nsevent.md) object. This method doesn’t forcibly exit the current run loop. Instead it sets a flag that the app checks only after it finishes dispatching an actual event object. For example, you could call this method from an action method responding to a button click or from one of the many methods defined by the [NSResponder](../nsresponder.md) class. However, calling this method from a timer or run-loop observer routine wouldn’t stop the run loop because they don’t result in the posting of an [NSEvent](../nsevent.md) object.

If you call this method from an event handler running in your main run loop, the app object exits out of the [run](run%28%29.md) method, thereby returning control to the `main()` function. If you call this method from within a modal event loop, it will exit the modal loop instead of the main event loop.

## See Also

### Related Documentation

- [runModalSession:](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](beginmodalsession%28for_%29.md).
- [terminate:](terminate%28__%29.md): Terminates the receiver.
- [runModalForWindow:](runmodal%28for_%29.md): Starts a modal event loop for the specified window.

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [running](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run](run%28%29.md): Starts the main event loop.
- [finishLaunching](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [sendEvent:](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
- [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.
