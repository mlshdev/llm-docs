> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webview(_:shouldendeditingin:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webview(_:shouldendeditingin:))

# webView(\_:shouldEndEditingIn:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to end editing.

## Declaration

```swift
optional func webView(_ webView: WebView!, shouldEndEditingIn range: DOMRange!) -> Bool
```

## Parameters

- `webView`: The web view that the user is editing.
- `range`: Typically, the current selection, although it might not be. Use the `range` parameter to help determine whether the user can end editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to end editing `webView`; otherwise, [false](https://developer.apple.com/documentation/swift/false). If this method returns[true](https://developer.apple.com/documentation/swift/true), `webView` ends editing and resigns as the first responder.

<a id="Discussion"></a>

## Discussion

This method is invoked when a web view attempts to resign as the first responder.

## See Also

### Related Documentation

- [webView(\_:shouldBeginEditingIn:)](webview%28__shouldbegineditingin_%29.md): Deprecated. Returns whether the user is allowed to edit a range of content in a web view.
- [webViewDidEndEditing(\_:)](webviewdidendediting%28__%29.md): Deprecated. Sent by the default notification center when the user stops editing the web view.

# webView:shouldEndEditingInDOMRange: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to end editing.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView shouldEndEditingInDOMRange:(DOMRange *) range;
```

## Parameters

- `webView`: The web view that the user is editing.
- `range`: Typically, the current selection, although it might not be. Use the `range` parameter to help determine whether the user can end editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to end editing `webView`; otherwise, [false](https://developer.apple.com/documentation/swift/false). If this method returns[true](https://developer.apple.com/documentation/swift/true), `webView` ends editing and resigns as the first responder.

<a id="Discussion"></a>

## Discussion

This method is invoked when a web view attempts to resign as the first responder.

## See Also

### Related Documentation

- [webView:shouldBeginEditingInDOMRange:](webview%28__shouldbegineditingin_%29.md): Deprecated. Returns whether the user is allowed to edit a range of content in a web view.
- [webViewDidEndEditing:](webviewdidendediting%28__%29.md): Deprecated. Sent by the default notification center when the user stops editing the web view.
