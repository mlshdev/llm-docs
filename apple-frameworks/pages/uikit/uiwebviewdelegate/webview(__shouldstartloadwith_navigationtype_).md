> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebviewdelegate/webview(_:shouldstartloadwith:navigationtype:)](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webview(_:shouldstartloadwith:navigationtype:))

# webView(\_:shouldStartLoadWith:navigationType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

Sent before a web view begins loading a frame.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
optional func webView(_ webView: UIWebView, shouldStartLoadWith request: URLRequest, navigationType: UIWebView.NavigationType) -> Bool
```

## Parameters

- `webView`: The web view that is about to load a new frame.
- `request`: The content location.
- `navigationType`: The type of user action that started the load request.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the web view should begin loading content; otherwise, [false](https://developer.apple.com/documentation/swift/false) .

## See Also

### Loading Content

- [webViewDidStartLoad(\_:)](webviewdidstartload%28__%29.md): Deprecated. Sent after a web view starts loading a frame.
- [webViewDidFinishLoad(\_:)](webviewdidfinishload%28__%29.md): Deprecated. Sent after a web view finishes loading a frame.
- [webView(\_:didFailLoadWithError:)](webview%28__didfailloadwitherror_%29.md): Deprecated. Sent if a web view failed to load a frame.

# webView:shouldStartLoadWithRequest:navigationType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

Sent before a web view begins loading a frame.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
- (BOOL) webView:(UIWebView *) webView shouldStartLoadWithRequest:(NSURLRequest *) request navigationType:(UIWebViewNavigationType) navigationType;
```

## Parameters

- `webView`: The web view that is about to load a new frame.
- `request`: The content location.
- `navigationType`: The type of user action that started the load request.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the web view should begin loading content; otherwise, [false](https://developer.apple.com/documentation/swift/false) .

## See Also

### Loading Content

- [webViewDidStartLoad:](webviewdidstartload%28__%29.md): Deprecated. Sent after a web view starts loading a frame.
- [webViewDidFinishLoad:](webviewdidfinishload%28__%29.md): Deprecated. Sent after a web view finishes loading a frame.
- [webView:didFailLoadWithError:](webview%28__didfailloadwitherror_%29.md): Deprecated. Sent if a web view failed to load a frame.
