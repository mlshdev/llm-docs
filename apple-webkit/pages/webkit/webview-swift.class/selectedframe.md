> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/selectedframe](https://developer.apple.com/documentation/webkit/webview-swift.class/selectedframe)

# selectedFrame (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The frame with the active selection.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var selectedFrame: WebFrame! { get }
```

<a id="Discussion"></a>

## Discussion

If it doesn’t exist, the frame that contains a non-zero-length selection; otherwise, `nil`.

## See Also

### Getting and Setting Frame Contents

- [isLoading](isloading.md): Deprecated. A Boolean that indicates whether the web view is loading content.
- [mainFrameURL](mainframeurl.md): Deprecated. The URL that the main frame loads.
- [mainFrameTitle](mainframetitle.md): Deprecated. The HTML title of the loaded page.
- [mainFrameIcon](mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](mainframedocument.md): Deprecated. The DOM document for the main frame.

# selectedFrame (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The frame with the active selection.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebFrame * selectedFrame;
```

<a id="Discussion"></a>

## Discussion

If it doesn’t exist, the frame that contains a non-zero-length selection; otherwise, `nil`.

## See Also

### Getting and Setting Frame Contents

- [loading](isloading.md): Deprecated. A Boolean that indicates whether the web view is loading content.
- [mainFrameURL](mainframeurl.md): Deprecated. The URL that the main frame loads.
- [mainFrameTitle](mainframetitle.md): Deprecated. The HTML title of the loaded page.
- [mainFrameIcon](mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](mainframedocument.md): Deprecated. The DOM document for the main frame.
