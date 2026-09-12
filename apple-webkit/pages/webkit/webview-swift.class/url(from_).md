> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/url(from:)](https://developer.apple.com/documentation/webkit/webview-swift.class/url(from:))

# url(from:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a URL from the specified pasteboard.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
class func url(from pasteboard: NSPasteboard!) -> URL!
```

## Parameters

- `pasteboard`: The pasteboard containing a URL.

<a id="return-value"></a>

## Return Value

The URL from the specified pasteboard or `nil` if there’s no URL on `pasteboard`.

<a id="Discussion"></a>

## Discussion

This method supports multiple pasteboard types including `NSRULPboardType`.

## See Also

### Using the Pasteboard

- [urlTitle(from:)](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypes(forElement:)](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement(\_:withPasteboardTypes:to:)](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelection(withPasteboardTypes:to:)](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.

# URLFromPasteboard: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a URL from the specified pasteboard.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
+ (NSURL *) URLFromPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: The pasteboard containing a URL.

<a id="return-value"></a>

## Return Value

The URL from the specified pasteboard or `nil` if there’s no URL on `pasteboard`.

<a id="Discussion"></a>

## Discussion

This method supports multiple pasteboard types including `NSRULPboardType`.

## See Also

### Using the Pasteboard

- [URLTitleFromPasteboard:](urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypesForElement:](pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement:withPasteboardTypes:toPasteboard:](writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelectionWithPasteboardTypes:toPasteboard:](writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.
