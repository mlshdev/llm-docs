> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/validrequestor(forsendtype:returntype:)](https://developer.apple.com/documentation/appkit/nsresponder/validrequestor(forsendtype:returntype:))

# validRequestor(forSendType:returnType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to determine what services are available.

## Declaration

```swift
func validRequestor(forSendType sendType: NSPasteboard.PasteboardType?, returnType: NSPasteboard.PasteboardType?) -> Any?
```

## Parameters

- `sendType`: A string identifying the send type of pasteboard data. May be an empty string (see discussion).
- `returnType`: A string identifying the return type of pasteboard data. May be an empty string (see discussion).

<a id="return-value"></a>

## Return Value

If the receiver can place data of `sendType` on the pasteboard and receive data of `returnType`, it should return `self`; otherwise it should return either `[super validRequestorForSendType:returnType:]` or `[[self nextResponder] validRequestorForSendType:returnType:]`, which allows an object higher up in the responder chain to have an opportunity to handle the message.

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)
- [Supporting Continuity Camera in Your Mac App](../supporting-continuity-camera-in-your-mac-app.md)

<a id="Discussion"></a>

## Discussion

With each event, and for each service in the Services menu, the application object sends this message up the responder chain with the send and return type for the service being checked. This method is therefore invoked many times per event. The default implementation simply forwards this message to the next responder, ultimately returning `nil`.

Either `sendType` or `returnType`—but not both—may be empty. If `sendType` is empty, the service doesn’t require input from the application requesting the service. If `returnType` is empty, the service doesn’t return data.

## See Also

### Related Documentation

- [readSelection(from:)](../nsservicesmenurequestor/readselection%28from_%29.md): Reads data from the pasteboard and uses it to replace the current selection.
- [registerServicesMenuSendTypes(\_:returnTypes:)](../nsapplication/registerservicesmenusendtypes%28__returntypes_%29.md): Registers the pasteboard types the receiver can send and receive in response to service requests.
- [writeSelection(to:types:)](../nsservicesmenurequestor/writeselection%28to_types_%29.md): Writes the current selection to the pasteboard.

# validRequestorForSendType:returnType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to determine what services are available.

## Declaration

```objectivec
- (id) validRequestorForSendType:(NSPasteboardType) sendType returnType:(NSPasteboardType) returnType;
```

## Parameters

- `sendType`: A string identifying the send type of pasteboard data. May be an empty string (see discussion).
- `returnType`: A string identifying the return type of pasteboard data. May be an empty string (see discussion).

<a id="return-value"></a>

## Return Value

If the receiver can place data of `sendType` on the pasteboard and receive data of `returnType`, it should return `self`; otherwise it should return either `[super validRequestorForSendType:returnType:]` or `[[self nextResponder] validRequestorForSendType:returnType:]`, which allows an object higher up in the responder chain to have an opportunity to handle the message.

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)
- [Supporting Continuity Camera in Your Mac App](../supporting-continuity-camera-in-your-mac-app.md)

<a id="Discussion"></a>

## Discussion

With each event, and for each service in the Services menu, the application object sends this message up the responder chain with the send and return type for the service being checked. This method is therefore invoked many times per event. The default implementation simply forwards this message to the next responder, ultimately returning `nil`.

Either `sendType` or `returnType`—but not both—may be empty. If `sendType` is empty, the service doesn’t require input from the application requesting the service. If `returnType` is empty, the service doesn’t return data.

## See Also

### Related Documentation

- [readSelectionFromPasteboard:](../nsservicesmenurequestor/readselection%28from_%29.md): Reads data from the pasteboard and uses it to replace the current selection.
- [registerServicesMenuSendTypes:returnTypes:](../nsapplication/registerservicesmenusendtypes%28__returntypes_%29.md): Registers the pasteboard types the receiver can send and receive in response to service requests.
- [writeSelectionToPasteboard:types:](../nsservicesmenurequestor/writeselection%28to_types_%29.md): Writes the current selection to the pasteboard.
