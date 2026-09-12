> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/finishlaunching()](https://developer.apple.com/documentation/appkit/nsapplication/finishlaunching())

# finishLaunching() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.

## Declaration

```swift
func finishLaunching()
```

<a id="Discussion"></a>

## Discussion

The [run()](run%28%29.md) method calls this method before it starts the event loop. When this method begins, it posts an [willFinishLaunchingNotification](willfinishlaunchingnotification.md) to the default notification center. If you override [finishLaunching()](finishlaunching%28%29.md), the subclass method should invoke the superclass method.

## See Also

### Related Documentation

- [applicationWillFinishLaunching(\_:)](../nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.
- [applicationDidFinishLaunching(\_:)](../nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.

### Managing the event loop

- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [isRunning](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run()](run%28%29.md): Starts the main event loop.
- [stop(\_:)](stop%28__%29.md): Stops the main event loop.
- [sendEvent(\_:)](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

# finishLaunching (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.

## Declaration

```objectivec
- (void) finishLaunching;
```

<a id="Discussion"></a>

## Discussion

The [run](run%28%29.md) method calls this method before it starts the event loop. When this method begins, it posts an [NSApplicationWillFinishLaunchingNotification](willfinishlaunchingnotification.md) to the default notification center. If you override [finishLaunching](finishlaunching%28%29.md), the subclass method should invoke the superclass method.

## See Also

### Related Documentation

- [applicationWillFinishLaunching:](../nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.
- [applicationDidFinishLaunching:](../nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](currentevent.md): The last event object that the app retrieved from the event queue.
- [running](isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run](run%28%29.md): Starts the main event loop.
- [stop:](stop%28__%29.md): Stops the main event loop.
- [sendEvent:](sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
- [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.
