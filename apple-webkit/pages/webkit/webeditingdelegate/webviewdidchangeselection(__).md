> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webviewdidchangeselection(_:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webviewdidchangeselection(_:))

# webViewDidChangeSelection(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user changes the selection in the web view.

## Declaration

```swift
optional func webViewDidChangeSelection(_ notification: Notification!)
```

## Parameters

- `notification`: Always set to [WebViewDidChangeSelectionNotification](../webviewdidchangeselectionnotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView(\_:shouldChangeSelectedDOMRange:to:affinity:stillSelecting:)](webview%28__shouldchangeselecteddomrange_to_affinity_stillselecting_%29.md): Deprecated. Returns whether the user should be allowed to change the selected range.

# webViewDidChangeSelection: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sent by the default notification center when the user changes the selection in the web view.

## Declaration

```objectivec
- (void) webViewDidChangeSelection:(NSNotification *) notification;
```

## Parameters

- `notification`: Always set to [WebViewDidChangeSelectionNotification](../webviewdidchangeselectionnotification.md). You can retrieve the `WebView` object by sending `object` to `notification`.

## See Also

### Related Documentation

- [webView:shouldChangeSelectedDOMRange:toDOMRange:affinity:stillSelecting:](webview%28__shouldchangeselecteddomrange_to_affinity_stillselecting_%29.md): Deprecated. Returns whether the user should be allowed to change the selected range.
