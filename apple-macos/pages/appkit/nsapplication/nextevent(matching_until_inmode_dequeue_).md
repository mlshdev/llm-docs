> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/nextevent(matching:until:inmode:dequeue:)](https://developer.apple.com/documentation/appkit/nsapplication/nextevent(matching:until:inmode:dequeue:))

# nextEvent(matching:until:inMode:dequeue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.

## Declaration

```swift
func nextEvent(matching mask: NSEvent.EventTypeMask, until expiration: Date?, inMode mode: RunLoop.Mode, dequeue deqFlag: Bool) -> NSEvent?
```

## Parameters

- `mask`: Contains one or more flags indicating the types of events to return. The constants section of the [NSEvent](../nsevent.md) class defines the constants you can add together to create this mask. The [discardEvents(matching:before:)](discardevents%28matching_before_%29.md) method also lists several of these constants.
- `expiration`: The expiration date for the current event request. Specifying nil for this parameter is equivalent to returning a date object using the [distantPast](https://developer.apple.com/documentation/foundation/nsdate/distantpast) method.
- `mode`: The run loop mode in which to run while looking for events. The mode you specify also determines which timers and run-loop observers may fire while the app waits for the event.
- `deqFlag`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the event removed from the queue.

<a id="return-value"></a>

## Return Value

The event object whose type matches one of the event types specified by the `mask` parameter.

<a id="Discussion"></a>

## Discussion

You can use this method to short circuit normal event dispatching and get your own events. For example, you may want to do this in response to a mouse-down event in order to track the mouse while its button is down. (In such an example, you’d pass the appropriate event types for mouse-dragged and mouse-up events to the `mask` parameter and specify the `NSEventTrackingRunLoopMode` run loop mode). Events that don’t match one of the specified event types are left in the queue.

You can specify one of the run loop modes defined by AppKit or a custom run loop mode used specifically by your app. AppKit defines the following run-loop modes:

- `NSDefaultRunLoopMode`
- `NSEventTrackingRunLoopMode`
- `NSModalPanelRunLoopMode`
- `NSConnectionReplyMode`

## See Also

### Related Documentation

- [runModal(for:)](runmodal%28for_%29.md): Starts a modal event loop for the specified window.

### Managing the event loop

- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [isRunning](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run()](run%28%29.md): Starts the main event loop.
- [finishLaunching()](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop(\_:)](stop%28__%29.md): Stops the main event loop.
- [sendEvent(\_:)](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

# nextEventMatchingMask:untilDate:inMode:dequeue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.

## Declaration

```objectivec
- (NSEvent *) nextEventMatchingMask:(NSEventMask) mask untilDate:(NSDate *) expiration inMode:(NSRunLoopMode) mode dequeue:(BOOL) deqFlag;
```

## Parameters

- `mask`: Contains one or more flags indicating the types of events to return. The constants section of the [NSEvent](../nsevent.md) class defines the constants you can add together to create this mask. The [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md) method also lists several of these constants.
- `expiration`: The expiration date for the current event request. Specifying nil for this parameter is equivalent to returning a date object using the [distantPast](https://developer.apple.com/documentation/foundation/nsdate/distantpast) method.
- `mode`: The run loop mode in which to run while looking for events. The mode you specify also determines which timers and run-loop observers may fire while the app waits for the event.
- `deqFlag`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the event removed from the queue.

<a id="return-value"></a>

## Return Value

The event object whose type matches one of the event types specified by the `mask` parameter.

<a id="Discussion"></a>

## Discussion

You can use this method to short circuit normal event dispatching and get your own events. For example, you may want to do this in response to a mouse-down event in order to track the mouse while its button is down. (In such an example, you’d pass the appropriate event types for mouse-dragged and mouse-up events to the `mask` parameter and specify the `NSEventTrackingRunLoopMode` run loop mode). Events that don’t match one of the specified event types are left in the queue.

You can specify one of the run loop modes defined by AppKit or a custom run loop mode used specifically by your app. AppKit defines the following run-loop modes:

- `NSDefaultRunLoopMode`
- `NSEventTrackingRunLoopMode`
- `NSModalPanelRunLoopMode`
- `NSConnectionReplyMode`

## See Also

### Related Documentation

- [runModalForWindow:](runmodal%28for_%29.md): Starts a modal event loop for the specified window.

### Managing the event loop

- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [running](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run](run%28%29.md): Starts the main event loop.
- [finishLaunching](finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop:](stop%28__%29.md): Stops the main event loop.
- [sendEvent:](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
- [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.
