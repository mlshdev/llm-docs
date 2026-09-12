> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:didstartprovisionalnavigation:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:didstartprovisionalnavigation:))

# webView(\_:didStartProvisionalNavigation:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Tells the delegate that navigation from the main frame has started.

## Declaration

```swift
optional func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!)
```

## Parameters

- `webView`: The web view that is loading the content.
- `navigation`: The navigation object associated with the load request.

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The web view calls this method after it receives provisional approval to process a navigation request, but before it receives a response to that request.

## See Also

### Tracking the load progress of a request

- [webView(\_:didReceiveServerRedirectForProvisionalNavigation:)](webview%28__didreceiveserverredirectforprovisionalnavigation_%29.md): Tells the delegate that the web view received a server redirect for a request.
- [webView(\_:didCommit:)](webview%28__didcommit_%29.md): Tells the delegate that the web view has started to receive content for the main frame.
- [webView(\_:didFinish:)](webview%28__didfinish_%29.md): Tells the delegate that navigation is complete.

# webView:didStartProvisionalNavigation: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the delegate that navigation from the main frame has started.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView didStartProvisionalNavigation:(WKNavigation *) navigation;
```

## Parameters

- `webView`: The web view that is loading the content.
- `navigation`: The navigation object associated with the load request.

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The web view calls this method after it receives provisional approval to process a navigation request, but before it receives a response to that request.

## See Also

### Tracking the load progress of a request

- [webView:didReceiveServerRedirectForProvisionalNavigation:](webview%28__didreceiveserverredirectforprovisionalnavigation_%29.md): Tells the delegate that the web view received a server redirect for a request.
- [webView:didCommitNavigation:](webview%28__didcommit_%29.md): Tells the delegate that the web view has started to receive content for the main frame.
- [webView:didFinishNavigation:](webview%28__didfinish_%29.md): Tells the delegate that navigation is complete.
