> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webview(_:shouldbegineditingin:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webview(_:shouldbegineditingin:))

# webView(\_:shouldBeginEditingIn:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user is allowed to edit a range of content in a web view.

## Declaration

```swift
optional func webView(_ webView: WebView!, shouldBeginEditingIn range: DOMRange!) -> Bool
```

## Parameters

- `webView`: The web view that the user is editing.
- `range`: The section of the begin-editing request; used to determine if editing is allowed. Typically, `range` is not the current selection but may becomes the current selection if this method returns [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user is allowed to edit `webView`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked when a web view attempts to become the first responder or when the user drops an object on it.

## See Also

### Related Documentation

- [webView(\_:shouldEndEditingIn:)](webview%28__shouldendeditingin_%29.md): Deprecated. Returns whether the user should be allowed to end editing.
- [webViewDidBeginEditing(\_:)](webviewdidbeginediting%28__%29.md): Deprecated. Sent by the default notification center when the user begins editing the web view.

# webView:shouldBeginEditingInDOMRange: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user is allowed to edit a range of content in a web view.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView shouldBeginEditingInDOMRange:(DOMRange *) range;
```

## Parameters

- `webView`: The web view that the user is editing.
- `range`: The section of the begin-editing request; used to determine if editing is allowed. Typically, `range` is not the current selection but may becomes the current selection if this method returns [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user is allowed to edit `webView`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked when a web view attempts to become the first responder or when the user drops an object on it.

## See Also

### Related Documentation

- [webView:shouldEndEditingInDOMRange:](webview%28__shouldendeditingin_%29.md): Deprecated. Returns whether the user should be allowed to end editing.
- [webViewDidBeginEditing:](webviewdidbeginediting%28__%29.md): Deprecated. Sent by the default notification center when the user begins editing the web view.
