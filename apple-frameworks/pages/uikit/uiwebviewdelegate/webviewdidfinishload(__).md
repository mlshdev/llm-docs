> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebviewdelegate/webviewdidfinishload(_:)](https://developer.apple.com/documentation/uikit/uiwebviewdelegate/webviewdidfinishload(_:))

# webViewDidFinishLoad(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

Sent after a web view finishes loading a frame.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
optional func webViewDidFinishLoad(_ webView: UIWebView)
```

## Parameters

- `webView`: The web view has finished loading.

## See Also

### Loading Content

- [webView(\_:shouldStartLoadWith:navigationType:)](webview%28__shouldstartloadwith_navigationtype_%29.md): Deprecated. Sent before a web view begins loading a frame.
- [webViewDidStartLoad(\_:)](webviewdidstartload%28__%29.md): Deprecated. Sent after a web view starts loading a frame.
- [webView(\_:didFailLoadWithError:)](webview%28__didfailloadwitherror_%29.md): Deprecated. Sent if a web view failed to load a frame.

# webViewDidFinishLoad: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

Sent after a web view finishes loading a frame.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
- (void) webViewDidFinishLoad:(UIWebView *) webView;
```

## Parameters

- `webView`: The web view has finished loading.

## See Also

### Loading Content

- [webView:shouldStartLoadWithRequest:navigationType:](webview%28__shouldstartloadwith_navigationtype_%29.md): Deprecated. Sent before a web view begins loading a frame.
- [webViewDidStartLoad:](webviewdidstartload%28__%29.md): Deprecated. Sent after a web view starts loading a frame.
- [webView:didFailLoadWithError:](webview%28__didfailloadwitherror_%29.md): Deprecated. Sent if a web view failed to load a frame.
