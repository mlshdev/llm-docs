> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webview(_:shouldinserttext:replacing:given:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webview(_:shouldinserttext:replacing:given:))

# webView(\_:shouldInsertText:replacing:given:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether a user should be allowed to insert text in place of a range of content.

## Declaration

```swift
optional func webView(_ webView: WebView!, shouldInsertText text: String!, replacing range: DOMRange!, given action: WebViewInsertAction) -> Bool
```

## Parameters

- `webView`: The web view that the user is editing.
- `text`: The text to insert.
- `range`: The portion of the document that will be replaced with `text`.
- `action`: Indicates the type of user action that initiated the insertion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to insert `text` in `webView`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may perform an alternate action—for example, insert different text—and return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [webViewDidChange(\_:)](webviewdidchange%28__%29.md): Deprecated. Sent by the default notification center when the user changes content in the web view.
- [webView(\_:shouldInsert:replacing:given:)](webview%28__shouldinsert_replacing_given_%29.md): Deprecated. Returns whether the user should be allowed to insert a node in place of a range of content.

# webView:shouldInsertText:replacingDOMRange:givenAction: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether a user should be allowed to insert text in place of a range of content.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView shouldInsertText:(NSString *) text replacingDOMRange:(DOMRange *) range givenAction:(WebViewInsertAction) action;
```

## Parameters

- `webView`: The web view that the user is editing.
- `text`: The text to insert.
- `range`: The portion of the document that will be replaced with `text`.
- `action`: Indicates the type of user action that initiated the insertion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to insert `text` in `webView`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may perform an alternate action—for example, insert different text—and return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [webViewDidChange:](webviewdidchange%28__%29.md): Deprecated. Sent by the default notification center when the user changes content in the web view.
- [webView:shouldInsertNode:replacingDOMRange:givenAction:](webview%28__shouldinsert_replacing_given_%29.md): Deprecated. Returns whether the user should be allowed to insert a node in place of a range of content.
