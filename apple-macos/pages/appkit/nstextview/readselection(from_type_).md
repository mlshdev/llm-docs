> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/readselection(from:type:)](https://developer.apple.com/documentation/appkit/nstextview/readselection(from:type:))

# readSelection(from:type:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads data of the given type from the specified pasteboard.

## Declaration

```swift
func readSelection(from pboard: NSPasteboard, type: NSPasteboard.PasteboardType) -> Bool
```

## Parameters

- `pboard`: The pasteboard to read from.
- `type`: The type of data to read.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully read, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The new data is placed at the current insertion point, replacing the current selection if one exists.

You should override this method to read pasteboard types other than the default types. Use the [rangeForUserTextChange](rangeforusertextchange.md) method to obtain the range of characters (if any) to be replaced by the new data.

## See Also

### Related Documentation

- [rangeForUserTextChange](rangeforusertextchange.md): The range of characters affected by a method that changes characters (as opposed to attributes).

### Managing the pasteboard

- [preferredPasteboardType(from:restrictedToTypesFrom:)](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelection(from:)](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelection(to:type:)](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelection(to:types:)](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestor(forSendType:returnType:)](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.

# readSelectionFromPasteboard:type: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads data of the given type from the specified pasteboard.

## Declaration

```objectivec
- (BOOL) readSelectionFromPasteboard:(NSPasteboard *) pboard type:(NSPasteboardType) type;
```

## Parameters

- `pboard`: The pasteboard to read from.
- `type`: The type of data to read.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully read, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The new data is placed at the current insertion point, replacing the current selection if one exists.

You should override this method to read pasteboard types other than the default types. Use the [rangeForUserTextChange](rangeforusertextchange.md) method to obtain the range of characters (if any) to be replaced by the new data.

## See Also

### Related Documentation

- [rangeForUserTextChange](rangeforusertextchange.md): The range of characters affected by a method that changes characters (as opposed to attributes).

### Managing the pasteboard

- [preferredPasteboardTypeFromArray:restrictedToTypesFromArray:](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelectionFromPasteboard:](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelectionToPasteboard:type:](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestorForSendType:returnType:](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.
