> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/readselection(from:)](https://developer.apple.com/documentation/appkit/nstextview/readselection(from:))

# readSelection(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads the text view’s preferred type of data from the specified pasteboard.

## Declaration

```swift
func readSelection(from pboard: NSPasteboard) -> Bool
```

## Parameters

- `pboard`: The pasteboard to read from.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully read, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method invokes the [preferredPasteboardType(from:restrictedToTypesFrom:)](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md) method to determine the text view’s preferred type of data and then reads the data using the [readSelection(from:type:)](readselection%28from_type_%29.md) method.

You should not need to override this method. You might need to invoke this method if you are implementing a new type of pasteboard to handle services other than copy/paste or dragging.

## See Also

### Managing the pasteboard

- [preferredPasteboardType(from:restrictedToTypesFrom:)](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelection(from:type:)](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelection(to:type:)](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelection(to:types:)](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestor(forSendType:returnType:)](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.

# readSelectionFromPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads the text view’s preferred type of data from the specified pasteboard.

## Declaration

```objectivec
- (BOOL) readSelectionFromPasteboard:(NSPasteboard *) pboard;
```

## Parameters

- `pboard`: The pasteboard to read from.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully read, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method invokes the [preferredPasteboardTypeFromArray:restrictedToTypesFromArray:](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md) method to determine the text view’s preferred type of data and then reads the data using the [readSelectionFromPasteboard:type:](readselection%28from_type_%29.md) method.

You should not need to override this method. You might need to invoke this method if you are implementing a new type of pasteboard to handle services other than copy/paste or dragging.

## See Also

### Managing the pasteboard

- [preferredPasteboardTypeFromArray:restrictedToTypesFromArray:](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelectionFromPasteboard:type:](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelectionToPasteboard:type:](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestorForSendType:returnType:](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.
