> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/performmnemonic:](https://developer.apple.com/documentation/appkit/nsresponder/performmnemonic:)

# performMnemonic:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Handle a mnemonic.

## Declaration

```objectivec
- (BOOL) performMnemonic:(NSString *) string;
```

## Parameters

- `string`: A string containing mnemonic character code or codes.

<a id="Discussion"></a>

## Discussion

Orverride to respond to mnemonics. If the character code or codes in s`tring` match the receiver’s mnemonic, the receiver should perform the mnemonic and return [true](https://developer.apple.com/documentation/swift/true). The default implementation does nothing and returns [false](https://developer.apple.com/documentation/swift/false). Mnemonics are not supported in macOS.

## See Also

### Related Documentation

- [performMnemonic:](../nsview/performmnemonic_.md): Deprecated. Implemented by subclasses to respond to mnemonics.

### Responding to Key Events

- [keyDown:](keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [keyUp:](keyup%28with_%29.md): Informs the receiver that the user has released a key.
- [interpretKeyEvents:](interpretkeyevents%28__%29.md): Handles a series of key events.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Handle a key equivalent.
- [flushBufferedKeyEvents](flushbufferedkeyevents%28%29.md): Clears any unprocessed key events when overridden by subclasses.
