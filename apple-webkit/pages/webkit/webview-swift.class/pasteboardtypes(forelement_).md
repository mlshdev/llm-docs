> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/pasteboardtypes(forelement:)](https://developer.apple.com/documentation/webkit/webview-swift.class/pasteboardtypes(forelement:))

# pasteboardTypes(forElement:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns an array of pasteboard types for an element.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func pasteboardTypes(forElement element: [AnyHashable : Any]!) -> [Any]!
```

## Parameters

- `element`: The element whose pasteboard types you want.

<a id="return-value"></a>

## Return Value

An array of pasteboard types for an element.

## See Also

### Using the Pasteboard

- [url(from:)](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [urlTitle(from:)](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement(\_:withPasteboardTypes:to:)](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelection(withPasteboardTypes:to:)](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.

# pasteboardTypesForElement: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns an array of pasteboard types for an element.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (NSArray *) pasteboardTypesForElement:(NSDictionary *) element;
```

## Parameters

- `element`: The element whose pasteboard types you want.

<a id="return-value"></a>

## Return Value

An array of pasteboard types for an element.

## See Also

### Using the Pasteboard

- [URLFromPasteboard:](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [URLTitleFromPasteboard:](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement:withPasteboardTypes:toPasteboard:](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelectionWithPasteboardTypes:toPasteboard:](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.
