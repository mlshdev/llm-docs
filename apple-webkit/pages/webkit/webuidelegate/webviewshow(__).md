> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewshow(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewshow(_:))

# webViewShow(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays a web view’s window and moves it to the front.

## Declaration

```swift
optional func webViewShow(_ sender: WebView!)
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

This method is typically used after a call to [webView(\_:createWebViewWith:)](webview%28__createwebviewwith_%29.md), which creates a new window. The new window is not ordered to the front (or even shown) unless you implement this method.

# webViewShow: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays a web view’s window and moves it to the front.

## Declaration

```objectivec
- (void) webViewShow:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

This method is typically used after a call to [webView:createWebViewWithRequest:](webview%28__createwebviewwith_%29.md), which creates a new window. The new window is not ordered to the front (or even shown) unless you implement this method.
