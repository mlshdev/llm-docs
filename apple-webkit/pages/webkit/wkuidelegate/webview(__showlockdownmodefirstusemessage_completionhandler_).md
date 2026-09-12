> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:showlockdownmodefirstusemessage:completionhandler:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:showlockdownmodefirstusemessage:completionhandler:))

# webView(\_:showLockdownModeFirstUseMessage:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Displays a custom Lockdown Mode first use message.

## Declaration

```swift
optional func webView(_ webView: WKWebView, showLockdownModeFirstUseMessage message: String, completionHandler: @escaping @MainActor @Sendable (WKDialogResult) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, showLockdownModeFirstUseMessage message: String) async -> WKDialogResult
```

## Parameters

- `webView`: The web view that is requesting to display the Lockdown Mode first use dialog.
- `message`: The message for the web view to display if the delegate does not display the first use dialog.
- `completionHandler`: A block you must invoke to resume after the web view displays the first use dialog. The block does not return a value, and accepts the following parameter:

  - **dialogResult**: A display result case that indicates how the method handled the display request.

<a id="Discussion"></a>

## Discussion

Implement this method to display a custom Lockdown Mode message, or to suppress the message. Return, or call the completion handler, with a [WKDialogResult](../wkdialogresult.md) case that indicates how your method handled the display request. For more information about Lockdown Mode, see [About Lockdown Mode](https://support.apple.com/en-us/HT212650).

If you don’t implement this method, the web view displays the default message.

## See Also

### Displaying UI panels

- [webView(\_:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:)](webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:)](webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:)](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [WKDialogResult](../wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.

# webView:showLockdownModeFirstUseMessage:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Displays a custom Lockdown Mode first use message.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView showLockdownModeFirstUseMessage:(NSString *) message completionHandler:(void (^)(enum WKDialogResult)) completionHandler;
```

## Parameters

- `webView`: The web view that is requesting to display the Lockdown Mode first use dialog.
- `message`: The message for the web view to display if the delegate does not display the first use dialog.
- `completionHandler`: A block you must invoke to resume after the web view displays the first use dialog. The block does not return a value, and accepts the following parameter:

  - **dialogResult**: A display result case that indicates how the method handled the display request.

<a id="Discussion"></a>

## Discussion

Implement this method to display a custom Lockdown Mode message, or to suppress the message. Return, or call the completion handler, with a [WKDialogResult](../wkdialogresult.md) case that indicates how your method handled the display request. For more information about Lockdown Mode, see [About Lockdown Mode](https://support.apple.com/en-us/HT212650).

If you don’t implement this method, the web view displays the default message.

## See Also

### Displaying UI panels

- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:](webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:](webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:](webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [WKDialogResult](../wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.
