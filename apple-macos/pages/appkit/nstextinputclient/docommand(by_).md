> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/docommand(by:)](https://developer.apple.com/documentation/appkit/nstextinputclient/docommand(by:))

# doCommand(by:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Invokes the action specified by the given selector.

## Declaration

```swift
func doCommand(by selector: Selector)
```

## Parameters

- `selector`: The selector to invoke.

<a id="Discussion"></a>

## Discussion

If `selector` cannot be invoked, then `doCommandBySelector:` should not pass this message up the responder chain. `NSResponder` also implements this method, and it does forward uninvokable commands up the responder chain, but a text view should not. A text view implementing the `NSTextInputClient` protocol inherits from `NSView`, which inherits from `NSResponder`, so your implementation of this method will override the one in `NSResponder`. It should not call `super`.

## See Also

### Related Documentation

- [interpretKeyEvents(\_:)](../nsresponder/interpretkeyevents%28__%29.md): Handles a series of key events.

# doCommandBySelector: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invokes the action specified by the given selector.

## Declaration

```objectivec
- (void) doCommandBySelector:(SEL) selector;
```

## Parameters

- `selector`: The selector to invoke.

<a id="Discussion"></a>

## Discussion

If `selector` cannot be invoked, then `doCommandBySelector:` should not pass this message up the responder chain. `NSResponder` also implements this method, and it does forward uninvokable commands up the responder chain, but a text view should not. A text view implementing the `NSTextInputClient` protocol inherits from `NSView`, which inherits from `NSResponder`, so your implementation of this method will override the one in `NSResponder`. It should not call `super`.

## See Also

### Related Documentation

- [interpretKeyEvents:](../nsresponder/interpretkeyevents%28__%29.md): Handles a series of key events.
