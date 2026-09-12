> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewfooterheight(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewfooterheight(_:))

# webViewFooterHeight(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the height of the web view’s printed page footer.

## Declaration

```swift
optional func webViewFooterHeight(_ sender: WebView!) -> Float
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

The height of the web view’s printed page footer. Returns `0.0` if no space is reserved for the footer.

<a id="Discussion"></a>

## Discussion

The height returned by this method is used to calculate the rectangle passed to the [webView(\_:drawFooterIn:)](webview%28__drawfooterin_%29.md) method.

## See Also

### Printing

- [webView(\_:print:)](webview%28__print_%29.md): Deprecated. Prints the contents of a web frame view.
- [webViewHeaderHeight(\_:)](webviewheaderheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page header.
- [webView(\_:drawHeaderIn:)](webview%28__drawheaderin_%29.md): Deprecated. Draws the web view’s header in the specified rectangle.
- [webView(\_:drawFooterIn:)](webview%28__drawfooterin_%29.md): Deprecated. Draws the web view’s footer in the specified rectangle.

# webViewFooterHeight: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the height of the web view’s printed page footer.

## Declaration

```objectivec
- (float) webViewFooterHeight:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

The height of the web view’s printed page footer. Returns `0.0` if no space is reserved for the footer.

<a id="Discussion"></a>

## Discussion

The height returned by this method is used to calculate the rectangle passed to the [webView:drawFooterInRect:](webview%28__drawfooterin_%29.md) method.

## See Also

### Printing

- [webView:printFrameView:](webview%28__print_%29.md): Deprecated. Prints the contents of a web frame view.
- [webViewHeaderHeight:](webviewheaderheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page header.
- [webView:drawHeaderInRect:](webview%28__drawheaderin_%29.md): Deprecated. Draws the web view’s header in the specified rectangle.
- [webView:drawFooterInRect:](webview%28__drawfooterin_%29.md): Deprecated. Draws the web view’s footer in the specified rectangle.
