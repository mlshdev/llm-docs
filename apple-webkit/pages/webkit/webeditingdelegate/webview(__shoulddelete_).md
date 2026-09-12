> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webview(_:shoulddelete:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webview(_:shoulddelete:))

# webView(\_:shouldDelete:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to delete a range of content.

## Declaration

```swift
optional func webView(_ webView: WebView!, shouldDelete range: DOMRange!) -> Bool
```

## Parameters

- `webView`: The web view that the user is editing.
- `range`: The range of the content to delete.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to delete the content specified by `range`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may perform an alternate action—for example, delete a different range—and return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [webViewDidChange(\_:)](webviewdidchange%28__%29.md): Deprecated. Sent by the default notification center when the user changes content in the web view.

# webView:shouldDeleteDOMRange: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to delete a range of content.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView shouldDeleteDOMRange:(DOMRange *) range;
```

## Parameters

- `webView`: The web view that the user is editing.
- `range`: The range of the content to delete.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to delete the content specified by `range`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may perform an alternate action—for example, delete a different range—and return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [webViewDidChange:](webviewdidchange%28__%29.md): Deprecated. Sent by the default notification center when the user changes content in the web view.
