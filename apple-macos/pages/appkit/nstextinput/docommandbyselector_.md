> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/docommandbyselector:](https://developer.apple.com/documentation/appkit/nstextinput/docommandbyselector:)

# doCommandBySelector:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Invokes the given selector if possible.

## Declaration

```objectivec
- (void) doCommandBySelector:(SEL) selector;
```

## Parameters

- `selector`: The selector to be invoked.

<a id="Discussion"></a>

## Discussion

If `selector` cannot be invoked, then [doCommandBySelector:](docommandbyselector_.md) should not pass this message up the responder chain. `NSResponder` also implements this method, and it does forward uninvokable commands up the responder chain, but a text view should not. A text view implementing the [NSTextInput](../nstextinput.md) protocol inherits from `NSView`, which inherits from `NSResponder`, so your implementation of this method will override the one in `NSResponder`. It should not call `super`.

## See Also

### Related Documentation

- [interpretKeyEvents:](../nsresponder/interpretkeyevents%28__%29.md): Handles a series of key events.
