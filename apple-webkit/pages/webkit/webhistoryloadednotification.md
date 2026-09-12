> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistoryloadednotification](https://developer.apple.com/documentation/webkit/webhistoryloadednotification)

# WebHistoryLoadedNotification

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Posted when web history items have been loaded from a URL.

## Declaration

```objectivec
extern NSString * WebHistoryLoadedNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the web history that loaded the history items. This notification does not contain a `userInfo` dictionary.

## See Also

### Related Documentation

- [loadFromURL:error:](webhistory/load%28from_%29.md): Deprecated. Loads the contents of the specified web history file.

### Notifications

- [WebHistoryAllItemsRemovedNotification](webhistoryallitemsremovednotification.md): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChangedNotification](webhistoryitemchangednotification.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAddedNotification](webhistoryitemsaddednotification.md): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsRemovedNotification](webhistoryitemsremovednotification.md): Deprecated. Posted when items have been removed from the web history.
- [WebHistorySavedNotification](webhistorysavednotification.md): Deprecated. Posted when web history items have been saved to a URL.
