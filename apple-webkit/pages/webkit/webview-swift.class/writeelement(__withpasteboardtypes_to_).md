> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/writeelement(_:withpasteboardtypes:to:)](https://developer.apple.com/documentation/webkit/webview-swift.class/writeelement(_:withpasteboardtypes:to:))

# writeElement(\_:withPasteboardTypes:to:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Writes an element to the pasteboard using a list of types.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func writeElement(_ element: [AnyHashable : Any]!, withPasteboardTypes types: [Any]!, to pasteboard: NSPasteboard!)
```

## Parameters

- `element`: The element to write to the pasteboard.
- `types`: The pasteboard types to use for the element.
- `pasteboard`: The pasteboard to use for writing.

## See Also

### Using the Pasteboard

- [url(from:)](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [urlTitle(from:)](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypes(forElement:)](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeSelection(withPasteboardTypes:to:)](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.

# writeElement:withPasteboardTypes:toPasteboard: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Writes an element to the pasteboard using a list of types.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (void) writeElement:(NSDictionary *) element withPasteboardTypes:(NSArray *) types toPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `element`: The element to write to the pasteboard.
- `types`: The pasteboard types to use for the element.
- `pasteboard`: The pasteboard to use for writing.

## See Also

### Using the Pasteboard

- [URLFromPasteboard:](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [URLTitleFromPasteboard:](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypesForElement:](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeSelectionWithPasteboardTypes:toPasteboard:](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.
