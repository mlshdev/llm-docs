> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/interpretkeyevents(_:)](https://developer.apple.com/documentation/appkit/nsresponder/interpretkeyevents(_:))

# interpretKeyEvents(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles a series of key events.

## Declaration

```swift
func interpretKeyEvents(_ eventArray: [NSEvent])
```

## Parameters

- `eventArray`: An array of key-event characters to give to the system input manager.

<a id="Discussion"></a>

## Discussion

This method, which is invoked by subclasses from the [keyDown(with:)](keydown%28with_%29.md) method, sends the character input in `eventArray` to the system input manager for interpretation as text to insert or commands to perform. The input manager responds to the request by sending [insertText(\_:)](../nsstandardkeybindingresponding/inserttext%28__%29.md) and [doCommand(by:)](../nsstandardkeybindingresponding/docommand%28by_%29.md) messages back to the invoker of this method. Subclasses shouldn’t override this method.

See the [NSInputManager](../nsinputmanager.md) and [NSTextInput](../nstextinput.md) class and protocol specifications for more information on input management.

## See Also

### Responding to Key Events

- [keyDown(with:)](keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [keyUp(with:)](keyup%28with_%29.md): Informs the receiver that the user has released a key.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Handle a key equivalent.
- [flushBufferedKeyEvents()](flushbufferedkeyevents%28%29.md): Clears any unprocessed key events when overridden by subclasses.

# interpretKeyEvents: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles a series of key events.

## Declaration

```objectivec
- (void) interpretKeyEvents:(NSArray<NSEvent *> *) eventArray;
```

## Parameters

- `eventArray`: An array of key-event characters to give to the system input manager.

<a id="Discussion"></a>

## Discussion

This method, which is invoked by subclasses from the [keyDown:](keydown%28with_%29.md) method, sends the character input in `eventArray` to the system input manager for interpretation as text to insert or commands to perform. The input manager responds to the request by sending [insertText:](../nsstandardkeybindingresponding/inserttext%28__%29.md) and [doCommandBySelector:](../nsstandardkeybindingresponding/docommand%28by_%29.md) messages back to the invoker of this method. Subclasses shouldn’t override this method.

See the [NSInputManager](../nsinputmanager.md) and [NSTextInput](../nstextinput.md) class and protocol specifications for more information on input management.

## See Also

### Responding to Key Events

- [keyDown:](keydown%28with_%29.md): Informs the receiver that the user has pressed a key.
- [keyUp:](keyup%28with_%29.md): Informs the receiver that the user has released a key.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Handle a key equivalent.
- [performMnemonic:](performmnemonic_.md): Deprecated. Handle a mnemonic.
- [flushBufferedKeyEvents](flushbufferedkeyevents%28%29.md): Clears any unprocessed key events when overridden by subclasses.
