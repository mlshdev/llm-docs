> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext/client](https://developer.apple.com/documentation/appkit/nstextinputcontext/client)

# client (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The owner of this input context. (read-only)

## Declaration

```swift
var client: any NSTextInputClient { get }
```

<a id="Discussion"></a>

## Discussion

The client (owner) of the input context, typically an `NSView` instance, retains its `NSTextInputContext` instance. The `NSTextInputContext` instance doesn’t retain its client.

## See Also

### Getting the Input Context and Client

- [current](current.md): Returns the current, activated, text input context object.

# client (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The owner of this input context. (read-only)

## Declaration

```objectivec
@property (readonly) id<NSTextInputClient> client;
```

<a id="Discussion"></a>

## Discussion

The client (owner) of the input context, typically an `NSView` instance, retains its `NSTextInputContext` instance. The `NSTextInputContext` instance doesn’t retain its client.

## See Also

### Getting the Input Context and Client

- [currentInputContext](current.md): Returns the current, activated, text input context object.
