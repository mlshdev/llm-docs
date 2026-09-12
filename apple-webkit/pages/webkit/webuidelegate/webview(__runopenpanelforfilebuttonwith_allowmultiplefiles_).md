> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:runopenpanelforfilebuttonwith:allowmultiplefiles:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:runopenpanelforfilebuttonwith:allowmultiplefiles:))

# webView(\_:runOpenPanelForFileButtonWith:allowMultipleFiles:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Displays an open panel for a file input control.

## Declaration

```swift
optional func webView(_ sender: WebView!, runOpenPanelForFileButtonWith resultListener: (any WebOpenPanelResultListener)!, allowMultipleFiles: Bool)
```

## Parameters

- `sender`: The web view that sent the message.
- `resultListener`: See the [WebOpenPanelResultListener](../webopenpanelresultlistener.md) protocol for how to set these values.
- `allowMultipleFiles`: If [true](https://developer.apple.com/documentation/swift/true), the open panel should allow multiple files to be selected; otherwise, it should not.

## See Also

### Opening Panels

- [webView(\_:runJavaScriptAlertPanelWithMessage:initiatedBy:)](webview%28__runjavascriptalertpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript alert panel containing the specified message.
- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedBy:)](webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedBy:)](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView(\_:runOpenPanelForFileButtonWith:)](webview%28__runopenpanelforfilebuttonwith_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView(\_:runBeforeUnloadConfirmPanelWithMessage:initiatedBy:)](webview%28__runbeforeunloadconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a confirmation panel containing the specified message before a window closes.

# webView:runOpenPanelForFileButtonWithResultListener:allowMultipleFiles: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Displays an open panel for a file input control.

## Declaration

```objectivec
- (void) webView:(WebView *) sender runOpenPanelForFileButtonWithResultListener:(id<WebOpenPanelResultListener>) resultListener allowMultipleFiles:(BOOL) allowMultipleFiles;
```

## Parameters

- `sender`: The web view that sent the message.
- `resultListener`: See the [WebOpenPanelResultListener](../webopenpanelresultlistener.md) protocol for how to set these values.
- `allowMultipleFiles`: If [true](https://developer.apple.com/documentation/swift/true), the open panel should allow multiple files to be selected; otherwise, it should not.

## See Also

### Opening Panels

- [webView:runJavaScriptAlertPanelWithMessage:](webview_runjavascriptalertpanelwithmessage_.md): Deprecated. Displays a JavaScript alert panel.
- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:](webview%28__runjavascriptalertpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript alert panel containing the specified message.
- [webView:runJavaScriptConfirmPanelWithMessage:](webview_runjavascriptconfirmpanelwithmessage_.md): Deprecated. Displays a JavaScript confirm panel.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:](webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:](webview_runjavascripttextinputpanelwithprompt_defaulttext_.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runOpenPanelForFileButtonWithResultListener:](webview%28__runopenpanelforfilebuttonwith_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView:runBeforeUnloadConfirmPanelWithMessage:initiatedByFrame:](webview%28__runbeforeunloadconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a confirmation panel containing the specified message before a window closes.
