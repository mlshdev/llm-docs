> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webviewdidbeginediting(_:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webviewdidbeginediting(_:))

# webViewDidBeginEditing(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user begins editing the web view.

## Declaration

```swift
optional func webViewDidBeginEditing(_ notification: Notification!)
```

## Parameters

- `notification`: Always set to [WebViewDidBeginEditingNotification](../webviewdidbegineditingnotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView(\_:shouldBeginEditingIn:)](webview%28__shouldbegineditingin_%29.md): Deprecated. Returns whether the user is allowed to edit a range of content in a web view.
- [webViewDidEndEditing(\_:)](webviewdidendediting%28__%29.md): Deprecated. Sent by the default notification center when the user stops editing the web view.

# webViewDidBeginEditing: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user begins editing the web view.

## Declaration

```objectivec
- (void) webViewDidBeginEditing:(NSNotification *) notification;
```

## Parameters

- `notification`: Always set to [WebViewDidBeginEditingNotification](../webviewdidbegineditingnotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView:shouldBeginEditingInDOMRange:](webview%28__shouldbegineditingin_%29.md): Deprecated. Returns whether the user is allowed to edit a range of content in a web view.
- [webViewDidEndEditing:](webviewdidendediting%28__%29.md): Deprecated. Sent by the default notification center when the user stops editing the web view.
