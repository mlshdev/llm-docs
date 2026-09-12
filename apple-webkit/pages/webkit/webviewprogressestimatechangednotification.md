> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webviewprogressestimatechangednotification](https://developer.apple.com/documentation/webkit/webviewprogressestimatechangednotification)

# WebViewProgressEstimateChangedNotification

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Posted by a WebView object when the estimated progress value of a load changes.

## Declaration

```objectivec
extern NSString * WebViewProgressEstimateChangedNotification;
```

<a id="Discussion"></a>

## Discussion

This notification may be posted zero or more times after a [WebViewProgressStartedNotification](webviewprogressstartednotification.md) notification is posted. The notification object is the WebView for which the progress value has changed. This notification does not contain a `userInfo` dictionary.

## See Also

### Related Documentation

- [estimatedProgress](webview-swift.class/estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.

### Notifications

- [WebViewDidBeginEditingNotification](webviewdidbegineditingnotification.md): Deprecated. Posted when a web view begins any operation that changes its contents in response to user editing.
- [WebViewDidChangeNotification](webviewdidchangenotification.md): Deprecated. Posted when a web view performs any operation that changes its contents in response to user editing.
- [WebViewDidChangeSelectionNotification](webviewdidchangeselectionnotification.md): Deprecated. Posted when a web view changes its typing selection.
- [WebViewDidChangeTypingStyleNotification](webviewdidchangetypingstylenotification.md): Deprecated. Posted when a web view changes its typing style.
- [WebViewDidEndEditingNotification](webviewdidendeditingnotification.md): Deprecated. Posted when a web view ends any operation that changes its contents in response to user editing.
- [WebViewProgressFinishedNotification](webviewprogressfinishednotification.md): Deprecated. Posted by a WebView object when the load has finished.
- [WebViewProgressStartedNotification](webviewprogressstartednotification.md): Deprecated. Posted by a WebView object when a load begins, including a load that is initiated in a subframe.
