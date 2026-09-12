> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:didcommit:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:didcommit:))

# webView(\_:didCommit:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Tells the delegate that the web view has started to receive content for the main frame.

## Declaration

```swift
optional func webView(_ webView: WKWebView, didCommit navigation: WKNavigation!)
```

## Parameters

- `webView`: The web view that is loading the content.
- `navigation`: The navigation object that uniquely identifies the load request.

<a id="Discussion"></a>

## Discussion

After the navigation delegate’s [webView(\_:decidePolicyFor:decisionHandler:)](webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md) method approves the navigation response, the web view begins processing it. As changes become ready, the web view calls this method immediately before it starts to update the main frame.

## See Also

### Tracking the load progress of a request

- [webView(\_:didStartProvisionalNavigation:)](webview%28__didstartprovisionalnavigation_%29.md): Tells the delegate that navigation from the main frame has started.
- [webView(\_:didReceiveServerRedirectForProvisionalNavigation:)](webview%28__didreceiveserverredirectforprovisionalnavigation_%29.md): Tells the delegate that the web view received a server redirect for a request.
- [webView(\_:didFinish:)](webview%28__didfinish_%29.md): Tells the delegate that navigation is complete.

# webView:didCommitNavigation: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the delegate that the web view has started to receive content for the main frame.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView didCommitNavigation:(WKNavigation *) navigation;
```

## Parameters

- `webView`: The web view that is loading the content.
- `navigation`: The navigation object that uniquely identifies the load request.

<a id="Discussion"></a>

## Discussion

After the navigation delegate’s [webView:decidePolicyForNavigationResponse:decisionHandler:](webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md) method approves the navigation response, the web view begins processing it. As changes become ready, the web view calls this method immediately before it starts to update the main frame.

## See Also

### Tracking the load progress of a request

- [webView:didStartProvisionalNavigation:](webview%28__didstartprovisionalnavigation_%29.md): Tells the delegate that navigation from the main frame has started.
- [webView:didReceiveServerRedirectForProvisionalNavigation:](webview%28__didreceiveserverredirectforprovisionalnavigation_%29.md): Tells the delegate that the web view received a server redirect for a request.
- [webView:didFinishNavigation:](webview%28__didfinish_%29.md): Tells the delegate that navigation is complete.
