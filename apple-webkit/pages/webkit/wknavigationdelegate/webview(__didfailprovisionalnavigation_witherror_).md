> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:didfailprovisionalnavigation:witherror:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:didfailprovisionalnavigation:witherror:))

# webView(\_:didFailProvisionalNavigation:withError:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Tells the delegate that an error occurred during the early navigation process.

## Declaration

```swift
optional func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: any Error)
```

## Parameters

- `webView`: The web view that called the delegate method.
- `navigation`: The navigation object for the operation. This object corresponds to a [WKNavigation](../wknavigation.md) object that WebKit returned when the load operation began. You use it to track the progress of that operation.
- `error`: The error that occurred.

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

## See Also

### Responding to navigation errors

- [webView(\_:didFail:withError:)](webview%28__didfail_witherror_%29.md): Tells the delegate that an error occurred during navigation.
- [webViewWebContentProcessDidTerminate(\_:)](webviewwebcontentprocessdidterminate%28__%29.md): Tells the delegate that the web view’s content process was terminated.

# webView:didFailProvisionalNavigation:withError: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the delegate that an error occurred during the early navigation process.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView didFailProvisionalNavigation:(WKNavigation *) navigation withError:(NSError *) error;
```

## Parameters

- `webView`: The web view that called the delegate method.
- `navigation`: The navigation object for the operation. This object corresponds to a [WKNavigation](../wknavigation.md) object that WebKit returned when the load operation began. You use it to track the progress of that operation.
- `error`: The error that occurred.

## Mentioned In

- [Replacing UIWebView in your app](../replacing-uiwebview-in-your-app.md)

## See Also

### Responding to navigation errors

- [webView:didFailNavigation:withError:](webview%28__didfail_witherror_%29.md): Tells the delegate that an error occurred during navigation.
- [webViewWebContentProcessDidTerminate:](webviewwebcontentprocessdidterminate%28__%29.md): Tells the delegate that the web view’s content process was terminated.
