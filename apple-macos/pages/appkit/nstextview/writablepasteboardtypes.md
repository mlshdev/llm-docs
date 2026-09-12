> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/writablepasteboardtypes](https://developer.apple.com/documentation/appkit/nstextview/writablepasteboardtypes)

# writablePasteboardTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The pasteboard types that can be provided from the current selection.

## Declaration

```swift
var writablePasteboardTypes: [NSPasteboard.PasteboardType] { get }
```

<a id="Discussion"></a>

## Discussion

An array of strings describing the types that can be written to the pasteboard immediately, or an array with no members if the text view has no text or no selection.

Overriders can copy the result from super and add their own new types.

## See Also

### Managing the pasteboard

- [preferredPasteboardType(from:restrictedToTypesFrom:)](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelection(from:)](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelection(from:type:)](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writeSelection(to:type:)](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelection(to:types:)](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestor(forSendType:returnType:)](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.

# writablePasteboardTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The pasteboard types that can be provided from the current selection.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * writablePasteboardTypes;
```

<a id="Discussion"></a>

## Discussion

An array of strings describing the types that can be written to the pasteboard immediately, or an array with no members if the text view has no text or no selection.

Overriders can copy the result from super and add their own new types.

## See Also

### Managing the pasteboard

- [preferredPasteboardTypeFromArray:restrictedToTypesFromArray:](preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelectionFromPasteboard:](readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelectionFromPasteboard:type:](readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writeSelectionToPasteboard:type:](writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestorForSendType:returnType:](validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.
