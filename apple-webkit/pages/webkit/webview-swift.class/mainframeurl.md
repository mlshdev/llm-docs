> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/mainframeurl](https://developer.apple.com/documentation/webkit/webview-swift.class/mainframeurl)

# mainFrameURL (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The URL that the main frame loads.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var mainFrameURL: String! { get set }
```

<a id="Discussion"></a>

## Discussion

Functionally equivalent to invoking `[[webView mainFrame] loadRequest:[NSURLRequest requestWithURL: [NSURL URLWithString:URLString]]]`.

## See Also

### Getting and Setting Frame Contents

- [isLoading](isloading.md): Deprecated. A Boolean that indicates whether the web view is loading content.
- [selectedFrame](selectedframe.md): Deprecated. The frame with the active selection.
- [mainFrameTitle](mainframetitle.md): Deprecated. The HTML title of the loaded page.
- [mainFrameIcon](mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](mainframedocument.md): Deprecated. The DOM document for the main frame.

# mainFrameURL (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The URL that the main frame loads.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * mainFrameURL;
```

<a id="Discussion"></a>

## Discussion

Functionally equivalent to invoking `[[webView mainFrame] loadRequest:[NSURLRequest requestWithURL: [NSURL URLWithString:URLString]]]`.

## See Also

### Getting and Setting Frame Contents

- [loading](isloading.md): Deprecated. A Boolean that indicates whether the web view is loading content.
- [selectedFrame](selectedframe.md): Deprecated. The frame with the active selection.
- [mainFrameTitle](mainframetitle.md): Deprecated. The HTML title of the loaded page.
- [mainFrameIcon](mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](mainframedocument.md): Deprecated. The DOM document for the main frame.
