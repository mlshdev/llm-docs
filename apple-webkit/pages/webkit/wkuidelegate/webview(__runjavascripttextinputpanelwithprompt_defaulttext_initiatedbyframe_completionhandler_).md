> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:runjavascripttextinputpanelwithprompt:defaulttext:initiatedbyframe:completionhandler:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:runjavascripttextinputpanelwithprompt:defaulttext:initiatedbyframe:completionhandler:))

# webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Displays a JavaScript text input panel.

## Declaration

```swift
optional func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping @MainActor @Sendable (String?) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo) async -> String?
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `prompt`: The message to be displayed.
- `defaultText`: The initial text to display in the text entry field.
- `frame`: Information about the frame whose JavaScript process initiated this call.
- `completionHandler`: The completion handler to call after the text input panel has been dismissed. Pass the entered text if the user chose OK, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

For user security, implementations of this method should call attention to the fact that a specific website controls the content in this panel. A simple formula for identifying the controlling website is `frame.request.URL.host`. The panel should have two buttons (typically OK and Cancel) and a field in which to enter text.

## See Also

### Displaying UI panels

- [webView(\_:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:)](webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:)](webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView(\_:showLockdownModeFirstUseMessage:completionHandler:)](webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.
- [WKDialogResult](../wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.

# webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Displays a JavaScript text input panel.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView runJavaScriptTextInputPanelWithPrompt:(NSString *) prompt defaultText:(NSString *) defaultText initiatedByFrame:(WKFrameInfo *) frame completionHandler:(void (^)(NSString *)) completionHandler;
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `prompt`: The message to be displayed.
- `defaultText`: The initial text to display in the text entry field.
- `frame`: Information about the frame whose JavaScript process initiated this call.
- `completionHandler`: The completion handler to call after the text input panel has been dismissed. Pass the entered text if the user chose OK, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

For user security, implementations of this method should call attention to the fact that a specific website controls the content in this panel. A simple formula for identifying the controlling website is `frame.request.URL.host`. The panel should have two buttons (typically OK and Cancel) and a field in which to enter text.

## See Also

### Displaying UI panels

- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:](webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:](webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView:showLockdownModeFirstUseMessage:completionHandler:](webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.
- [WKDialogResult](../wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.
