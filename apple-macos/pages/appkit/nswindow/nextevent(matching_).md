> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/nextevent(matching:)](https://developer.apple.com/documentation/appkit/nswindow/nextevent(matching:))

# nextEvent(matching:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the next event matching a given mask.

## Declaration

```swift
func nextEvent(matching mask: NSEvent.EventTypeMask) -> NSEvent?
```

## Parameters

- `mask`: The mask that the event to return must match. Events with non-matching masks are left in the queue. See [discardEvents(matching:before:)](../nsapplication/discardevents%28matching_before_%29.md) in [NSApplication](../nsapplication.md) for the list of mask values.

<a id="return-value"></a>

## Return Value

The next event whose mask matches `mask`; `nil` when no matching event was found.

<a id="Discussion"></a>

## Discussion

This method calls the [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md) method, where the matching mask parameter is the specified `mask`, the `until` (Swift) or `untilDate` (Objective-C) parameter is [distantFuture](https://developer.apple.com/documentation/foundation/nsdate/distantfuture), the `inMode` parameter is [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md), and the `dequeue` parameter is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [nextEvent(matching:until:inMode:dequeue:)](../nsapplication/nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent(\_:)](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.

# nextEventMatchingMask: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the next event matching a given mask.

## Declaration

```objectivec
- (NSEvent *) nextEventMatchingMask:(NSEventMask) mask;
```

## Parameters

- `mask`: The mask that the event to return must match. Events with non-matching masks are left in the queue. See [discardEventsMatchingMask:beforeEvent:](../nsapplication/discardevents%28matching_before_%29.md) in [NSApplication](../nsapplication.md) for the list of mask values.

<a id="return-value"></a>

## Return Value

The next event whose mask matches `mask`; `nil` when no matching event was found.

<a id="Discussion"></a>

## Discussion

This method calls the [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md) method, where the matching mask parameter is the specified `mask`, the `until` (Swift) or `untilDate` (Objective-C) parameter is [distantFuture](https://developer.apple.com/documentation/foundation/nsdate/distantfuture), the `inMode` parameter is [NSEventTrackingRunLoopMode](../nseventtrackingrunloopmode.md), and the `dequeue` parameter is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [nextEventMatchingMask:untilDate:inMode:dequeue:](../nsapplication/nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent:](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.
