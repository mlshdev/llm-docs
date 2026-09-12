> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/nextevent(matching:until:inmode:dequeue:)](https://developer.apple.com/documentation/appkit/nswindow/nextevent(matching:until:inmode:dequeue:))

# nextEvent(matching:until:inMode:dequeue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forwards the message to the global application object.

## Declaration

```swift
func nextEvent(matching mask: NSEvent.EventTypeMask, until expiration: Date?, inMode mode: RunLoop.Mode, dequeue deqFlag: Bool) -> NSEvent?
```

## Parameters

- `mask`: The mask that the event to return must match.
- `expiration`: The date until which to wait for events.
- `mode`: The run loop mode to use while waiting for events
- `deqFlag`: [true](https://developer.apple.com/documentation/swift/true) to remove the returned event from the event queue; [false](https://developer.apple.com/documentation/swift/false) to leave the returned event in the queue.

<a id="return-value"></a>

## Return Value

The next event whose mask matches the specified `mask`; otherwise, `nil`.

## See Also

### Related Documentation

- [nextEvent(matching:until:inMode:dequeue:)](../nsapplication/nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEvent(matching:)](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent(\_:)](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.

# nextEventMatchingMask:untilDate:inMode:dequeue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forwards the message to the global application object.

## Declaration

```objectivec
- (NSEvent *) nextEventMatchingMask:(NSEventMask) mask untilDate:(NSDate *) expiration inMode:(NSRunLoopMode) mode dequeue:(BOOL) deqFlag;
```

## Parameters

- `mask`: The mask that the event to return must match.
- `expiration`: The date until which to wait for events.
- `mode`: The run loop mode to use while waiting for events
- `deqFlag`: [true](https://developer.apple.com/documentation/swift/true) to remove the returned event from the event queue; [false](https://developer.apple.com/documentation/swift/false) to leave the returned event in the queue.

<a id="return-value"></a>

## Return Value

The next event whose mask matches the specified `mask`; otherwise, `nil`.

## See Also

### Related Documentation

- [nextEventMatchingMask:untilDate:inMode:dequeue:](../nsapplication/nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEventMatchingMask:](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent:](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.
