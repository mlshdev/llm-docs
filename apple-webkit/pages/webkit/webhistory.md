> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory](https://developer.apple.com/documentation/webkit/webhistory)

# WebHistory (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebHistory` objects are used to maintain the pages visited by users. Visited pages are represented by [WebHistoryItem](webhistoryitem.md) objects. You add and remove history items using the [addItems(\_:)](webhistory/additems%28__%29.md) and [removeItems(\_:)](webhistory/removeitems%28__%29.md) methods. These methods post appropriate notifications when items are added or removed so you can update the display. `WebHistory` organizes the `WebHistoryItem` objects by the day they were visited, ordered from most recent to oldest. You can request all the days that contain history items using the [orderedLastVisitedDays](webhistory/orderedlastvisiteddays.md) method or request the items visited on a particular day using the [orderedItemsLastVisited(onDay:)](webhistory/ordereditemslastvisited%28onday_%29.md) method. `WebHistory` objects can be loaded and saved by specifying a file URL (see [load(from:)](webhistory/load%28from_%29.md)).

## Declaration

```swift
class WebHistory
```

## Topics

### Accessing Shared History Objects

- [optionalShared()](webhistory/optionalshared%28%29.md): Deprecated. Returns a shared web history object, if one exists.
- [setOptionalShared(\_:)](webhistory/setoptionalshared%28__%29.md): Deprecated. Sets the web history object to share.

### Adding and Removing History Items

- [addItems(\_:)](webhistory/additems%28__%29.md): Deprecated. Inserts or updates the specified items in the web history.
- [removeItems(\_:)](webhistory/removeitems%28__%29.md): Deprecated. Removes the specified items from the web history.
- [removeAllItems()](webhistory/removeallitems%28%29.md): Deprecated. Removes all items from the web history.

### Getting Web History Items

- [orderedItemsLastVisited(onDay:)](webhistory/ordereditemslastvisited%28onday_%29.md): Deprecated. Returns web history items that were last visited on the specified date.
- [orderedLastVisitedDays](webhistory/orderedlastvisiteddays.md): Deprecated. An array of all calendar days represented in the web history.
- [item(for:)](webhistory/item%28for_%29.md): Deprecated. Returns the web history item that corresponds to the specified web location.

### Loading and Saving History Information

- [load(from:)](webhistory/load%28from_%29.md): Deprecated. Loads the contents of the specified web history file.
- [save(to:)](webhistory/save%28to_%29.md): Deprecated. Saves the web history to the specified file.

### Getting and Setting Attributes

- [historyAgeInDaysLimit](webhistory/historyageindayslimit.md): Deprecated. The maximum age of web history items that can be retrieved.
- [historyItemLimit](webhistory/historyitemlimit.md): Deprecated. The maximum number of web history items that can be stored.

### Constants

- [Web History Dictionary Keys](web-history-dictionary-keys.md): The key for accessing the web history items stored in a notification’s user information dictionary.

### Notifications

- [WebHistoryAllItemsRemoved](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryallitemsremoved): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChanged](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryitemchanged): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAdded](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryitemsadded): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsRemoved](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryitemsremoved): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoaded](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryloaded): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySaved](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistorysaved): Deprecated. Posted when web history items have been saved to a URL.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Accessing Previous Webpages (Legacy)

- [WebBackForwardList](webbackforwardlist.md): Deprecated. A `WebBackForwardList` object maintains a list of visited pages used to go back and forward to the most recent page. A `WebBackForwardList` object maintains only the list data—it does not perform actual page loads (in other words, it does not make any client requests). If you need to perform a page load, see the [load(\_:)](webframe/load%28__%29-47p2s.md) method in [WebFrame](webframe.md) to find out how to do this.
- [WebHistoryItem](webhistoryitem.md): Deprecated. WebHistoryItem objects encapsulate information about visiting a page so that users can return to that page. WebHistory and WebBackForwardList objects manage lists of WebHistoryItem objects. WebHistoryItem objects are created and added to these lists automatically when loading pages, so you do not need to create WebHistoryItem objects directly.

