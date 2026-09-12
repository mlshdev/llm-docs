> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/pasteboardtypesforselection](https://developer.apple.com/documentation/webkit/webview-swift.class/pasteboardtypesforselection)

# pasteboardTypesForSelection (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

An array of pasteboard types that can be used for the current selection of the receiver.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var pasteboardTypesForSelection: [Any]! { get }
```

## See Also

### Using the Pasteboard

- [url(from:)](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [urlTitle(from:)](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypes(forElement:)](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [writeElement(\_:withPasteboardTypes:to:)](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelection(withPasteboardTypes:to:)](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.

# pasteboardTypesForSelection (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

An array of pasteboard types that can be used for the current selection of the receiver.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray * pasteboardTypesForSelection;
```

## See Also

### Using the Pasteboard

- [URLFromPasteboard:](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [URLTitleFromPasteboard:](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypesForElement:](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [writeElement:withPasteboardTypes:toPasteboard:](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelectionWithPasteboardTypes:toPasteboard:](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.
