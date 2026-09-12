> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webviewdidchange(_:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webviewdidchange(_:))

# webViewDidChange(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user changes content in the web view.

## Declaration

```swift
optional func webViewDidChange(_ notification: Notification!)
```

## Parameters

- `notification`: Always set to [WebViewDidChangeNotification](../webviewdidchangenotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView(\_:shouldInsert:replacing:given:)](webview%28__shouldinsert_replacing_given_%29.md): Deprecated. Returns whether the user should be allowed to insert a node in place of a range of content.
- [webView(\_:shouldInsertText:replacing:given:)](webview%28__shouldinserttext_replacing_given_%29.md): Deprecated. Returns whether a user should be allowed to insert text in place of a range of content.
- [webView(\_:shouldDelete:)](webview%28__shoulddelete_%29.md): Deprecated. Returns whether the user should be allowed to delete a range of content.

# webViewDidChange: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user changes content in the web view.

## Declaration

```objectivec
- (void) webViewDidChange:(NSNotification *) notification;
```

## Parameters

- `notification`: Always set to [WebViewDidChangeNotification](../webviewdidchangenotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView:shouldInsertNode:replacingDOMRange:givenAction:](webview%28__shouldinsert_replacing_given_%29.md): Deprecated. Returns whether the user should be allowed to insert a node in place of a range of content.
- [webView:shouldInsertText:replacingDOMRange:givenAction:](webview%28__shouldinserttext_replacing_given_%29.md): Deprecated. Returns whether a user should be allowed to insert text in place of a range of content.
- [webView:shouldDeleteDOMRange:](webview%28__shoulddelete_%29.md): Deprecated. Returns whether the user should be allowed to delete a range of content.
