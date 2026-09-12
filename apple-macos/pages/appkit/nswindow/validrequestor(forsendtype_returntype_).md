> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/validrequestor(forsendtype:returntype:)](https://developer.apple.com/documentation/appkit/nswindow/validrequestor(forsendtype:returntype:))

# validRequestor(forSendType:returnType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches for an object that responds to a Services request.

## Declaration

```swift
func validRequestor(forSendType sendType: NSPasteboard.PasteboardType?, returnType: NSPasteboard.PasteboardType?) -> Any?
```

## Parameters

- `sendType`: The input type of the Services request.
- `returnType`: The return type of the Services request.

<a id="return-value"></a>

## Return Value

The object that responds to the services request; `nil` when none is found.

<a id="Discussion"></a>

## Discussion

Messages to perform this method are initiated by the Services menu. It’s part of the mechanism that passes [validRequestor(forSendType:returnType:)](validrequestor%28forsendtype_returntype_%29.md) messages up the responder chain.

This method works by forwarding the message to the window’s delegate if it responds (and provided it isn’t an `NSResponder` object with its own next responder). If the delegate doesn’t respond to the message or returns `nil` when sent it, this method forwards the message to the `NSApplication` object. If the `NSApplication` object returns `nil`, this method also returns `nil`. Otherwise this method returns the object returned by the delegate or the `NSApplication` object.

## See Also

### Related Documentation

- [validRequestor(forSendType:returnType:)](../nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.
- [validRequestor(forSendType:returnType:)](../nsapplication/validrequestor%28forsendtype_returntype_%29.md): Indicates whether the receiver can send and receive the specified pasteboard types.

# validRequestorForSendType:returnType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches for an object that responds to a Services request.

## Declaration

```objectivec
- (id) validRequestorForSendType:(NSPasteboardType) sendType returnType:(NSPasteboardType) returnType;
```

## Parameters

- `sendType`: The input type of the Services request.
- `returnType`: The return type of the Services request.

<a id="return-value"></a>

## Return Value

The object that responds to the services request; `nil` when none is found.

<a id="Discussion"></a>

## Discussion

Messages to perform this method are initiated by the Services menu. It’s part of the mechanism that passes [validRequestorForSendType:returnType:](validrequestor%28forsendtype_returntype_%29.md) messages up the responder chain.

This method works by forwarding the message to the window’s delegate if it responds (and provided it isn’t an `NSResponder` object with its own next responder). If the delegate doesn’t respond to the message or returns `nil` when sent it, this method forwards the message to the `NSApplication` object. If the `NSApplication` object returns `nil`, this method also returns `nil`. Otherwise this method returns the object returned by the delegate or the `NSApplication` object.

## See Also

### Related Documentation

- [validRequestorForSendType:returnType:](../nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.
- [validRequestorForSendType:returnType:](../nsapplication/validrequestor%28forsendtype_returntype_%29.md): Indicates whether the receiver can send and receive the specified pasteboard types.
