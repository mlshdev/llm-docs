> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webviewwebcontentprocessdidterminate(_:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webviewwebcontentprocessdidterminate(_:))

# webViewWebContentProcessDidTerminate(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Tells the delegate that the web view’s content process was terminated.

## Declaration

```swift
optional func webViewWebContentProcessDidTerminate(_ webView: WKWebView)
```

## Parameters

- `webView`: The web view whose underlying web content process was terminated.

<a id="Discussion"></a>

## Discussion

Web views use a separate process to render and manage web content. WebKit calls this method when the process for the specified web view terminates for any reason.

## See Also

### Responding to navigation errors

- [webView(\_:didFail:withError:)](webview%28__didfail_witherror_%29.md): Tells the delegate that an error occurred during navigation.
- [webView(\_:didFailProvisionalNavigation:withError:)](webview%28__didfailprovisionalnavigation_witherror_%29.md): Tells the delegate that an error occurred during the early navigation process.

# webViewWebContentProcessDidTerminate: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Tells the delegate that the web view’s content process was terminated.

## Declaration

```objectivec
- (void) webViewWebContentProcessDidTerminate:(WKWebView *) webView;
```

## Parameters

- `webView`: The web view whose underlying web content process was terminated.

<a id="Discussion"></a>

## Discussion

Web views use a separate process to render and manage web content. WebKit calls this method when the process for the specified web view terminates for any reason.

## See Also

### Responding to navigation errors

- [webView:didFailNavigation:withError:](webview%28__didfail_witherror_%29.md): Tells the delegate that an error occurred during navigation.
- [webView:didFailProvisionalNavigation:withError:](webview%28__didfailprovisionalnavigation_witherror_%29.md): Tells the delegate that an error occurred during the early navigation process.
