> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewclose(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewclose(_:))

# webViewClose(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Closes a web view in a window.

## Declaration

```swift
optional func webViewClose(_ sender: WebView!)
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

If you display multiple web views in a window then you might want to close only `sender` in your implementation. By default, this method sends the [close()](https://developer.apple.com/documentation/appkit/nswindow/close%28%29) method to the [NSWindow](https://developer.apple.com/documentation/appkit/nswindow) object that contains `sender`.

## See Also

### Creating and Closing Windows

- [webView(\_:createWebViewModalDialogWith:)](webview%28__createwebviewmodaldialogwith_%29.md): Deprecated. Creates a modal window containing a web view that loads the specified request.
- [webViewRunModal(\_:)](webviewrunmodal%28__%29.md): Deprecated. Displays a web view in a modal window.
- [webView(\_:createWebViewWith:)](webview%28__createwebviewwith_%29.md): Deprecated. Creates a window containing a web view to load the specified request.

# webViewClose: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Closes a web view in a window.

## Declaration

```objectivec
- (void) webViewClose:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="Discussion"></a>

## Discussion

If you display multiple web views in a window then you might want to close only `sender` in your implementation. By default, this method sends the [close](https://developer.apple.com/documentation/appkit/nswindow/close%28%29) method to the [NSWindow](https://developer.apple.com/documentation/appkit/nswindow) object that contains `sender`.

## See Also

### Creating and Closing Windows

- [webView:createWebViewModalDialogWithRequest:](webview%28__createwebviewmodaldialogwith_%29.md): Deprecated. Creates a modal window containing a web view that loads the specified request.
- [webViewRunModal:](webviewrunmodal%28__%29.md): Deprecated. Displays a web view in a modal window.
- [webView:createWebViewWithRequest:](webview%28__createwebviewwith_%29.md): Deprecated. Creates a window containing a web view to load the specified request.
