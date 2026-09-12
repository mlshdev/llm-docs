> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/currentevent](https://developer.apple.com/documentation/appkit/nswindow/currentevent)

# currentEvent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The event currently being processed by the application.

## Declaration

```swift
var currentEvent: NSEvent? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is given by calling by invoking the [NSApplication](../nsapplication.md) method [currentEvent](../nsapplication/currentevent.md).

## See Also

### Handling Events

- [nextEvent(matching:)](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent(\_:)](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.

# currentEvent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The event currently being processed by the application.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSEvent * currentEvent;
```

<a id="Discussion"></a>

## Discussion

The value of this property is given by calling by invoking the [NSApplication](../nsapplication.md) method [currentEvent](../nsapplication/currentevent.md).

## See Also

### Handling Events

- [nextEventMatchingMask:](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent:](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.
