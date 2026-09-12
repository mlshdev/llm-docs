> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/webviewprogressstarted](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewprogressstarted)

# WebViewProgressStarted

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Posted by a WebView object when a load begins, including a load that is initiated in a subframe.

## Declaration

```swift
static let WebViewProgressStarted: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the WebView that began loading. This notification does not contain a `userInfo` dictionary.

## See Also

### Related Documentation

- [estimatedProgress](https://developer.apple.com/documentation/webkit/webview-swift.class/estimatedprogress): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.

### WebKit

- [WebHistoryAllItemsRemoved](webhistoryallitemsremoved.md): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChanged](webhistoryitemchanged.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAdded](webhistoryitemsadded.md): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsRemoved](webhistoryitemsremoved.md): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoaded](webhistoryloaded.md): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySaved](webhistorysaved.md): Deprecated. Posted when web history items have been saved to a URL.
- [WebPreferencesChanged](webpreferenceschanged.md): Deprecated. Posted when the web preference settings are changed.
- [WebViewDidBeginEditing](webviewdidbeginediting.md): Deprecated. Posted when a web view begins any operation that changes its contents in response to user editing.
- [WebViewDidChange](webviewdidchange.md): Deprecated. Posted when a web view performs any operation that changes its contents in response to user editing.
- [WebViewDidChangeSelection](webviewdidchangeselection.md): Deprecated. Posted when a web view changes its typing selection.
- [WebViewDidChangeTypingStyle](webviewdidchangetypingstyle.md): Deprecated. Posted when a web view changes its typing style.
- [WebViewDidEndEditing](webviewdidendediting.md): Deprecated. Posted when a web view ends any operation that changes its contents in response to user editing.
- [WebViewProgressEstimateChanged](webviewprogressestimatechanged.md): Deprecated. Posted by a WebView object when the estimated progress value of a load changes.
- [WebViewProgressFinished](webviewprogressfinished.md): Deprecated. Posted by a WebView object when the load has finished.
