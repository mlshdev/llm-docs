> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewcontentrect:](https://developer.apple.com/documentation/webkit/webuidelegate/webviewcontentrect:)

# webViewContentRect:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.5)

Returns a web view window’s content rectangle.

> Content rectangle calculations are automatic.

## Declaration

```objectivec
- (NSRect) webViewContentRect:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

The content rectangle of the window that contains the web view.

<a id="Discussion"></a>

## Discussion

The content view is the highest accessible [NSView](https://developer.apple.com/documentation/appkit/nsview) object in the view hierarchy displayed in the window. A web view invokes this method instead of setting the content view’s frame directly, allowing delegates to alter the size that is returned.

## See Also

### Moving and Resizing Content Views

- [webView:setContentRect:](webview_setcontentrect_.md): Deprecated. Sets the window’s content view frame to the specified content rectangle.
