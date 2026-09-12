> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/urltitle(from:)](https://developer.apple.com/documentation/webkit/webview-swift.class/urltitle(from:))

# urlTitle(from:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the title of a URL from the specified pasteboard.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
class func urlTitle(from pasteboard: NSPasteboard!) -> String!
```

## Parameters

- `pasteboard`: The pasteboard containing the URL.

<a id="return-value"></a>

## Return Value

The title of the URL on `pasteboard`. Returns `nil` if there’s no URL on `pasteboard` or the URL has no title.

## See Also

### Using the Pasteboard

- [url(from:)](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [pasteboardTypes(forElement:)](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement(\_:withPasteboardTypes:to:)](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelection(withPasteboardTypes:to:)](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.

# URLTitleFromPasteboard: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the title of a URL from the specified pasteboard.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
+ (NSString *) URLTitleFromPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: The pasteboard containing the URL.

<a id="return-value"></a>

## Return Value

The title of the URL on `pasteboard`. Returns `nil` if there’s no URL on `pasteboard` or the URL has no title.

## See Also

### Using the Pasteboard

- [URLFromPasteboard:](url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [pasteboardTypesForElement:](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement:withPasteboardTypes:toPasteboard:](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelectionWithPasteboardTypes:toPasteboard:](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.
