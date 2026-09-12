> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/run()](https://developer.apple.com/documentation/appkit/nsapplication/run())

# run() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the main event loop.

## Declaration

```swift
func run()
```

<a id="Discussion"></a>

## Discussion

The loop continues until a [stop(\_:)](stop%28__%29.md) or [terminate(\_:)](terminate%28__%29.md) message is received. Upon each iteration through the loop, the next available event from the window server is stored and then dispatched by sending it to `NSApp` using [sendEvent(\_:)](sendevent%28__%29.md).

After creating the `NSApplication` object, the `main` function should load your app’s main nib file and then start the event loop by sending the `NSApplication` object a [run()](run%28%29.md) message. If you create an Cocoa app project in Xcode, this `main` function is implemented for you.

## See Also

### Related Documentation

- [runModalSession(\_:)](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSession(for:)](beginmodalsession%28for_%29.md).
- [runModal(for:)](runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [applicationDidFinishLaunching(\_:)](../nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.

### Managing the event loop

- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [isRunning](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [finishLaunching()](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop(\_:)](stop%28__%29.md): Stops the main event loop.
- [sendEvent(\_:)](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

# run (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the main event loop.

## Declaration

```objectivec
- (void) run;
```

<a id="Discussion"></a>

## Discussion

The loop continues until a [stop:](stop%28__%29.md) or [terminate:](terminate%28__%29.md) message is received. Upon each iteration through the loop, the next available event from the window server is stored and then dispatched by sending it to `NSApp` using [sendEvent:](sendevent%28__%29.md).

After creating the `NSApplication` object, the `main` function should load your app’s main nib file and then start the event loop by sending the `NSApplication` object a [run](run%28%29.md) message. If you create an Cocoa app project in Xcode, this `main` function is implemented for you.

## See Also

### Related Documentation

- [runModalSession:](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](beginmodalsession%28for_%29.md).
- [runModalForWindow:](runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [applicationDidFinishLaunching:](../nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [running](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [finishLaunching](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop:](stop%28__%29.md): Stops the main event loop.
- [sendEvent:](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
- [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.
