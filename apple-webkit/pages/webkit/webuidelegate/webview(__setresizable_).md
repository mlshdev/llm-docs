> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:setresizable:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:setresizable:))

# webView(\_:setResizable:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets whether a web view’s window can be resized.

## Declaration

```swift
optional func webView(_ sender: WebView!, setResizable resizable: Bool)
```

## Parameters

- `sender`: The web view that sent the message.
- `resizable`: If [true](https://developer.apple.com/documentation/swift/true), the web view’s window can be resized; if [false](https://developer.apple.com/documentation/swift/false), the window is not resizable.

<a id="Discussion"></a>

## Discussion

By default, this method sets the window containing a web view to be resizable. If you display multiple web views in a window then your user interface delegate should implement this method to handle this special case. If you do not implement this method, the `NSWindow` method [showsResizeIndicator](https://developer.apple.com/documentation/appkit/nswindow/showsresizeindicator) is sent to the window that contains  `sender`.

## See Also

### Moving and Resizing Windows

- [webViewIsResizable(\_:)](webviewisresizable%28__%29.md): Deprecated. Returns a Boolean value indicating whether a web view’s window can be resized.
- [webView(\_:setFrame:)](webview%28__setframe_%29.md): Deprecated. Sets the frame rectangle of a web view’s window to the specified frame size.
- [webViewFrame(\_:)](webviewframe%28__%29.md): Deprecated. Returns the frame rectangle of a web view’s window.

# webView:setResizable: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets whether a web view’s window can be resized.

## Declaration

```objectivec
- (void) webView:(WebView *) sender setResizable:(BOOL) resizable;
```

## Parameters

- `sender`: The web view that sent the message.
- `resizable`: If [true](https://developer.apple.com/documentation/swift/true), the web view’s window can be resized; if [false](https://developer.apple.com/documentation/swift/false), the window is not resizable.

<a id="Discussion"></a>

## Discussion

By default, this method sets the window containing a web view to be resizable. If you display multiple web views in a window then your user interface delegate should implement this method to handle this special case. If you do not implement this method, the `NSWindow` method [showsResizeIndicator](https://developer.apple.com/documentation/appkit/nswindow/showsresizeindicator) is sent to the window that contains  `sender`.

## See Also

### Moving and Resizing Windows

- [webViewIsResizable:](webviewisresizable%28__%29.md): Deprecated. Returns a Boolean value indicating whether a web view’s window can be resized.
- [webView:setFrame:](webview%28__setframe_%29.md): Deprecated. Sets the frame rectangle of a web view’s window to the specified frame size.
- [webViewFrame:](webviewframe%28__%29.md): Deprecated. Returns the frame rectangle of a web view’s window.
