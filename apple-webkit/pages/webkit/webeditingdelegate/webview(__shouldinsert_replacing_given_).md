> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webview(_:shouldinsert:replacing:given:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webview(_:shouldinsert:replacing:given:))

# webView(\_:shouldInsert:replacing:given:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to insert a node in place of a range of content.

## Declaration

```swift
optional func webView(_ webView: WebView!, shouldInsert node: DOMNode!, replacing range: DOMRange!, given action: WebViewInsertAction) -> Bool
```

## Parameters

- `webView`: The web view that the user is editing.
- `node`: The content to insert.
- `range`: The portion of the content that is replaced with `node`.
- `action`: Indicates the type of user action that initiated the insertion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to insert `node` in `webView`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may perform an alternate action—for example, insert a different node—and return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [webViewDidChange(\_:)](webviewdidchange%28__%29.md): Deprecated. Sent by the default notification center when the user changes content in the web view.
- [webView(\_:shouldInsertText:replacing:given:)](webview%28__shouldinserttext_replacing_given_%29.md): Deprecated. Returns whether a user should be allowed to insert text in place of a range of content.

# webView:shouldInsertNode:replacingDOMRange:givenAction: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to insert a node in place of a range of content.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView shouldInsertNode:(DOMNode *) node replacingDOMRange:(DOMRange *) range givenAction:(WebViewInsertAction) action;
```

## Parameters

- `webView`: The web view that the user is editing.
- `node`: The content to insert.
- `range`: The portion of the content that is replaced with `node`.
- `action`: Indicates the type of user action that initiated the insertion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to insert `node` in `webView`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may perform an alternate action—for example, insert a different node—and return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [webViewDidChange:](webviewdidchange%28__%29.md): Deprecated. Sent by the default notification center when the user changes content in the web view.
- [webView:shouldInsertText:replacingDOMRange:givenAction:](webview%28__shouldinserttext_replacing_given_%29.md): Deprecated. Returns whether a user should be allowed to insert text in place of a range of content.
