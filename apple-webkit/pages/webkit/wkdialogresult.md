> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdialogresult](https://developer.apple.com/documentation/webkit/wkdialogresult)

# WKDialogResult (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.

## Declaration

```swift
enum WKDialogResult
```

## Topics

### First use dialog results

- [WKDialogResult.askAgain](wkdialogresult/askagain.md): A result that indicates the delegate didn’t display a message, so other web views should check again.
- [WKDialogResult.handled](wkdialogresult/handled.md): A result that indicates the delegate displayed the first use message.
- [WKDialogResult.showDefault](wkdialogresult/showdefault.md): A result that indicates the delegate didn’t display a message, so the web view should show the default Lockdown Mode message.

### Initializers

- [init(rawValue:)](wkdialogresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying UI panels

- [webView(\_:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:)](wkuidelegate/webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:)](wkuidelegate/webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:)](wkuidelegate/webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [webView(\_:showLockdownModeFirstUseMessage:completionHandler:)](wkuidelegate/webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.

# WKDialogResult (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.

## Declaration

```objectivec
enum WKDialogResult : NSInteger;
```

## Topics

### First use dialog results

- [WKDialogResultAskAgain](wkdialogresult/askagain.md): A result that indicates the delegate didn’t display a message, so other web views should check again.
- [WKDialogResultHandled](wkdialogresult/handled.md): A result that indicates the delegate displayed the first use message.
- [WKDialogResultShowDefault](wkdialogresult/showdefault.md): A result that indicates the delegate didn’t display a message, so the web view should show the default Lockdown Mode message.

## See Also

### Displaying UI panels

- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:](wkuidelegate/webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:](wkuidelegate/webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:](wkuidelegate/webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [webView:showLockdownModeFirstUseMessage:completionHandler:](wkuidelegate/webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.
