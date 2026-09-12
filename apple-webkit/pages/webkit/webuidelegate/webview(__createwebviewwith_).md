> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:createwebviewwith:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:createwebviewwith:))

# webView(\_:createWebViewWith:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Creates a window containing a web view to load the specified request.

## Declaration

```swift
optional func webView(_ sender: WebView!, createWebViewWith request: URLRequest!) -> WebView!
```

## Parameters

- `sender`: The web view that sent the message.
- `request`: The request to load.

<a id="return-value"></a>

## Return Value

The web view that is loading the request.

<a id="Discussion"></a>

## Discussion

This method should begin loading the content for the specified request by sending [load(\_:)](../webframe/load%28__%29-47p2s.md) to its main frame. The new window should initially be hidden. Later, a [webViewShow(\_:)](webviewshow%28__%29.md) message is sent to the delegate of the new web view. By default, this method returns `nil`.

## See Also

### Creating and Closing Windows

- [webView(\_:createWebViewModalDialogWith:)](webview%28__createwebviewmodaldialogwith_%29.md): Deprecated. Creates a modal window containing a web view that loads the specified request.
- [webViewRunModal(\_:)](webviewrunmodal%28__%29.md): Deprecated. Displays a web view in a modal window.
- [webViewClose(\_:)](webviewclose%28__%29.md): Deprecated. Closes a web view in a window.

# webView:createWebViewWithRequest: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Creates a window containing a web view to load the specified request.

## Declaration

```objectivec
- (WebView *) webView:(WebView *) sender createWebViewWithRequest:(NSURLRequest *) request;
```

## Parameters

- `sender`: The web view that sent the message.
- `request`: The request to load.

<a id="return-value"></a>

## Return Value

The web view that is loading the request.

<a id="Discussion"></a>

## Discussion

This method should begin loading the content for the specified request by sending [loadRequest:](../webframe/load%28__%29-47p2s.md) to its main frame. The new window should initially be hidden. Later, a [webViewShow:](webviewshow%28__%29.md) message is sent to the delegate of the new web view. By default, this method returns `nil`.

## See Also

### Creating and Closing Windows

- [webView:createWebViewModalDialogWithRequest:](webview%28__createwebviewmodaldialogwith_%29.md): Deprecated. Creates a modal window containing a web view that loads the specified request.
- [webViewRunModal:](webviewrunmodal%28__%29.md): Deprecated. Displays a web view in a modal window.
- [webViewClose:](webviewclose%28__%29.md): Deprecated. Closes a web view in a window.
