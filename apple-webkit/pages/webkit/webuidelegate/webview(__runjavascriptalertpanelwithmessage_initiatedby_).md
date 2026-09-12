> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:runjavascriptalertpanelwithmessage:initiatedby:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:runjavascriptalertpanelwithmessage:initiatedby:))

# webView(\_:runJavaScriptAlertPanelWithMessage:initiatedBy:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays a JavaScript alert panel containing the specified message.

## Declaration

```swift
optional func webView(_ sender: WebView!, runJavaScriptAlertPanelWithMessage message: String!, initiatedBy frame: WebFrame!)
```

## Parameters

- `sender`: The web view that sent the message.
- `message`: The message to display in the alert panel.
- `frame`: The web frame whose JavaScript initiated this call.

<a id="Discussion"></a>

## Discussion

This method displays an alert panel when JavaScript code calls `alert`. Delegates should visually indicate that this panel comes from JavaScript. The panel should contain a single OK button. No action is taken if you do not implement this method.

## See Also

### Opening Panels

- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedBy:)](webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedBy:)](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView(\_:runOpenPanelForFileButtonWith:)](webview%28__runopenpanelforfilebuttonwith_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView(\_:runOpenPanelForFileButtonWith:allowMultipleFiles:)](webview%28__runopenpanelforfilebuttonwith_allowmultiplefiles_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView(\_:runBeforeUnloadConfirmPanelWithMessage:initiatedBy:)](webview%28__runbeforeunloadconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a confirmation panel containing the specified message before a window closes.

# webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays a JavaScript alert panel containing the specified message.

## Declaration

```objectivec
- (void) webView:(WebView *) sender runJavaScriptAlertPanelWithMessage:(NSString *) message initiatedByFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view that sent the message.
- `message`: The message to display in the alert panel.
- `frame`: The web frame whose JavaScript initiated this call.

<a id="Discussion"></a>

## Discussion

This method displays an alert panel when JavaScript code calls `alert`. Delegates should visually indicate that this panel comes from JavaScript. The panel should contain a single OK button. No action is taken if you do not implement this method.

## See Also

### Opening Panels

- [webView:runJavaScriptAlertPanelWithMessage:](webview_runjavascriptalertpanelwithmessage_.md): Deprecated. Displays a JavaScript alert panel.
- [webView:runJavaScriptConfirmPanelWithMessage:](webview_runjavascriptconfirmpanelwithmessage_.md): Deprecated. Displays a JavaScript confirm panel.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:](webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:](webview_runjavascripttextinputpanelwithprompt_defaulttext_.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runOpenPanelForFileButtonWithResultListener:](webview%28__runopenpanelforfilebuttonwith_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView:runOpenPanelForFileButtonWithResultListener:allowMultipleFiles:](webview%28__runopenpanelforfilebuttonwith_allowmultiplefiles_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView:runBeforeUnloadConfirmPanelWithMessage:initiatedByFrame:](webview%28__runbeforeunloadconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a confirmation panel containing the specified message before a window closes.
