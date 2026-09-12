> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/trytoperform(_:with:)](https://developer.apple.com/documentation/appkit/nswindow/trytoperform(_:with:))

# tryToPerform(\_:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Dispatches action messages with a given argument.

## Declaration

```swift
func tryToPerform(_ action: Selector, with object: Any?) -> Bool
```

## Parameters

- `action`: The selector to attempt to execute.
- `object`: The message’s argument.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the window or its delegate perform `action` with `object`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The window tries to perform the method `action` using its inherited `NSResponder` method [tryToPerform(\_:with:)](../nsresponder/trytoperform%28__with_%29.md). If the window doesn’t perform `action`, the delegate is given the opportunity to perform it using its inherited `NSObject` method [perform(\_:with:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/perform%28_:with:%29).

## See Also

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEvent(matching:)](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEvent(matching:until:inMode:dequeue:)](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEvents(matching:before:)](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent(\_:atStart:)](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent(\_:)](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.

# tryToPerform:with: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Dispatches action messages with a given argument.

## Declaration

```objectivec
- (BOOL) tryToPerform:(SEL) action with:(id) object;
```

## Parameters

- `action`: The selector to attempt to execute.
- `object`: The message’s argument.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the window or its delegate perform `action` with `object`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The window tries to perform the method `action` using its inherited `NSResponder` method [tryToPerform:with:](../nsresponder/trytoperform%28__with_%29.md). If the window doesn’t perform `action`, the delegate is given the opportunity to perform it using its inherited `NSObject` method [performSelector:withObject:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/perform%28_:with:%29).

## See Also

### Handling Events

- [currentEvent](currentevent.md): The event currently being processed by the application.
- [nextEventMatchingMask:](nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEventMatchingMask:untilDate:inMode:dequeue:](nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEventsMatchingMask:beforeEvent:](discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent:atStart:](postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent:](sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
