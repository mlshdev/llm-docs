> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/currentevent](https://developer.apple.com/documentation/appkit/nsapplication/currentevent)

# currentEvent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The last event object that the app retrieved from the event queue.

## Declaration

```swift
var currentEvent: NSEvent? { get }
```

<a id="Discussion"></a>

## Discussion

The shared app object receives events and forwards them to the affected [NSWindow](../nswindow.md) objects, which then distribute them to the objects in its view hierarchy. Use this property to get the event that was last handled by the app.

## See Also

### Managing the event loop

- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [isRunning](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run()](run%28%29.md): Starts the main event loop.
- [finishLaunching()](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop(\_:)](stop%28__%29.md): Stops the main event loop.
- [sendEvent(\_:)](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

# currentEvent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The last event object that the app retrieved from the event queue.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSEvent * currentEvent;
```

<a id="Discussion"></a>

## Discussion

The shared app object receives events and forwards them to the affected [NSWindow](../nswindow.md) objects, which then distribute them to the objects in its view hierarchy. Use this property to get the event that was last handled by the app.

## See Also

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [running](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run](run%28%29.md): Starts the main event loop.
- [finishLaunching](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop:](stop%28__%29.md): Stops the main event loop.
- [sendEvent:](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
- [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.