# WebHistory (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebHistory` objects are used to maintain the pages visited by users. Visited pages are represented by [WebHistoryItem](webhistoryitem.md) objects. You add and remove history items using the [addItems:](webhistory/additems%28__%29.md) and [removeItems:](webhistory/removeitems%28__%29.md) methods. These methods post appropriate notifications when items are added or removed so you can update the display. `WebHistory` organizes the `WebHistoryItem` objects by the day they were visited, ordered from most recent to oldest. You can request all the days that contain history items using the [orderedLastVisitedDays](webhistory/orderedlastvisiteddays.md) method or request the items visited on a particular day using the [orderedItemsLastVisitedOnDay:](webhistory/ordereditemslastvisited%28onday_%29.md) method. `WebHistory` objects can be loaded and saved by specifying a file URL (see [loadFromURL:error:](webhistory/load%28from_%29.md)).

## Declaration

```objectivec
@interface WebHistory : NSObject
```

## Topics

### Accessing Shared History Objects

- [optionalSharedHistory](webhistory/optionalshared%28%29.md): Deprecated. Returns a shared web history object, if one exists.
- [setOptionalSharedHistory:](webhistory/setoptionalshared%28__%29.md): Deprecated. Sets the web history object to share.

### Adding and Removing History Items

- [addItems:](webhistory/additems%28__%29.md): Deprecated. Inserts or updates the specified items in the web history.
- [removeItems:](webhistory/removeitems%28__%29.md): Deprecated. Removes the specified items from the web history.
- [removeAllItems](webhistory/removeallitems%28%29.md): Deprecated. Removes all items from the web history.

### Getting Web History Items

- [orderedItemsLastVisitedOnDay:](webhistory/ordereditemslastvisited%28onday_%29.md): Deprecated. Returns web history items that were last visited on the specified date.
- [orderedLastVisitedDays](webhistory/orderedlastvisiteddays.md): Deprecated. An array of all calendar days represented in the web history.
- [itemForURL:](webhistory/item%28for_%29.md): Deprecated. Returns the web history item that corresponds to the specified web location.

### Loading and Saving History Information

- [loadFromURL:error:](webhistory/load%28from_%29.md): Deprecated. Loads the contents of the specified web history file.
- [saveToURL:error:](webhistory/save%28to_%29.md): Deprecated. Saves the web history to the specified file.

### Getting and Setting Attributes

- [historyAgeInDaysLimit](webhistory/historyageindayslimit.md): Deprecated. The maximum age of web history items that can be retrieved.
- [historyItemLimit](webhistory/historyitemlimit.md): Deprecated. The maximum number of web history items that can be stored.

### Constants

- [Web History Dictionary Keys](web-history-dictionary-keys.md): The key for accessing the web history items stored in a notification’s user information dictionary.

### Notifications

- [WebHistoryAllItemsRemovedNotification](webhistoryallitemsremovednotification.md): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChangedNotification](webhistoryitemchangednotification.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAddedNotification](webhistoryitemsaddednotification.md): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsRemovedNotification](webhistoryitemsremovednotification.md): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoadedNotification](webhistoryloadednotification.md): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySavedNotification](webhistorysavednotification.md): Deprecated. Posted when web history items have been saved to a URL.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Accessing Previous Webpages (Legacy)

- [WebBackForwardList](webbackforwardlist.md): Deprecated. A `WebBackForwardList` object maintains a list of visited pages used to go back and forward to the most recent page. A `WebBackForwardList` object maintains only the list data—it does not perform actual page loads (in other words, it does not make any client requests). If you need to perform a page load, see the [loadRequest:](webframe/load%28__%29-47p2s.md) method in [WebFrame](webframe.md) to find out how to do this.
- [WebHistoryItem](webhistoryitem.md): Deprecated. WebHistoryItem objects encapsulate information about visiting a page so that users can return to that page. WebHistory and WebBackForwardList objects manage lists of WebHistoryItem objects. WebHistoryItem objects are created and added to these lists automatically when loading pages, so you do not need to create WebHistoryItem objects directly.
