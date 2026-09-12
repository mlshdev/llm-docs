> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/discardevents(matching:before:)](https://developer.apple.com/documentation/appkit/nswindow/discardevents(matching:before:))

# discardEvents(matching:before:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forwards the message to the global application object.

## Declaration

```swift
func discardEvents(matching mask: NSEvent.EventTypeMask, before lastEvent: NSEvent?)
```

## Parameters

- `mask`: The mask of the events to discard.
- `lastEvent`: The event up to which queued events are discarded from the queue.

## See Also

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEvent(matching:)](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent(\_:)](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.

# discardEventsMatchingMask:beforeEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forwards the message to the global application object.

## Declaration

```objectivec
- (void) discardEventsMatchingMask:(NSEventMask) mask beforeEvent:(NSEvent *) lastEvent;
```

## Parameters

- `mask`: The mask of the events to discard.
- `lastEvent`: The event up to which queued events are discarded from the queue.

## See Also

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEventMatchingMask:](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent:](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.
