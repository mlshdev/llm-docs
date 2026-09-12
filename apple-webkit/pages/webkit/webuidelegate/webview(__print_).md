> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:print:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:print:))

# webView(\_:print:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Prints the contents of a web frame view.

## Declaration

```swift
optional func webView(_ sender: WebView!, print frameView: WebFrameView!)
```

## Parameters

- `sender`: The web view that sent the message.
- `frameView`: The web frame view whose contents to print.

<a id="Discussion"></a>

## Discussion

This method is invoked when a script or a user wants to print a webpage. Typically, the delegate implements this method to prepare the web frame view content for printing. The web frame view can handle some content without intervention by the delegate. Send the [documentViewShouldHandlePrint](../webframeview/documentviewshouldhandleprint.md) message to the web frame view to determine if it can handle printing. If this method returns [true](https://developer.apple.com/documentation/swift/true), then the delegate can print the content by sending the [printDocumentView()](../webframeview/printdocumentview%28%29.md) message to the web frame view. Otherwise, the delegate can use [printOperation(with:)](../webframeview/printoperation%28with_%29.md) to get an [NSPrintOperation](https://developer.apple.com/documentation/appkit/nsprintoperation) object to print the web frame view.

## See Also

### Printing

- [webViewHeaderHeight(\_:)](webviewheaderheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page header.
- [webViewFooterHeight(\_:)](webviewfooterheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page footer.
- [webView(\_:drawHeaderIn:)](webview%28__drawheaderin_%29.md): Deprecated. Draws the web view’s header in the specified rectangle.
- [webView(\_:drawFooterIn:)](webview%28__drawfooterin_%29.md): Deprecated. Draws the web view’s footer in the specified rectangle.

# webView:printFrameView: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Prints the contents of a web frame view.

## Declaration

```objectivec
- (void) webView:(WebView *) sender printFrameView:(WebFrameView *) frameView;
```

## Parameters

- `sender`: The web view that sent the message.
- `frameView`: The web frame view whose contents to print.

<a id="Discussion"></a>

## Discussion

This method is invoked when a script or a user wants to print a webpage. Typically, the delegate implements this method to prepare the web frame view content for printing. The web frame view can handle some content without intervention by the delegate. Send the [documentViewShouldHandlePrint](../webframeview/documentviewshouldhandleprint.md) message to the web frame view to determine if it can handle printing. If this method returns [true](https://developer.apple.com/documentation/swift/true), then the delegate can print the content by sending the [printDocumentView](../webframeview/printdocumentview%28%29.md) message to the web frame view. Otherwise, the delegate can use [printOperationWithPrintInfo:](../webframeview/printoperation%28with_%29.md) to get an [NSPrintOperation](https://developer.apple.com/documentation/appkit/nsprintoperation) object to print the web frame view.

## See Also

### Printing

- [webViewHeaderHeight:](webviewheaderheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page header.
- [webViewFooterHeight:](webviewfooterheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page footer.
- [webView:drawHeaderInRect:](webview%28__drawheaderin_%29.md): Deprecated. Draws the web view’s header in the specified rectangle.
- [webView:drawFooterInRect:](webview%28__drawfooterin_%29.md): Deprecated. Draws the web view’s footer in the specified rectangle.
