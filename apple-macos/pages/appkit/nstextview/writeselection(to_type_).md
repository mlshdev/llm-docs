> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/writeselection(to:type:)](https://developer.apple.com/documentation/appkit/nstextview/writeselection(to:type:))

# writeSelection(to:type:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the current selection to the specified pasteboard using the given type.

## Declaration

```swift
func writeSelection(to pboard: NSPasteboard, type: NSPasteboard.PasteboardType) -> Bool
```

## Parameters

- `pboard`: The pasteboard to write to.
- `type`: The type of data to write.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully written, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The complete set of data types being written to `pboard` should be declared before invoking this method.

This method should be invoked only from [writeSelection(to:types:)](writeselection%28to_types_%29.md). You can override this method to add support for writing new types of data to the pasteboard. You should invoke `super`’s implementation of the method to handle any types of data your overridden version does not.

## See Also

### Managing the pasteboard

- [preferredPasteboardType(from:restrictedToTypesFrom:)](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelection(from:)](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelection(from:type:)](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelection(to:types:)](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestor(forSendType:returnType:)](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.

# writeSelectionToPasteboard:type: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the current selection to the specified pasteboard using the given type.

## Declaration

```objectivec
- (BOOL) writeSelectionToPasteboard:(NSPasteboard *) pboard type:(NSPasteboardType) type;
```

## Parameters

- `pboard`: The pasteboard to write to.
- `type`: The type of data to write.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully written, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The complete set of data types being written to `pboard` should be declared before invoking this method.

This method should be invoked only from [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md). You can override this method to add support for writing new types of data to the pasteboard. You should invoke `super`’s implementation of the method to handle any types of data your overridden version does not.

## See Also

### Managing the pasteboard

- [preferredPasteboardTypeFromArray:restrictedToTypesFromArray:](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelectionFromPasteboard:](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelectionFromPasteboard:type:](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestorForSendType:returnType:](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.
