> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/postevent(_:atstart:)](https://developer.apple.com/documentation/appkit/nswindow/postevent(_:atstart:))

# postEvent(\_:atStart:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forwards the message to the global application object.

## Declaration

```swift
func postEvent(_ event: NSEvent, atStart flag: Bool)
```

## Parameters

- `event`: The event to add to the window’s event queue.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) to place the event in the front of the queue; [false](https://developer.apple.com/documentation/swift/false) to place it in the back.

## See Also

### Related Documentation

- [postEvent(\_:atStart:)](../nsapplication/postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEvent(matching:)](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [sendEvent(\_:)](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.

# postEvent:atStart: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forwards the message to the global application object.

## Declaration

```objectivec
- (void) postEvent:(NSEvent *) event atStart:(BOOL) flag;
```

## Parameters

- `event`: The event to add to the window’s event queue.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) to place the event in the front of the queue; [false](https://developer.apple.com/documentation/swift/false) to place it in the back.

## See Also

### Related Documentation

- [postEvent:atStart:](../nsapplication/postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEventMatchingMask:](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [sendEvent:](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.
