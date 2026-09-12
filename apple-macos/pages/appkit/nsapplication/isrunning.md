> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/isrunning](https://developer.apple.com/documentation/appkit/nsapplication/isrunning)

# isRunning (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the main event loop is running.

## Declaration

```swift
var isRunning: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the main event loop is running or [false](https://developer.apple.com/documentation/swift/false) when it’s not. Calling the [stop(\_:)](stop%28__%29.md) method sets the value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [terminate(\_:)](terminate%28__%29.md): Terminates the receiver.

### Managing the event loop

- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [run()](run%28%29.md): Starts the main event loop.
- [finishLaunching()](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop(\_:)](stop%28__%29.md): Stops the main event loop.
- [sendEvent(\_:)](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

# running (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the main event loop is running.

## Declaration

```objectivec
@property (readonly, getter=isRunning) BOOL running;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the main event loop is running or [false](https://developer.apple.com/documentation/swift/false) when it’s not. Calling the [stop:](stop%28__%29.md) method sets the value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [terminate:](terminate%28__%29.md): Terminates the receiver.

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [run](run%28%29.md): Starts the main event loop.
- [finishLaunching](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop:](stop%28__%29.md): Stops the main event loop.
- [sendEvent:](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
- [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.
