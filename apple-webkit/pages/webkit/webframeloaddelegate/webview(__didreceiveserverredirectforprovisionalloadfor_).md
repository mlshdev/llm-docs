> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didreceiveserverredirectforprovisionalloadfor:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didreceiveserverredirectforprovisionalloadfor:))

# webView(\_:didReceiveServerRedirectForProvisionalLoadFor:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a provisional data source for a frame receives a server redirect.

## Declaration

```swift
optional func webView(_ sender: WebView!, didReceiveServerRedirectForProvisionalLoadFor frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

A *server redirect* is when one URL location is redirected to another. Additional information about the new request can be obtained from the data source of `frame`.

# webView:didReceiveServerRedirectForProvisionalLoadForFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a provisional data source for a frame receives a server redirect.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didReceiveServerRedirectForProvisionalLoadForFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

A *server redirect* is when one URL location is redirected to another. Additional information about the new request can be obtained from the data source of `frame`.
