> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview:setcontentrect:](https://developer.apple.com/documentation/webkit/webuidelegate/webview:setcontentrect:)

# webView:setContentRect:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.5)

Sets the window’s content view frame to the specified content rectangle.

> Content rectangle calculations are automatic.

## Declaration

```objectivec
- (void) webView:(WebView *) sender setContentRect:(NSRect) frame;
```

## Parameters

- `sender`: The web view that sent the message.
- `frame`: The location and size of the window’s content area.

<a id="Discussion"></a>

## Discussion

The content view is the highest accessible [NSView](https://developer.apple.com/documentation/appkit/nsview) object in the view hierarchy displayed in the window. A web view invokes this method instead of setting the content view’s frame directly, allowing delegates to augment the behavior by, for example, avoiding auto-saving of the size.

If this method is not implemented by the delegate, then [webView:setFrame:](webview%28__setframe_%29.md) is invoked with the rectangle returned by sending the `NSWindow` method [frameRectForContentRect:styleMask:](https://developer.apple.com/documentation/appkit/nswindow/framerect%28forcontentrect:stylemask:%29) to the window.

## See Also

### Moving and Resizing Content Views

- [webViewContentRect:](webviewcontentrect_.md): Deprecated. Returns a web view window’s content rectangle.
