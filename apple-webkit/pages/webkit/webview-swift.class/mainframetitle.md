> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/mainframetitle](https://developer.apple.com/documentation/webkit/webview-swift.class/mainframetitle)

# mainFrameTitle (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The HTML title of the loaded page.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var mainFrameTitle: String! { get }
```

<a id="Discussion"></a>

## Discussion

The HTML title of the loaded page. Returns `@""` if the loaded document is not HTML.

## See Also

### Getting and Setting Frame Contents

- [isLoading](isloading.md): Deprecated. A Boolean that indicates whether the web view is loading content.
- [selectedFrame](selectedframe.md): Deprecated. The frame with the active selection.
- [mainFrameURL](mainframeurl.md): Deprecated. The URL that the main frame loads.
- [mainFrameIcon](mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](mainframedocument.md): Deprecated. The DOM document for the main frame.

# mainFrameTitle (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The HTML title of the loaded page.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * mainFrameTitle;
```

<a id="Discussion"></a>

## Discussion

The HTML title of the loaded page. Returns `@""` if the loaded document is not HTML.

## See Also

### Getting and Setting Frame Contents

- [loading](isloading.md): Deprecated. A Boolean that indicates whether the web view is loading content.
- [selectedFrame](selectedframe.md): Deprecated. The frame with the active selection.
- [mainFrameURL](mainframeurl.md): Deprecated. The URL that the main frame loads.
- [mainFrameIcon](mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](mainframedocument.md): Deprecated. The DOM document for the main frame.
