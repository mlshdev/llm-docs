> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistorysavednotification](https://developer.apple.com/documentation/webkit/webhistorysavednotification)

# WebHistorySavedNotification

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Posted when web history items have been saved to a URL.

## Declaration

```objectivec
extern NSString * WebHistorySavedNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the web history that saved the history items. This notification does not contain a `userInfo` dictionary.

## See Also

### Related Documentation

- [saveToURL:error:](webhistory/save%28to_%29.md): Deprecated. Saves the web history to the specified file.

### Notifications

- [WebHistoryAllItemsRemovedNotification](webhistoryallitemsremovednotification.md): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChangedNotification](webhistoryitemchangednotification.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAddedNotification](webhistoryitemsaddednotification.md): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsRemovedNotification](webhistoryitemsremovednotification.md): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoadedNotification](webhistoryloadednotification.md): Deprecated. Posted when web history items have been loaded from a URL.
