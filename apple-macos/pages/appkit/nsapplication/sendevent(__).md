> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/sendevent(_:)](https://developer.apple.com/documentation/appkit/nsapplication/sendevent(_:))

# sendEvent(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Dispatches an event to other objects.

## Declaration

```swift
func sendEvent(_ event: NSEvent)
```

## Parameters

- `event`: The event object to dispatch.

<a id="Discussion"></a>

## Discussion

You rarely invoke [sendEvent(\_:)](sendevent%28__%29.md) directly, although you might want to override this method to perform some action on every event. [sendEvent(\_:)](sendevent%28__%29.md) messages are sent from the main event loop (the [run()](run%28%29.md) method). [sendEvent(\_:)](sendevent%28__%29.md) is the method that dispatches events to the appropriate responders—`NSApp` handles app events, the [NSWindow](../nswindow.md) object indicated in the event record handles window-related events, and mouse and key events are forwarded to the appropriate [NSWindow](../nswindow.md) object for further dispatching.

## See Also

### Managing the event loop

- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [isRunning](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run()](run%28%29.md): Starts the main event loop.
- [finishLaunching()](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop(\_:)](stop%28__%29.md): Stops the main event loop.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

# sendEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Dispatches an event to other objects.

## Declaration

```objectivec
- (void) sendEvent:(NSEvent *) event;
```

## Parameters

- `event`: The event object to dispatch.

<a id="Discussion"></a>

## Discussion

You rarely invoke [sendEvent:](sendevent%28__%29.md) directly, although you might want to override this method to perform some action on every event. [sendEvent:](sendevent%28__%29.md) messages are sent from the main event loop (the [run](run%28%29.md) method). [sendEvent:](sendevent%28__%29.md) is the method that dispatches events to the appropriate responders—`NSApp` handles app events, the [NSWindow](../nswindow.md) object indicated in the event record handles window-related events, and mouse and key events are forwarded to the appropriate [NSWindow](../nswindow.md) object for further dispatching.

## See Also

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [running](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run](run%28%29.md): Starts the main event loop.
- [finishLaunching](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop:](stop%28__%29.md): Stops the main event loop.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
- [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.
