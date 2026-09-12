> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistoryitemsremovednotification](https://developer.apple.com/documentation/webkit/webhistoryitemsremovednotification)

# WebHistoryItemsRemovedNotification

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Posted when items have been removed from the web history.

## Declaration

```objectivec
extern NSString * WebHistoryItemsRemovedNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the web history from which the history items were removed. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| @“WebHistoryItemsKey” | An [NSArray](https://developer.apple.com/documentation/foundation/nsarray) object containing the removed items. |

## See Also

### Related Documentation

- [removeItems:](webhistory/removeitems%28__%29.md): Deprecated. Removes the specified items from the web history.

### Notifications

- [WebHistoryAllItemsRemovedNotification](webhistoryallitemsremovednotification.md): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChangedNotification](webhistoryitemchangednotification.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAddedNotification](webhistoryitemsaddednotification.md): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryLoadedNotification](webhistoryloadednotification.md): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySavedNotification](webhistorysavednotification.md): Deprecated. Posted when web history items have been saved to a URL.
