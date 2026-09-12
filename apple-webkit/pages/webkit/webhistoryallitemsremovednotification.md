> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistoryallitemsremovednotification](https://developer.apple.com/documentation/webkit/webhistoryallitemsremovednotification)

# WebHistoryAllItemsRemovedNotification

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Posted when all history items have been removed from the web history.

## Declaration

```objectivec
extern NSString * WebHistoryAllItemsRemovedNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the web history from which the history items were removed. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| @“WebHistoryItemsKey” | An [NSArray](https://developer.apple.com/documentation/foundation/nsarray) object containing the removed items. |

## See Also

### Related Documentation

- [removeAllItems](webhistory/removeallitems%28%29.md): Deprecated. Removes all items from the web history.

### Notifications

- [WebHistoryItemChangedNotification](webhistoryitemchangednotification.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAddedNotification](webhistoryitemsaddednotification.md): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsRemovedNotification](webhistoryitemsremovednotification.md): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoadedNotification](webhistoryloadednotification.md): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySavedNotification](webhistorysavednotification.md): Deprecated. Posted when web history items have been saved to a URL.
