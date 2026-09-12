> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/mimetypesshownashtml()](https://developer.apple.com/documentation/webkit/webview-swift.class/mimetypesshownashtml())

# mimeTypesShownAsHTML() (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a list of MIME types that WebKit renders as HTML.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
class func mimeTypesShownAsHTML() -> [Any]!
```

<a id="return-value"></a>

## Return Value

An array containing `NSString` objects that represent the MIME types WebKit attempts to render as HTML.

## See Also

### Getting and Setting Content Information

- [canShowMIMEType(\_:)](canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [setMIMETypesShownAsHTML(\_:)](setmimetypesshownashtml%28__%29.md): Deprecated. Sets the MIME types that WebKit attempts to render as HTML.
- [canShowMIMEType(asHTML:)](canshowmimetype%28ashtml_%29.md): Deprecated. Returns whether the receiver interprets a MIME type as HTML.
- [supportsTextEncoding](supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](customtextencodingname.md): Deprecated. The custom text encoding name.
- [textSizeMultiplier](textsizemultiplier.md): Deprecated. The font size multiplier for text displayed in web frame view objects managed by the receiver.

# MIMETypesShownAsHTML (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a list of MIME types that WebKit renders as HTML.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
+ (NSArray *) MIMETypesShownAsHTML;
```

<a id="return-value"></a>

## Return Value

An array containing `NSString` objects that represent the MIME types WebKit attempts to render as HTML.

## See Also

### Getting and Setting Content Information

- [canShowMIMEType:](canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [setMIMETypesShownAsHTML:](setmimetypesshownashtml%28__%29.md): Deprecated. Sets the MIME types that WebKit attempts to render as HTML.
- [canShowMIMETypeAsHTML:](canshowmimetype%28ashtml_%29.md): Deprecated. Returns whether the receiver interprets a MIME type as HTML.
- [supportsTextEncoding](supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](customtextencodingname.md): Deprecated. The custom text encoding name.
- [textSizeMultiplier](textsizemultiplier.md): Deprecated. The font size multiplier for text displayed in web frame view objects managed by the receiver.
