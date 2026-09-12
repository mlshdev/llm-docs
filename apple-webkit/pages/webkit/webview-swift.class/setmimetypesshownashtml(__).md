> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/setmimetypesshownashtml(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/setmimetypesshownashtml(_:))

# setMIMETypesShownAsHTML(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the MIME types that WebKit attempts to render as HTML.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
class func setMIMETypesShownAsHTML(_ MIMETypes: [Any]!)
```

## Parameters

- `MIMETypes`: An array of `NSString` objects representing the MIME types. Typically, you create the `MIMETypes` array by adding additional types to the array returned by the [mimeTypesShownAsHTML()](mimetypesshownashtml%28%29.md) class method.

## See Also

### Getting and Setting Content Information

- [canShowMIMEType(\_:)](canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [mimeTypesShownAsHTML()](mimetypesshownashtml%28%29.md): Deprecated. Returns a list of MIME types that WebKit renders as HTML.
- [canShowMIMEType(asHTML:)](canshowmimetype%28ashtml_%29.md): Deprecated. Returns whether the receiver interprets a MIME type as HTML.
- [supportsTextEncoding](supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](customtextencodingname.md): Deprecated. The custom text encoding name.
- [textSizeMultiplier](textsizemultiplier.md): Deprecated. The font size multiplier for text displayed in web frame view objects managed by the receiver.

# setMIMETypesShownAsHTML: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the MIME types that WebKit attempts to render as HTML.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
+ (void) setMIMETypesShownAsHTML:(NSArray *) MIMETypes;
```

## Parameters

- `MIMETypes`: An array of `NSString` objects representing the MIME types. Typically, you create the `MIMETypes` array by adding additional types to the array returned by the [MIMETypesShownAsHTML](mimetypesshownashtml%28%29.md) class method.

## See Also

### Getting and Setting Content Information

- [canShowMIMEType:](canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [MIMETypesShownAsHTML](mimetypesshownashtml%28%29.md): Deprecated. Returns a list of MIME types that WebKit renders as HTML.
- [canShowMIMETypeAsHTML:](canshowmimetype%28ashtml_%29.md): Deprecated. Returns whether the receiver interprets a MIME type as HTML.
- [supportsTextEncoding](supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](customtextencodingname.md): Deprecated. The custom text encoding name.
- [textSizeMultiplier](textsizemultiplier.md): Deprecated. The font size multiplier for text displayed in web frame view objects managed by the receiver.
