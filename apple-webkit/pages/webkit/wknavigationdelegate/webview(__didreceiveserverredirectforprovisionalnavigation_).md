> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:didreceiveserverredirectforprovisionalnavigation:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:didreceiveserverredirectforprovisionalnavigation:))

# webView(\_:didReceiveServerRedirectForProvisionalNavigation:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Tells the delegate that the web view received a server redirect for a request.

## Declaration

```swift
optional func webView(_ webView: WKWebView, didReceiveServerRedirectForProvisionalNavigation navigation: WKNavigation!)
```

## Parameters

- `webView`: The web view that is loading the content.
- `navigation`: The navigation object that received a server redirect.

## See Also

### Tracking the load progress of a request

- [webView(\_:didStartProvisionalNavigation:)](webview%28__didstartprovisionalnavigation_%29.md): Tells the delegate that navigation from the main frame has started.
- [webView(\_:didCommit:)](webview%28__didcommit_%29.md): Tells the delegate that the web view has started to receive content for the main frame.
- [webView(\_:didFinish:)](webview%28__didfinish_%29.md): Tells the delegate that navigation is complete.

# webView:didReceiveServerRedirectForProvisionalNavigation: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the delegate that the web view received a server redirect for a request.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView didReceiveServerRedirectForProvisionalNavigation:(WKNavigation *) navigation;
```

## Parameters

- `webView`: The web view that is loading the content.
- `navigation`: The navigation object that received a server redirect.

## See Also

### Tracking the load progress of a request

- [webView:didStartProvisionalNavigation:](webview%28__didstartprovisionalnavigation_%29.md): Tells the delegate that navigation from the main frame has started.
- [webView:didCommitNavigation:](webview%28__didcommit_%29.md): Tells the delegate that the web view has started to receive content for the main frame.
- [webView:didFinishNavigation:](webview%28__didfinish_%29.md): Tells the delegate that navigation is complete.
