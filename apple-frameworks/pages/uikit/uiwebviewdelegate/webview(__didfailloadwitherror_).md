> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebviewdelegate/webview(_:didfailloadwitherror:)](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webview(_:didfailloadwitherror:))

# webView(\_:didFailLoadWithError:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

Sent if a web view failed to load a frame.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
optional func webView(_ webView: UIWebView, didFailLoadWithError error: any Error)
```

## Parameters

- `webView`: The web view that failed to load a frame.
- `error`: The error that occurred during loading.

## See Also

### Loading Content

- [webView(\_:shouldStartLoadWith:navigationType:)](webview%28__shouldstartloadwith_navigationtype_%29.md): Deprecated. Sent before a web view begins loading a frame.
- [webViewDidStartLoad(\_:)](webviewdidstartload%28__%29.md): Deprecated. Sent after a web view starts loading a frame.
- [webViewDidFinishLoad(\_:)](webviewdidfinishload%28__%29.md): Deprecated. Sent after a web view finishes loading a frame.

# webView:didFailLoadWithError: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

Sent if a web view failed to load a frame.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
- (void) webView:(UIWebView *) webView didFailLoadWithError:(NSError *) error;
```

## Parameters

- `webView`: The web view that failed to load a frame.
- `error`: The error that occurred during loading.

## See Also

### Loading Content

- [webView:shouldStartLoadWithRequest:navigationType:](webview%28__shouldstartloadwith_navigationtype_%29.md): Deprecated. Sent before a web view begins loading a frame.
- [webViewDidStartLoad:](webviewdidstartload%28__%29.md): Deprecated. Sent after a web view starts loading a frame.
- [webViewDidFinishLoad:](webviewdidfinishload%28__%29.md): Deprecated. Sent after a web view finishes loading a frame.
