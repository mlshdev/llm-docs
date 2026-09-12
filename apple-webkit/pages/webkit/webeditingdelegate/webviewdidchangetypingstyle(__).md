> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webviewdidchangetypingstyle(_:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webviewdidchangetypingstyle(_:))

# webViewDidChangeTypingStyle(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user changes the typing style in the web view.

## Declaration

```swift
optional func webViewDidChangeTypingStyle(_ notification: Notification!)
```

## Parameters

- `notification`: Always set to [WebViewDidChangeTypingStyleNotification](../webviewdidchangetypingstylenotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView(\_:shouldChangeTypingStyle:toStyle:)](webview%28__shouldchangetypingstyle_tostyle_%29.md): Deprecated. Returns whether the user should be allowed to change the typing style in a web view.

# webViewDidChangeTypingStyle: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user changes the typing style in the web view.

## Declaration

```objectivec
- (void) webViewDidChangeTypingStyle:(NSNotification *) notification;
```

## Parameters

- `notification`: Always set to [WebViewDidChangeTypingStyleNotification](../webviewdidchangetypingstylenotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView:shouldChangeTypingStyle:toStyle:](webview%28__shouldchangetypingstyle_tostyle_%29.md): Deprecated. Returns whether the user should be allowed to change the typing style in a web view.
