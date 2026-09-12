> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/writeselection(withpasteboardtypes:to:)](https://developer.apple.com/documentation/webkit/webview-swift.class/writeselection(withpasteboardtypes:to:))

# writeSelection(withPasteboardTypes:to:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Writes the receiver’s current selection to a pasteboard using a list of types.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func writeSelection(withPasteboardTypes types: [Any]!, to pasteboard: NSPasteboard!)
```

## Parameters

- `types`: The pasteboard types to use for the selection.
- `pasteboard`: The pasteboard to use for writing.

## See Also

### Using the Pasteboard

- [url(from:)](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [urlTitle(from:)](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypes(forElement:)](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement(\_:withPasteboardTypes:to:)](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.

# writeSelectionWithPasteboardTypes:toPasteboard: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Writes the receiver’s current selection to a pasteboard using a list of types.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (void) writeSelectionWithPasteboardTypes:(NSArray *) types toPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `types`: The pasteboard types to use for the selection.
- `pasteboard`: The pasteboard to use for writing.

## See Also

### Using the Pasteboard

- [URLFromPasteboard:](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [URLTitleFromPasteboard:](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypesForElement:](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement:withPasteboardTypes:toPasteboard:](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
