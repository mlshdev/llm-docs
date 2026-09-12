> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/flushbufferedkeyevents()](https://developer.apple.com/documentation/appkit/nsresponder/flushbufferedkeyevents())

# flushBufferedKeyEvents() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Clears any unprocessed key events when overridden by subclasses.

## Declaration

```swift
func flushBufferedKeyEvents()
```

## See Also

### Responding to Key Events

- [keyDown(with:)](keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [keyUp(with:)](keyup%28with_%29.md): Informs the receiver that the user has released a key.
- [interpretKeyEvents(\_:)](interpretkeyevents%28__%29.md): Handles a series of key events.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Handle a key equivalent.

# flushBufferedKeyEvents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Clears any unprocessed key events when overridden by subclasses.

## Declaration

```objectivec
- (void) flushBufferedKeyEvents;
```

## See Also

### Responding to Key Events

- [keyDown:](keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [keyUp:](keyup%28with_%29.md): Informs the receiver that the user has released a key.
- [interpretKeyEvents:](interpretkeyevents%28__%29.md): Handles a series of key events.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Handle a key equivalent.
- [performMnemonic:](performmnemonic_.md): Deprecated. Handle a mnemonic.
