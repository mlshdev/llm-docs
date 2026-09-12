> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webview(_:shouldchangetypingstyle:tostyle:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webview(_:shouldchangetypingstyle:tostyle:))

# webView(\_:shouldChangeTypingStyle:toStyle:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to change the typing style in a web view.

## Declaration

```swift
optional func webView(_ webView: WebView!, shouldChangeTypingStyle currentStyle: DOMCSSStyleDeclaration!, toStyle proposedStyle: DOMCSSStyleDeclaration!) -> Bool
```

## Parameters

- `webView`: The web view that the user is editing.
- `currentStyle`: The old style the user wants to change.
- `proposedStyle`: The new style the user wants to set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to change the typing style in `webView` to `proposedStyle`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can implement this method to take some other action—for example, set the typing style to a different style—and return [false](https://developer.apple.com/documentation/swift/false) .

## See Also

### Related Documentation

- [webViewDidChangeTypingStyle(\_:)](webviewdidchangetypingstyle%28__%29.md): Deprecated. Sent by the default notification center when the user changes the typing style in the web view.

# webView:shouldChangeTypingStyle:toStyle: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to change the typing style in a web view.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView shouldChangeTypingStyle:(DOMCSSStyleDeclaration *) currentStyle toStyle:(DOMCSSStyleDeclaration *) proposedStyle;
```

## Parameters

- `webView`: The web view that the user is editing.
- `currentStyle`: The old style the user wants to change.
- `proposedStyle`: The new style the user wants to set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to change the typing style in `webView` to `proposedStyle`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can implement this method to take some other action—for example, set the typing style to a different style—and return [false](https://developer.apple.com/documentation/swift/false) .

## See Also

### Related Documentation

- [webViewDidChangeTypingStyle:](webviewdidchangetypingstyle%28__%29.md): Deprecated. Sent by the default notification center when the user changes the typing style in the web view.
