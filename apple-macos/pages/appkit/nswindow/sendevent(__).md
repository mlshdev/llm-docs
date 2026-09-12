> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/sendevent(_:)](https://developer.apple.com/documentation/appkit/nswindow/sendevent(_:))

# sendEvent(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method dispatches mouse and keyboard events the global application object sends to the window.

## Declaration

```swift
func sendEvent(_ event: NSEvent)
```

## Parameters

- `event`: The mouse or keyboard event to process.

<a id="Discussion"></a>

## Discussion

Never invoke this method directly. A right mouse-down event in a window of an inactive application isn’t delivered to the corresponding `NSWindow` object. Instead, a [sendEvent(\_:)](../nsapplication/sendevent%28__%29.md) message with a window number of `0` delivers it to the NSApplication object.

## See Also

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEvent(matching:)](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.

# sendEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method dispatches mouse and keyboard events the global application object sends to the window.

## Declaration

```objectivec
- (void) sendEvent:(NSEvent *) event;
```

## Parameters

- `event`: The mouse or keyboard event to process.

<a id="Discussion"></a>

## Discussion

Never invoke this method directly. A right mouse-down event in a window of an inactive application isn’t delivered to the corresponding `NSWindow` object. Instead, a [sendEvent:](../nsapplication/sendevent%28__%29.md) message with a window number of `0` delivers it to the NSApplication object.

## See Also

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEventMatchingMask:](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.
