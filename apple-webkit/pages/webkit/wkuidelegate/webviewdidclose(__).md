> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webviewdidclose(_:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webviewdidclose(_:))

# webViewDidClose(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Notifies your app that the DOM window closed successfully.

## Declaration

```swift
optional func webViewDidClose(_ webView: WKWebView)
```

## Parameters

- `webView`: The web view invoking the delegate method.

<a id="Discussion"></a>

## Discussion

Your app should remove the web view from the view hierarchy and update the UI as needed, for instance by closing the containing browser tab or window.

## See Also

### Creating and closing the web view

- [webView(\_:createWebViewWith:for:windowFeatures:)](webview%28__createwebviewwith_for_windowfeatures_%29.md): Creates a new web view.

# webViewDidClose: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Notifies your app that the DOM window closed successfully.

## Declaration

```objectivec
- (void) webViewDidClose:(WKWebView *) webView;
```

## Parameters

- `webView`: The web view invoking the delegate method.

<a id="Discussion"></a>

## Discussion

Your app should remove the web view from the view hierarchy and update the UI as needed, for instance by closing the containing browser tab or window.

## See Also

### Creating and closing the web view

- [webView:createWebViewWithConfiguration:forNavigationAction:windowFeatures:](webview%28__createwebviewwith_for_windowfeatures_%29.md): Creates a new web view.
