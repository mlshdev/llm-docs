> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webviewdidbegineditingnotification](https://developer.apple.com/documentation/webkit/webviewdidbegineditingnotification)

# WebViewDidBeginEditingNotification

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Posted when a web view begins any operation that changes its contents in response to user editing.

## Declaration

```objectivec
extern NSString * const WebViewDidBeginEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the WebView object that the user is editing. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [WebViewDidChangeNotification](webviewdidchangenotification.md): Deprecated. Posted when a web view performs any operation that changes its contents in response to user editing.
- [WebViewDidChangeSelectionNotification](webviewdidchangeselectionnotification.md): Deprecated. Posted when a web view changes its typing selection.
- [WebViewDidChangeTypingStyleNotification](webviewdidchangetypingstylenotification.md): Deprecated. Posted when a web view changes its typing style.
- [WebViewDidEndEditingNotification](webviewdidendeditingnotification.md): Deprecated. Posted when a web view ends any operation that changes its contents in response to user editing.
- [WebViewProgressEstimateChangedNotification](webviewprogressestimatechangednotification.md): Deprecated. Posted by a WebView object when the estimated progress value of a load changes.
- [WebViewProgressFinishedNotification](webviewprogressfinishednotification.md): Deprecated. Posted by a WebView object when the load has finished.
- [WebViewProgressStartedNotification](webviewprogressstartednotification.md): Deprecated. Posted by a WebView object when a load begins, including a load that is initiated in a subframe.
