> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/keyup(with:)](https://developer.apple.com/documentation/appkit/nsresponder/keyup(with:))

# keyUp(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the user has released a key.

## Declaration

```swift
func keyUp(with event: NSEvent)
```

## Parameters

- `event`: An object encapsulating information about the key-up event.

<a id="Discussion"></a>

## Discussion

The default implementation simply passes this message to the next responder.

## See Also

### Responding to Key Events

- [keyDown(with:)](keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [interpretKeyEvents(\_:)](interpretkeyevents%28__%29.md): Handles a series of key events.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Handle a key equivalent.
- [flushBufferedKeyEvents()](flushbufferedkeyevents%28%29.md): Clears any unprocessed key events when overridden by subclasses.

# keyUp: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the user has released a key.

## Declaration

```objectivec
- (void) keyUp:(NSEvent *) event;
```

## Parameters

- `event`: An object encapsulating information about the key-up event.

<a id="Discussion"></a>

## Discussion

The default implementation simply passes this message to the next responder.

## See Also

### Responding to Key Events

- [keyDown:](keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [interpretKeyEvents:](interpretkeyevents%28__%29.md): Handles a series of key events.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Handle a key equivalent.
- [performMnemonic:](performmnemonic_.md): Deprecated. Handle a mnemonic.
- [flushBufferedKeyEvents](flushbufferedkeyevents%28%29.md): Clears any unprocessed key events when overridden by subclasses.
