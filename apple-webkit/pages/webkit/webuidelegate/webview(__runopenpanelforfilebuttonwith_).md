> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:runopenpanelforfilebuttonwith:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:runopenpanelforfilebuttonwith:))

# webView(\_:runOpenPanelForFileButtonWith:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays an open panel for a file input control.

## Declaration

```swift
optional func webView(_ sender: WebView!, runOpenPanelForFileButtonWith resultListener: (any WebOpenPanelResultListener)!)
```

## Parameters

- `sender`: The web view that sent the message.
- `resultListener`: See the [WebOpenPanelResultListener](../webopenpanelresultlistener.md) protocol for how to set these values.

<a id="Discussion"></a>

## Discussion

This method uses a listener object to set the results of the open panel, instead of returning the value directly. This approach allows delegates to implement the open panel as a modal dialog. No action is taken if you do not implement this method.

## See Also

### Opening Panels

- [webView(\_:runJavaScriptAlertPanelWithMessage:initiatedBy:)](webview%28__runjavascriptalertpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript alert panel containing the specified message.
- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedBy:)](webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedBy:)](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView(\_:runOpenPanelForFileButtonWith:allowMultipleFiles:)](webview%28__runopenpanelforfilebuttonwith_allowmultiplefiles_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView(\_:runBeforeUnloadConfirmPanelWithMessage:initiatedBy:)](webview%28__runbeforeunloadconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a confirmation panel containing the specified message before a window closes.

# webView:runOpenPanelForFileButtonWithResultListener: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays an open panel for a file input control.

## Declaration

```objectivec
- (void) webView:(WebView *) sender runOpenPanelForFileButtonWithResultListener:(id<WebOpenPanelResultListener>) resultListener;
```

## Parameters

- `sender`: The web view that sent the message.
- `resultListener`: See the [WebOpenPanelResultListener](../webopenpanelresultlistener.md) protocol for how to set these values.

<a id="Discussion"></a>

## Discussion

This method uses a listener object to set the results of the open panel, instead of returning the value directly. This approach allows delegates to implement the open panel as a modal dialog. No action is taken if you do not implement this method.

## See Also

### Opening Panels

- [webView:runJavaScriptAlertPanelWithMessage:](webview_runjavascriptalertpanelwithmessage_.md): Deprecated. Displays a JavaScript alert panel.
- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:](webview%28__runjavascriptalertpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript alert panel containing the specified message.
- [webView:runJavaScriptConfirmPanelWithMessage:](webview_runjavascriptconfirmpanelwithmessage_.md): Deprecated. Displays a JavaScript confirm panel.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:](webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:](webview_runjavascripttextinputpanelwithprompt_defaulttext_.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runOpenPanelForFileButtonWithResultListener:allowMultipleFiles:](webview%28__runopenpanelforfilebuttonwith_allowmultiplefiles_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView:runBeforeUnloadConfirmPanelWithMessage:initiatedByFrame:](webview%28__runbeforeunloadconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a confirmation panel containing the specified message before a window closes.
