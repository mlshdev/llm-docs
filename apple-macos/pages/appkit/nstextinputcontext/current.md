> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext/current](https://developer.apple.com/documentation/appkit/nstextinputcontext/current)

# current (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Returns the current, activated, text input context object.

## Declaration

```swift
class var current: NSTextInputContext? { get }
```

## See Also

### Getting the Input Context and Client

- [client](client.md): The owner of this input context. (read-only)

# currentInputContext (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Returns the current, activated, text input context object.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSTextInputContext * currentInputContext;
```

## See Also

### Getting the Input Context and Client

- [client](client.md): The owner of this input context. (read-only)
