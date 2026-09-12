> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewrunmodal(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewrunmodal(_:))

# webViewRunModal(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays a web view in a modal window.

## Declaration

```swift
optional func webViewRunModal(_ sender: WebView!)
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

This method should display and order front a modal window containing the specified web view. This method is invoked after the [webView(\_:createWebViewModalDialogWith:)](webview%28__createwebviewmodaldialogwith_%29.md) method is used to create a new window.

## See Also

### Creating and Closing Windows

- [webView(\_:createWebViewModalDialogWith:)](webview%28__createwebviewmodaldialogwith_%29.md): Deprecated. Creates a modal window containing a web view that loads the specified request.
- [webView(\_:createWebViewWith:)](webview%28__createwebviewwith_%29.md): Deprecated. Creates a window containing a web view to load the specified request.
- [webViewClose(\_:)](webviewclose%28__%29.md): Deprecated. Closes a web view in a window.

# webViewRunModal: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays a web view in a modal window.

## Declaration

```objectivec
- (void) webViewRunModal:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

This method should display and order front a modal window containing the specified web view. This method is invoked after the [webView:createWebViewModalDialogWithRequest:](webview%28__createwebviewmodaldialogwith_%29.md) method is used to create a new window.

## See Also

### Creating and Closing Windows

- [webView:createWebViewModalDialogWithRequest:](webview%28__createwebviewmodaldialogwith_%29.md): Deprecated. Creates a modal window containing a web view that loads the specified request.
- [webView:createWebViewWithRequest:](webview%28__createwebviewwith_%29.md): Deprecated. Creates a window containing a web view to load the specified request.
- [webViewClose:](webviewclose%28__%29.md): Deprecated. Closes a web view in a window.
