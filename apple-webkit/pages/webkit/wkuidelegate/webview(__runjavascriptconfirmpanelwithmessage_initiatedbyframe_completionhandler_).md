> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:runjavascriptconfirmpanelwithmessage:initiatedbyframe:completionhandler:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:runjavascriptconfirmpanelwithmessage:initiatedbyframe:completionhandler:))

# webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Displays a JavaScript confirm panel.

## Declaration

```swift
optional func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping @MainActor @Sendable (Bool) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo) async -> Bool
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `message`: The message to be displayed.
- `frame`: Information about the frame whose JavaScript process initiated this call.
- `completionHandler`: The completion handler to call after the confirm panel has been dismissed. Pass [true](https://developer.apple.com/documentation/swift/true) if the user chose OK, and pass [false](https://developer.apple.com/documentation/swift/false) if the user chose Cancel.

<a id="Discussion"></a>

## Discussion

For user security, implementations of this method should call attention to the fact that a specific website controls the content in this panel. A simple formula for identifying the controlling website is `frame.request.URL.host`. The panel should have two buttons, typically OK and Cancel.

## See Also

### Displaying UI panels

- [webView(\_:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:)](webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:)](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [webView(\_:showLockdownModeFirstUseMessage:completionHandler:)](webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.
- [WKDialogResult](../wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.

# webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Displays a JavaScript confirm panel.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView runJavaScriptConfirmPanelWithMessage:(NSString *) message initiatedByFrame:(WKFrameInfo *) frame completionHandler:(void (^)(_Bool)) completionHandler;
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `message`: The message to be displayed.
- `frame`: Information about the frame whose JavaScript process initiated this call.
- `completionHandler`: The completion handler to call after the confirm panel has been dismissed. Pass [true](https://developer.apple.com/documentation/swift/true) if the user chose OK, and pass [false](https://developer.apple.com/documentation/swift/false) if the user chose Cancel.

<a id="Discussion"></a>

## Discussion

For user security, implementations of this method should call attention to the fact that a specific website controls the content in this panel. A simple formula for identifying the controlling website is `frame.request.URL.host`. The panel should have two buttons, typically OK and Cancel.

## See Also

### Displaying UI panels

- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:](webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [webView:showLockdownModeFirstUseMessage:completionHandler:](webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.
- [WKDialogResult](../wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.
