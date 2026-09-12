> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/textsizemultiplier](https://developer.apple.com/documentation/webkit/webview-swift.class/textsizemultiplier)

# textSizeMultiplier (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The font size multiplier for text displayed in web frame view objects managed by the receiver.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var textSizeMultiplier: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Measured as a fractional percentage value where `1.0` denotes 100%.

## See Also

### Getting and Setting Content Information

- [canShowMIMEType(\_:)](canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [mimeTypesShownAsHTML()](mimetypesshownashtml%28%29.md): Deprecated. Returns a list of MIME types that WebKit renders as HTML.
- [setMIMETypesShownAsHTML(\_:)](setmimetypesshownashtml%28__%29.md): Deprecated. Sets the MIME types that WebKit attempts to render as HTML.
- [canShowMIMEType(asHTML:)](canshowmimetype%28ashtml_%29.md): Deprecated. Returns whether the receiver interprets a MIME type as HTML.
- [supportsTextEncoding](supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](customtextencodingname.md): Deprecated. The custom text encoding name.

# textSizeMultiplier (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The font size multiplier for text displayed in web frame view objects managed by the receiver.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic) float textSizeMultiplier;
```

<a id="Discussion"></a>

## Discussion

Measured as a fractional percentage value where `1.0` denotes 100%.

## See Also

### Getting and Setting Content Information

- [canShowMIMEType:](canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [MIMETypesShownAsHTML](mimetypesshownashtml%28%29.md): Deprecated. Returns a list of MIME types that WebKit renders as HTML.
- [setMIMETypesShownAsHTML:](setmimetypesshownashtml%28__%29.md): Deprecated. Sets the MIME types that WebKit attempts to render as HTML.
- [canShowMIMETypeAsHTML:](canshowmimetype%28ashtml_%29.md): Deprecated. Returns whether the receiver interprets a MIME type as HTML.
- [supportsTextEncoding](supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](customtextencodingname.md): Deprecated. The custom text encoding name.
