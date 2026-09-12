> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview:runjavascriptconfirmpanelwithmessage:](https://developer.apple.com/documentation/webkit/webuidelegate/webview:runjavascriptconfirmpanelwithmessage:)

# webView:runJavaScriptConfirmPanelWithMessage:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.5)

Displays a JavaScript confirm panel.

> Use webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame: instead.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) sender runJavaScriptConfirmPanelWithMessage:(NSString *) message;
```

## Parameters

- `sender`: The web view that sent the message.
- `message`: The message to display in the confirmation panel.

<a id="Discussion"></a>

## Discussion

This method is used to display a confirmation panel when JavaScript code calls `confirm`. It returns [true](https://developer.apple.com/documentation/swift/true) if confirmed, [false](https://developer.apple.com/documentation/swift/false) otherwise. Delegates should visually indicate that this panel comes from JavaScript. The panel should have, for example, an OK and Cancel button. No action is taken if you do not implement this method.

## See Also

### Opening Panels

- [webView:runJavaScriptAlertPanelWithMessage:](webview_runjavascriptalertpanelwithmessage_.md): Deprecated. Displays a JavaScript alert panel.
- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:](webview%28__runjavascriptalertpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript alert panel containing the specified message.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:](webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:](webview_runjavascripttextinputpanelwithprompt_defaulttext_.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runOpenPanelForFileButtonWithResultListener:](webview%28__runopenpanelforfilebuttonwith_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView:runOpenPanelForFileButtonWithResultListener:allowMultipleFiles:](webview%28__runopenpanelforfilebuttonwith_allowmultiplefiles_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView:runBeforeUnloadConfirmPanelWithMessage:initiatedByFrame:](webview%28__runbeforeunloadconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a confirmation panel containing the specified message before a window closes.
