> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/preferredpasteboardtype(from:restrictedtotypesfrom:)](https://developer.apple.com/documentation/appkit/nstextview/preferredpasteboardtype(from:restrictedtotypesfrom:))

# preferredPasteboardType(from:restrictedToTypesFrom:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whatever type on the pasteboard would be most preferred for copying data.

## Declaration

```swift
func preferredPasteboardType(from availableTypes: [NSPasteboard.PasteboardType], restrictedToTypesFrom allowedTypes: [NSPasteboard.PasteboardType]?) -> NSPasteboard.PasteboardType?
```

## Parameters

- `availableTypes`: The types currently available on the pasteboard.
- `allowedTypes`: Types allowed in the return value. If `nil`, any available type is allowed.

<a id="return-value"></a>

## Return Value

The preferred type to provide given the available types and the allowed types.

<a id="Discussion"></a>

## Discussion

You should not need to override this method. You should also not need to invoke it unless you are implementing a new type of pasteboard to handle services other than copy/paste or dragging.

## See Also

### Related Documentation

- [pasteAsRichText(\_:)](pasteasrichtext%28__%29.md): This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.
- [pasteAsPlainText(\_:)](pasteasplaintext%28__%29.md): Inserts the contents of the pasteboard into the receiver’s text as plain text.

### Managing the pasteboard

- [readSelection(from:)](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelection(from:type:)](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelection(to:type:)](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelection(to:types:)](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestor(forSendType:returnType:)](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.

# preferredPasteboardTypeFromArray:restrictedToTypesFromArray: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whatever type on the pasteboard would be most preferred for copying data.

## Declaration

```objectivec
- (NSPasteboardType) preferredPasteboardTypeFromArray:(NSArray<NSString *> *) availableTypes restrictedToTypesFromArray:(NSArray<NSString *> *) allowedTypes;
```

## Parameters

- `availableTypes`: The types currently available on the pasteboard.
- `allowedTypes`: Types allowed in the return value. If `nil`, any available type is allowed.

<a id="return-value"></a>

## Return Value

The preferred type to provide given the available types and the allowed types.

<a id="Discussion"></a>

## Discussion

You should not need to override this method. You should also not need to invoke it unless you are implementing a new type of pasteboard to handle services other than copy/paste or dragging.

## See Also

### Related Documentation

- [pasteAsRichText:](pasteasrichtext%28__%29.md): This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.
- [pasteAsPlainText:](pasteasplaintext%28__%29.md): Inserts the contents of the pasteboard into the receiver’s text as plain text.

### Managing the pasteboard

- [readSelectionFromPasteboard:](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelectionFromPasteboard:type:](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelectionToPasteboard:type:](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestorForSendType:returnType:](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.
