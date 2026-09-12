> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:drawfooterin:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:drawfooterin:))

# webView(\_:drawFooterIn:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Draws the web view’s footer in the specified rectangle.

## Declaration

```swift
optional func webView(_ sender: WebView!, drawFooterIn rect: NSRect)
```

## Parameters

- `sender`: The web view that sent the message.
- `rect`: The rectangle reserved for drawing the footer.

## See Also

### Printing

- [webView(\_:print:)](webview%28__print_%29.md): Deprecated. Prints the contents of a web frame view.
- [webViewHeaderHeight(\_:)](webviewheaderheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page header.
- [webViewFooterHeight(\_:)](webviewfooterheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page footer.
- [webView(\_:drawHeaderIn:)](webview%28__drawheaderin_%29.md): Deprecated. Draws the web view’s header in the specified rectangle.

# webView:drawFooterInRect: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Draws the web view’s footer in the specified rectangle.

## Declaration

```objectivec
- (void) webView:(WebView *) sender drawFooterInRect:(NSRect) rect;
```

## Parameters

- `sender`: The web view that sent the message.
- `rect`: The rectangle reserved for drawing the footer.

## See Also

### Printing

- [webView:printFrameView:](webview%28__print_%29.md): Deprecated. Prints the contents of a web frame view.
- [webViewHeaderHeight:](webviewheaderheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page header.
- [webViewFooterHeight:](webviewfooterheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page footer.
- [webView:drawHeaderInRect:](webview%28__drawheaderin_%29.md): Deprecated. Draws the web view’s header in the specified rectangle.
