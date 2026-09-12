> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewframe(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewframe(_:))

# webViewFrame(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the frame rectangle of a web view’s window.

## Declaration

```swift
optional func webViewFrame(_ sender: WebView!) -> NSRect
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

The frame rectangle of the web view’s window.

## See Also

### Moving and Resizing Windows

- [webViewIsResizable(\_:)](webviewisresizable%28__%29.md): Deprecated. Returns a Boolean value indicating whether a web view’s window can be resized.
- [webView(\_:setResizable:)](webview%28__setresizable_%29.md): Deprecated. Sets whether a web view’s window can be resized.
- [webView(\_:setFrame:)](webview%28__setframe_%29.md): Deprecated. Sets the frame rectangle of a web view’s window to the specified frame size.

# webViewFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the frame rectangle of a web view’s window.

## Declaration

```objectivec
- (NSRect) webViewFrame:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

The frame rectangle of the web view’s window.

## See Also

### Moving and Resizing Windows

- [webViewIsResizable:](webviewisresizable%28__%29.md): Deprecated. Returns a Boolean value indicating whether a web view’s window can be resized.
- [webView:setResizable:](webview%28__setresizable_%29.md): Deprecated. Sets whether a web view’s window can be resized.
- [webView:setFrame:](webview%28__setframe_%29.md): Deprecated. Sets the frame rectangle of a web view’s window to the specified frame size.
