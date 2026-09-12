> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewisresizable(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewisresizable(_:))

# webViewIsResizable(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value indicating whether a web view’s window can be resized.

## Declaration

```swift
optional func webViewIsResizable(_ sender: WebView!) -> Bool
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the web view’s window can be resized; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you display multiple web views in a window then your user interface delegate should implement this method to handle this special case.

## See Also

### Moving and Resizing Windows

- [webView(\_:setResizable:)](webview%28__setresizable_%29.md): Deprecated. Sets whether a web view’s window can be resized.
- [webView(\_:setFrame:)](webview%28__setframe_%29.md): Deprecated. Sets the frame rectangle of a web view’s window to the specified frame size.
- [webViewFrame(\_:)](webviewframe%28__%29.md): Deprecated. Returns the frame rectangle of a web view’s window.

# webViewIsResizable: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value indicating whether a web view’s window can be resized.

## Declaration

```objectivec
- (BOOL) webViewIsResizable:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the web view’s window can be resized; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you display multiple web views in a window then your user interface delegate should implement this method to handle this special case.

## See Also

### Moving and Resizing Windows

- [webView:setResizable:](webview%28__setresizable_%29.md): Deprecated. Sets whether a web view’s window can be resized.
- [webView:setFrame:](webview%28__setframe_%29.md): Deprecated. Sets the frame rectangle of a web view’s window to the specified frame size.
- [webViewFrame:](webviewframe%28__%29.md): Deprecated. Returns the frame rectangle of a web view’s window.
