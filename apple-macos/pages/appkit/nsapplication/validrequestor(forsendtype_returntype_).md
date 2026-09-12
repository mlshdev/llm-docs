> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/validrequestor(forsendtype:returntype:)](https://developer.apple.com/documentation/appkit/nsapplication/validrequestor(forsendtype:returntype:))

# validRequestor(forSendType:returnType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether the receiver can send and receive the specified pasteboard types.

## Declaration

```swift
func validRequestor(forSendType sendType: NSPasteboard.PasteboardType?, returnType: NSPasteboard.PasteboardType?) -> Any?
```

## Parameters

- `sendType`: The pasteboard type the app needs to send.
- `returnType`: The pasteboard type the app needs to receive.

<a id="return-value"></a>

## Return Value

The object that can send and receive the specified types or `nil` if the receiver knows of no object that can send and receive data of that type.

<a id="Discussion"></a>

## Discussion

This message is sent to all responders in a responder chain. `NSApp` is typically the last item in the responder chain, so it usually receives this message only if none of the current responders can send `sendType` data and accept back `returnType` data.

The receiver passes this message on to its delegate if the delegate can respond (and isn’t an `NSResponder` object with its own next responder). If the delegate can’t respond or returns `nil`, this method returns `nil`. If the delegate can find an object that can send `sendType` data and accept back `returnType` data, it returns that object.

## See Also

### Related Documentation

- [readSelection(from:)](../nsservicesmenurequestor/readselection%28from_%29.md): Reads data from the pasteboard and uses it to replace the current selection.
- [validRequestor(forSendType:returnType:)](../nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.
- [registerServicesMenuSendTypes(\_:returnTypes:)](registerservicesmenusendtypes%28__returntypes_%29.md): Registers the pasteboard types the receiver can send and receive in response to service requests.
- [writeSelection(to:types:)](../nsservicesmenurequestor/writeselection%28to_types_%29.md): Writes the current selection to the pasteboard.

### Providing services

- [servicesProvider](servicesprovider.md): The object that provides the services the current app advertises in the Services menu of other apps.

# validRequestorForSendType:returnType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether the receiver can send and receive the specified pasteboard types.

## Declaration

```objectivec
- (id) validRequestorForSendType:(NSPasteboardType) sendType returnType:(NSPasteboardType) returnType;
```

## Parameters

- `sendType`: The pasteboard type the app needs to send.
- `returnType`: The pasteboard type the app needs to receive.

<a id="return-value"></a>

## Return Value

The object that can send and receive the specified types or `nil` if the receiver knows of no object that can send and receive data of that type.

<a id="Discussion"></a>

## Discussion

This message is sent to all responders in a responder chain. `NSApp` is typically the last item in the responder chain, so it usually receives this message only if none of the current responders can send `sendType` data and accept back `returnType` data.

The receiver passes this message on to its delegate if the delegate can respond (and isn’t an `NSResponder` object with its own next responder). If the delegate can’t respond or returns `nil`, this method returns `nil`. If the delegate can find an object that can send `sendType` data and accept back `returnType` data, it returns that object.

## See Also

### Related Documentation

- [readSelectionFromPasteboard:](../nsservicesmenurequestor/readselection%28from_%29.md): Reads data from the pasteboard and uses it to replace the current selection.
- [validRequestorForSendType:returnType:](../nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.
- [registerServicesMenuSendTypes:returnTypes:](registerservicesmenusendtypes%28__returntypes_%29.md): Registers the pasteboard types the receiver can send and receive in response to service requests.
- [writeSelectionToPasteboard:types:](../nsservicesmenurequestor/writeselection%28to_types_%29.md): Writes the current selection to the pasteboard.

### Providing services

- [servicesProvider](servicesprovider.md): The object that provides the services the current app advertises in the Services menu of other apps.
