> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webviewdidendediting(_:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webviewdidendediting(_:))

# webViewDidEndEditing(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user stops editing the web view.

## Declaration

```swift
optional func webViewDidEndEditing(_ notification: Notification!)
```

## Parameters

- `notification`: Always set to [WebViewDidEndEditingNotification](../webviewdidendeditingnotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView(\_:shouldEndEditingIn:)](webview%28__shouldendeditingin_%29.md): Deprecated. Returns whether the user should be allowed to end editing.
- [webViewDidBeginEditing(\_:)](webviewdidbeginediting%28__%29.md): Deprecated. Sent by the default notification center when the user begins editing the web view.

# webViewDidEndEditing: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user stops editing the web view.

## Declaration

```objectivec
- (void) webViewDidEndEditing:(NSNotification *) notification;
```

## Parameters

- `notification`: Always set to [WebViewDidEndEditingNotification](../webviewdidendeditingnotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView:shouldEndEditingInDOMRange:](webview%28__shouldendeditingin_%29.md): Deprecated. Returns whether the user should be allowed to end editing.
- [webViewDidBeginEditing:](webviewdidbeginediting%28__%29.md): Deprecated. Sent by the default notification center when the user begins editing the web view.
