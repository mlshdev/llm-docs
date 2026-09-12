> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:createwebviewwith:for:windowfeatures:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:createwebviewwith:for:windowfeatures:))

# webView(\_:createWebViewWith:for:windowFeatures:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Creates a new web view.

## Declaration

```swift
optional func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView?
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `configuration`: The configuration to use when creating the new web view.
- `navigationAction`: The navigation action causing the new web view to be created.
- `windowFeatures`: Window features requested by the webpage.

<a id="return-value"></a>

## Return Value

A new web view or `nil`.

<a id="Discussion"></a>

## Discussion

The web view returned must be created with the specified configuration. WebKit loads the request in the returned web view.

## See Also

### Creating and closing the web view

- [webViewDidClose(\_:)](webviewdidclose%28__%29.md): Notifies your app that the DOM window closed successfully.

# webView:createWebViewWithConfiguration:forNavigationAction:windowFeatures: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Creates a new web view.

## Declaration

```objectivec
- (WKWebView *) webView:(WKWebView *) webView createWebViewWithConfiguration:(WKWebViewConfiguration *) configuration forNavigationAction:(WKNavigationAction *) navigationAction windowFeatures:(WKWindowFeatures *) windowFeatures;
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `configuration`: The configuration to use when creating the new web view.
- `navigationAction`: The navigation action causing the new web view to be created.
- `windowFeatures`: Window features requested by the webpage.

<a id="return-value"></a>

## Return Value

A new web view or `nil`.

<a id="Discussion"></a>

## Discussion

The web view returned must be created with the specified configuration. WebKit loads the request in the returned web view.

## See Also

### Creating and closing the web view

- [webViewDidClose:](webviewdidclose%28__%29.md): Notifies your app that the DOM window closed successfully.
