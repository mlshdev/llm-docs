> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistoryitemsaddednotification](https://developer.apple.com/documentation/webkit/webhistoryitemsaddednotification)

# WebHistoryItemsAddedNotification

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Posted when history items have been added to a web history.

## Declaration

```objectivec
extern NSString * WebHistoryItemsAddedNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the web history to which the items were added. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| @“WebHistoryItemsKey” | An [NSArray](https://developer.apple.com/documentation/foundation/nsarray) object containing the added items. |

## See Also

### Related Documentation

- [addItems:](webhistory/additems%28__%29.md): Deprecated. Inserts or updates the specified items in the web history.

### Notifications

- [WebHistoryAllItemsRemovedNotification](webhistoryallitemsremovednotification.md): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChangedNotification](webhistoryitemchangednotification.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsRemovedNotification](webhistoryitemsremovednotification.md): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoadedNotification](webhistoryloadednotification.md): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySavedNotification](webhistorysavednotification.md): Deprecated. Posted when web history items have been saved to a URL.
