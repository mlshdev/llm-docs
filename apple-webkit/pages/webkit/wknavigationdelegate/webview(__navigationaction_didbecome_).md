> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationdelegate/webview(_:navigationaction:didbecome:)](https://developer.apple.com/documentation/webkit/wknavigationdelegate/webview(_:navigationaction:didbecome:))

# webView(\_:navigationAction:didBecome:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Tells the delegate that a navigation action became a download.

## Declaration

```swift
optional func webView(_ webView: WKWebView, navigationAction: WKNavigationAction, didBecome download: WKDownload)
```

## Parameters

- `webView`: The web view in which the navigation action took place.
- `navigationAction`: Descriptive information about the navigation response that turned into a download.
- `download`: An object that represents the download of a web resource.

<a id="Discussion"></a>

## Discussion

Implement this method to begin tracking download progress.

## See Also

### Handling download progress

- [webView(\_:navigationResponse:didBecome:)](webview%28__navigationresponse_didbecome_%29.md): Tells the delegate that a navigation response became a download.

# webView:navigationAction:didBecomeDownload: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Tells the delegate that a navigation action became a download.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView navigationAction:(WKNavigationAction *) navigationAction didBecomeDownload:(WKDownload *) download;
```

## Parameters

- `webView`: The web view in which the navigation action took place.
- `navigationAction`: Descriptive information about the navigation response that turned into a download.
- `download`: An object that represents the download of a web resource.

<a id="Discussion"></a>

## Discussion

Implement this method to begin tracking download progress.

## See Also

### Handling download progress

- [webView:navigationResponse:didBecomeDownload:](webview%28__navigationresponse_didbecome_%29.md): Tells the delegate that a navigation response became a download.
