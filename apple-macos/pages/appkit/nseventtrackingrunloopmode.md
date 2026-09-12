> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nseventtrackingrunloopmode](https://developer.apple.com/documentation/appkit/nseventtrackingrunloopmode)

# NSEventTrackingRunLoopMode

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The mode set when tracking events modally, such as a mouse-dragging loop.

## Declaration

```objectivec
extern NSRunLoopMode NSEventTrackingRunLoopMode;
```

## See Also

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nsapplication/nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEventsMatchingMask:beforeEvent:](nsapplication/discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](nsapplication/currentevent.md): The last event object that the app retrieved from the event queue.
- [running](nsapplication/isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run](nsapplication/run%28%29.md): Starts the main event loop.
- [finishLaunching](nsapplication/finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop:](nsapplication/stop%28__%29.md): Stops the main event loop.
- [sendEvent:](nsapplication/sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent:atStart:](nsapplication/postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
