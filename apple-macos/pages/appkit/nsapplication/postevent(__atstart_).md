> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/postevent(_:atstart:)](https://developer.apple.com/documentation/appkit/nsapplication/postevent(_:atstart:))

# postEvent(\_:atStart:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a given event to the receiver’s event queue.

## Declaration

```swift
func postEvent(_ event: NSEvent, atStart: Bool)
```

## Parameters

- `event`: The event object to post to the queue.
- `atStart`: Specify [true](https://developer.apple.com/documentation/swift/true) to add the event to the front of the queue; otherwise, specify [false](https://developer.apple.com/documentation/swift/false) to add the event to the back of the queue.

<a id="Discussion"></a>

## Discussion

This method can also be called in subthreads. Events posted in subthreads bubble up in the main thread event queue.

## See Also

### Managing the event loop

- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [isRunning](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run()](run%28%29.md): Starts the main event loop.
- [finishLaunching()](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop(\_:)](stop%28__%29.md): Stops the main event loop.
- [sendEvent(\_:)](sendevent%28__%29.md): Dispatches an event to other objects.

# postEvent:atStart: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a given event to the receiver’s event queue.

## Declaration

```objectivec
- (void) postEvent:(NSEvent *) event atStart:(BOOL) atStart;
```

## Parameters

- `event`: The event object to post to the queue.
- `atStart`: Specify [true](https://developer.apple.com/documentation/swift/true) to add the event to the front of the queue; otherwise, specify [false](https://developer.apple.com/documentation/swift/false) to add the event to the back of the queue.

<a id="Discussion"></a>

## Discussion

This method can also be called in subthreads. Events posted in subthreads bubble up in the main thread event queue.

## See Also

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [running](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run](run%28%29.md): Starts the main event loop.
- [finishLaunching](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop:](stop%28__%29.md): Stops the main event loop.
- [sendEvent:](sendevent%28__%29.md): Dispatches an event to other objects.
- [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.
