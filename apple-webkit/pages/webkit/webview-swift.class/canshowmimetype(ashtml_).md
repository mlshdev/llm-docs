> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/canshowmimetype(ashtml:)](https://developer.apple.com/documentation/webkit/webview-swift.class/canshowmimetype(ashtml:))

# canShowMIMEType(asHTML:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the receiver interprets a MIME type as HTML.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
class func canShowMIMEType(asHTML MIMEType: String!) -> Bool
```

## Parameters

- `MIMEType`: The MIME type of the content.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver interprets `MIMEType` as HTML; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and Setting Content Information

- [canShowMIMEType(\_:)](canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [mimeTypesShownAsHTML()](mimetypesshownashtml%28%29.md): Deprecated. Returns a list of MIME types that WebKit renders as HTML.
- [setMIMETypesShownAsHTML(\_:)](setmimetypesshownashtml%28__%29.md): Deprecated. Sets the MIME types that WebKit attempts to render as HTML.
- [supportsTextEncoding](supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](customtextencodingname.md): Deprecated. The custom text encoding name.
- [textSizeMultiplier](textsizemultiplier.md): Deprecated. The font size multiplier for text displayed in web frame view objects managed by the receiver.

# canShowMIMETypeAsHTML: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the receiver interprets a MIME type as HTML.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
+ (BOOL) canShowMIMETypeAsHTML:(NSString *) MIMEType;
```

## Parameters

- `MIMEType`: The MIME type of the content.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver interprets `MIMEType` as HTML; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and Setting Content Information

- [canShowMIMEType:](canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [MIMETypesShownAsHTML](mimetypesshownashtml%28%29.md): Deprecated. Returns a list of MIME types that WebKit renders as HTML.
- [setMIMETypesShownAsHTML:](setmimetypesshownashtml%28__%29.md): Deprecated. Sets the MIME types that WebKit attempts to render as HTML.
- [supportsTextEncoding](supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](customtextencodingname.md): Deprecated. The custom text encoding name.
- [textSizeMultiplier](textsizemultiplier.md): Deprecated. The font size multiplier for text displayed in web frame view objects managed by the receiver.
