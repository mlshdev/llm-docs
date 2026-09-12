> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didcommitloadfor:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didcommitloadfor:))

# webView(\_:didCommitLoadFor:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when content starts arriving for a page load.

## Declaration

```swift
optional func webView(_ sender: WebView!, didCommitLoadFor frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method is invoked when a data source transitions from a provisional to committed state—that is, once the data source of `frame` has received one byte or more of data. This method is invoked after a [webView(\_:didStartProvisionalLoadFor:)](webview%28__didstartprovisionalloadfor_%29.md) message but before a `webView:didFinishLoadForFrame:` message is sent to the delegate.

In some cases, a single frame load may be committed more than once. This happens in the case of multipart/x-mixed-replace, also known as a “server push.” In this case, a single frame load results in multiple documents loaded in sequence. This method is invoked once for each document that is successfully loaded.

# webView:didCommitLoadForFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when content starts arriving for a page load.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didCommitLoadForFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method is invoked when a data source transitions from a provisional to committed state—that is, once the data source of `frame` has received one byte or more of data. This method is invoked after a [webView:didStartProvisionalLoadForFrame:](webview%28__didstartprovisionalloadfor_%29.md) message but before a `webView:didFinishLoadForFrame:` message is sent to the delegate.

In some cases, a single frame load may be committed more than once. This happens in the case of multipart/x-mixed-replace, also known as a “server push.” In this case, a single frame load results in multiple documents loaded in sequence. This method is invoked once for each document that is successfully loaded.
