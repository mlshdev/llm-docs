> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:runbeforeunloadconfirmpanelwithmessage:initiatedby:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:runbeforeunloadconfirmpanelwithmessage:initiatedby:))

# webView(\_:runBeforeUnloadConfirmPanelWithMessage:initiatedBy:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays a confirmation panel containing the specified message before a window closes.

## Declaration

```swift
optional func webView(_ sender: WebView!, runBeforeUnloadConfirmPanelWithMessage message: String!, initiatedBy frame: WebFrame!) -> Bool
```

## Parameters

- `sender`: The web view that sent the message.
- `message`: The message to display in the panel.
- `frame`: The web frame whose JavaScript initiated this call.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user clicked the OK button; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to include a message in the confirmation panel in addition to the message supplied by the webpage. The confirmation panel should contain OK and Cancel buttons.

## See Also

### Opening Panels

- [webView(\_:runJavaScriptAlertPanelWithMessage:initiatedBy:)](webview%28__runjavascriptalertpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript alert panel containing the specified message.
- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedBy:)](webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedBy:)](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView(\_:runOpenPanelForFileButtonWith:)](webview%28__runopenpanelforfilebuttonwith_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView(\_:runOpenPanelForFileButtonWith:allowMultipleFiles:)](webview%28__runopenpanelforfilebuttonwith_allowmultiplefiles_%29.md): Deprecated. Displays an open panel for a file input control.

# webView:runBeforeUnloadConfirmPanelWithMessage:initiatedByFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Displays a confirmation panel containing the specified message before a window closes.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) sender runBeforeUnloadConfirmPanelWithMessage:(NSString *) message initiatedByFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view that sent the message.
- `message`: The message to display in the panel.
- `frame`: The web frame whose JavaScript initiated this call.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user clicked the OK button; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to include a message in the confirmation panel in addition to the message supplied by the webpage. The confirmation panel should contain OK and Cancel buttons.

## See Also

### Opening Panels

- [webView:runJavaScriptAlertPanelWithMessage:](webview_runjavascriptalertpanelwithmessage_.md): Deprecated. Displays a JavaScript alert panel.
- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:](webview%28__runjavascriptalertpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript alert panel containing the specified message.
- [webView:runJavaScriptConfirmPanelWithMessage:](webview_runjavascriptconfirmpanelwithmessage_.md): Deprecated. Displays a JavaScript confirm panel.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:](webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:](webview_runjavascripttextinputpanelwithprompt_defaulttext_.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runOpenPanelForFileButtonWithResultListener:](webview%28__runopenpanelforfilebuttonwith_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView:runOpenPanelForFileButtonWithResultListener:allowMultipleFiles:](webview%28__runopenpanelforfilebuttonwith_allowmultiplefiles_%29.md): Deprecated. Displays an open panel for a file input control.
