> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/isloading](https://developer.apple.com/documentation/webkit/webview-swift.class/isloading)

# isLoading (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether the web view is loading content.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var isLoading: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the web view is currently loading any resources; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and Setting Frame Contents

- [selectedFrame](selectedframe.md): Deprecated. The frame with the active selection.
- [mainFrameURL](mainframeurl.md): Deprecated. The URL that the main frame loads.
- [mainFrameTitle](mainframetitle.md): Deprecated. The HTML title of the loaded page.
- [mainFrameIcon](mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](mainframedocument.md): Deprecated. The DOM document for the main frame.

# loading (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether the web view is loading content.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLoading) BOOL loading;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the web view is currently loading any resources; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and Setting Frame Contents

- [selectedFrame](selectedframe.md): Deprecated. The frame with the active selection.
- [mainFrameURL](mainframeurl.md): Deprecated. The URL that the main frame loads.
- [mainFrameTitle](mainframetitle.md): Deprecated. The HTML title of the loaded page.
- [mainFrameIcon](mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](mainframedocument.md): Deprecated. The DOM document for the main frame.
