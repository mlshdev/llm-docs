> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:setframe:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:setframe:))

# webView(\_:setFrame:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the frame rectangle of a web view’s window to the specified frame size.

## Declaration

```swift
optional func webView(_ sender: WebView!, setFrame frame: NSRect)
```

## Parameters

- `sender`: The web view that sent the message.
- `frame`: The frame size.

<a id="Discussion"></a>

## Discussion

The sender invokes this method instead of setting the window’s frame directly, allowing delegates to augment the behavior by, for example, saving the original window size before resizing as a result of JavaScript running. If you do not implement this method, the `NSWindow` method [setFrame(\_:display:)](https://developer.apple.com/documentation/appkit/nswindow/setframe%28_:display:%29) is sent to the window that contains `sender`, with [true](https://developer.apple.com/documentation/swift/true) passed as the display argument.

## See Also

### Moving and Resizing Windows

- [webViewIsResizable(\_:)](webviewisresizable%28__%29.md): Deprecated. Returns a Boolean value indicating whether a web view’s window can be resized.
- [webView(\_:setResizable:)](webview%28__setresizable_%29.md): Deprecated. Sets whether a web view’s window can be resized.
- [webViewFrame(\_:)](webviewframe%28__%29.md): Deprecated. Returns the frame rectangle of a web view’s window.

# webView:setFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the frame rectangle of a web view’s window to the specified frame size.

## Declaration

```objectivec
- (void) webView:(WebView *) sender setFrame:(NSRect) frame;
```

## Parameters

- `sender`: The web view that sent the message.
- `frame`: The frame size.

<a id="Discussion"></a>

## Discussion

The sender invokes this method instead of setting the window’s frame directly, allowing delegates to augment the behavior by, for example, saving the original window size before resizing as a result of JavaScript running. If you do not implement this method, the `NSWindow` method [setFrame:display:](https://developer.apple.com/documentation/appkit/nswindow/setframe%28_:display:%29) is sent to the window that contains `sender`, with [true](https://developer.apple.com/documentation/swift/true) passed as the display argument.

## See Also

### Moving and Resizing Windows

- [webViewIsResizable:](webviewisresizable%28__%29.md): Deprecated. Returns a Boolean value indicating whether a web view’s window can be resized.
- [webView:setResizable:](webview%28__setresizable_%29.md): Deprecated. Sets whether a web view’s window can be resized.
- [webViewFrame:](webviewframe%28__%29.md): Deprecated. Returns the frame rectangle of a web view’s window.
