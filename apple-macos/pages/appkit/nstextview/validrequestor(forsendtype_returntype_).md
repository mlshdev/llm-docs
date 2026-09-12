> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/validrequestor(forsendtype:returntype:)](https://developer.apple.com/documentation/appkit/nstextview/validrequestor(forsendtype:returntype:))

# validRequestor(forSendType:returnType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.

## Declaration

```swift
func validRequestor(forSendType sendType: NSPasteboard.PasteboardType?, returnType: NSPasteboard.PasteboardType?) -> Any?
```

## Parameters

- `sendType`: The type of data requested.
- `returnType`: The type of data that will be returned.

<a id="return-value"></a>

## Return Value

`self` if `sendType` specifies a type of data the text view can put on the pasteboard and `returnType` contains a type of data the text view can read from the pasteboard; otherwise `nil`.

## See Also

### Related Documentation

- [validRequestor(forSendType:returnType:)](../nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.

### Managing the pasteboard

- [preferredPasteboardType(from:restrictedToTypesFrom:)](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelection(from:)](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelection(from:type:)](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelection(to:type:)](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelection(to:types:)](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.

# validRequestorForSendType:returnType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.

## Declaration

```objectivec
- (id) validRequestorForSendType:(NSPasteboardType) sendType returnType:(NSPasteboardType) returnType;
```

## Parameters

- `sendType`: The type of data requested.
- `returnType`: The type of data that will be returned.

<a id="return-value"></a>

## Return Value

`self` if `sendType` specifies a type of data the text view can put on the pasteboard and `returnType` contains a type of data the text view can read from the pasteboard; otherwise `nil`.

## See Also

### Related Documentation

- [validRequestorForSendType:returnType:](../nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.

### Managing the pasteboard

- [preferredPasteboardTypeFromArray:restrictedToTypesFromArray:](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelectionFromPasteboard:](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelectionFromPasteboard:type:](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelectionToPasteboard:type:](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
