> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:runjavascriptalertpanelwithmessage:initiatedbyframe:completionhandler:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:runjavascriptalertpanelwithmessage:initiatedbyframe:completionhandler:))

# webView(\_:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Displays a JavaScript alert panel.

## Declaration

```swift
optional func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping @MainActor @Sendable () -> Void)
```

```swift
optional func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo) async
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `message`: The message to be displayed.
- `frame`: Information about the frame whose JavaScript process initiated this call.
- `completionHandler`: The completion handler to call after the alert panel has been dismissed.

<a id="Discussion"></a>

## Discussion

For user security, implementations of this method should call attention to the fact that a specific website controls the content in this panel. A simple formula for identifying the controlling website is `frame.request.URL.host`. The panel should have a single OK button.

## See Also

### Displaying UI panels

- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:)](webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:)](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [webView(\_:showLockdownModeFirstUseMessage:completionHandler:)](webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.
- [WKDialogResult](../wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.

# webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Displays a JavaScript alert panel.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView runJavaScriptAlertPanelWithMessage:(NSString *) message initiatedByFrame:(WKFrameInfo *) frame completionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `message`: The message to be displayed.
- `frame`: Information about the frame whose JavaScript process initiated this call.
- `completionHandler`: The completion handler to call after the alert panel has been dismissed.

<a id="Discussion"></a>

## Discussion

For user security, implementations of this method should call attention to the fact that a specific website controls the content in this panel. A simple formula for identifying the controlling website is `frame.request.URL.host`. The panel should have a single OK button.

## See Also

### Displaying UI panels

- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:](webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [webView:showLockdownModeFirstUseMessage:completionHandler:](webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.
- [WKDialogResult](../wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.
