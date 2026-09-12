> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:createwebviewmodaldialogwith:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:createwebviewmodaldialogwith:))

# webView(\_:createWebViewModalDialogWith:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Creates a modal window containing a web view that loads the specified request.

## Declaration

```swift
optional func webView(_ sender: WebView!, createWebViewModalDialogWith request: URLRequest!) -> WebView!
```

## Parameters

- `sender`: The web view that sent the message.
- `request`: The request to load.

<a id="return-value"></a>

## Return Value

The web view that is loading the specified request.

<a id="Discussion"></a>

## Discussion

This method is invoked when JavaScript calls `window.showModalDialog`. It should create a new modal window containing the web view and initially hide the window. The [webViewRunModal(\_:)](webviewrunmodal%28__%29.md) message is sent to the delegate to display the web view.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Creating and Closing Windows

- [webViewRunModal(\_:)](webviewrunmodal%28__%29.md): Deprecated. Displays a web view in a modal window.
- [webView(\_:createWebViewWith:)](webview%28__createwebviewwith_%29.md): Deprecated. Creates a window containing a web view to load the specified request.
- [webViewClose(\_:)](webviewclose%28__%29.md): Deprecated. Closes a web view in a window.

# webView:createWebViewModalDialogWithRequest: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Creates a modal window containing a web view that loads the specified request.

## Declaration

```objectivec
- (WebView *) webView:(WebView *) sender createWebViewModalDialogWithRequest:(NSURLRequest *) request;
```

## Parameters

- `sender`: The web view that sent the message.
- `request`: The request to load.

<a id="return-value"></a>

## Return Value

The web view that is loading the specified request.

<a id="Discussion"></a>

## Discussion

This method is invoked when JavaScript calls `window.showModalDialog`. It should create a new modal window containing the web view and initially hide the window. The [webViewRunModal:](webviewrunmodal%28__%29.md) message is sent to the delegate to display the web view.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Creating and Closing Windows

- [webViewRunModal:](webviewrunmodal%28__%29.md): Deprecated. Displays a web view in a modal window.
- [webView:createWebViewWithRequest:](webview%28__createwebviewwith_%29.md): Deprecated. Creates a window containing a web view to load the specified request.
- [webViewClose:](webviewclose%28__%29.md): Deprecated. Closes a web view in a window.
