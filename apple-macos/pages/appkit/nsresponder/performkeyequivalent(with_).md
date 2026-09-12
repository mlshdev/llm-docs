> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/performkeyequivalent(with:)](https://developer.apple.com/documentation/appkit/nsresponder/performkeyequivalent(with:))

# performKeyEquivalent(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handle a key equivalent.

## Declaration

```swift
func performKeyEquivalent(with event: NSEvent) -> Bool
```

## Parameters

- `event`: An event object that represents the key equivalent pressed.

<a id="Discussion"></a>

## Discussion

Override to handle key equivalents. If the character code or codes in `event` match the receiver’s key equivalent, the receiver should respond to the event and return [true](https://developer.apple.com/documentation/swift/true). The default implementation does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md) takes an [NSEvent](../nsevent.md) object as its argument, while [performMnemonic:](performmnemonic_.md) takes an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object containing the uninterpreted characters of the key event. You should extract the characters for a key equivalent using the `NSEvent` method  [charactersIgnoringModifiers](../nsevent/charactersignoringmodifiers.md).

## See Also

### Related Documentation

- [performKeyEquivalent(with:)](../nsview/performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [performKeyEquivalent(with:)](../nsbutton/performkeyequivalent%28with_%29.md): Checks the button’s key equivalent against the specified event and, if they match, simulates the button being clicked.

### Responding to Key Events

- [keyDown(with:)](keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [keyUp(with:)](keyup%28with_%29.md): Informs the receiver that the user has released a key.
- [interpretKeyEvents(\_:)](interpretkeyevents%28__%29.md): Handles a series of key events.
- [flushBufferedKeyEvents()](flushbufferedkeyevents%28%29.md): Clears any unprocessed key events when overridden by subclasses.

# performKeyEquivalent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handle a key equivalent.

## Declaration

```objectivec
- (BOOL) performKeyEquivalent:(NSEvent *) event;
```

## Parameters

- `event`: An event object that represents the key equivalent pressed.

<a id="Discussion"></a>

## Discussion

Override to handle key equivalents. If the character code or codes in `event` match the receiver’s key equivalent, the receiver should respond to the event and return [true](https://developer.apple.com/documentation/swift/true). The default implementation does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  [performKeyEquivalent:](performkeyequivalent%28with_%29.md) takes an [NSEvent](../nsevent.md) object as its argument, while [performMnemonic:](performmnemonic_.md) takes an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object containing the uninterpreted characters of the key event. You should extract the characters for a key equivalent using the `NSEvent` method  [charactersIgnoringModifiers](../nsevent/charactersignoringmodifiers.md).

## See Also

### Related Documentation

- [performKeyEquivalent:](../nsview/performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [performKeyEquivalent:](../nsbutton/performkeyequivalent%28with_%29.md): Checks the button’s key equivalent against the specified event and, if they match, simulates the button being clicked.

### Responding to Key Events

- [keyDown:](keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [keyUp:](keyup%28with_%29.md): Informs the receiver that the user has released a key.
- [interpretKeyEvents:](interpretkeyevents%28__%29.md): Handles a series of key events.
- [performMnemonic:](performmnemonic_.md): Deprecated. Handle a mnemonic.
- [flushBufferedKeyEvents](flushbufferedkeyevents%28%29.md): Clears any unprocessed key events when overridden by subclasses.
