> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistoryitem](https://developer.apple.com/documentation/webkit/webhistoryitem)

# WebHistoryItem (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

WebHistoryItem objects encapsulate information about visiting a page so that users can return to that page. WebHistory and WebBackForwardList objects manage lists of WebHistoryItem objects. WebHistoryItem objects are created and added to these lists automatically when loading pages, so you do not need to create WebHistoryItem objects directly.

## Declaration

```swift
class WebHistoryItem
```

## Topics

### Initializing WebHistoryItem objects

- [init(urlString:title:lastVisitedTimeInterval:)](webhistoryitem/init%28urlstring_title_lastvisitedtimeinterval_%29-5amr.md): Deprecated. Initializes the receiver with a URL,`URLString`, a title specified by `title` and the last time this item was visited specified by `time` title, and time last visited.

### Getting URL information

- [urlString](webhistoryitem/urlstring.md): Deprecated. The string representation of the URL for the receiver’s page.
- [originalURLString](webhistoryitem/originalurlstring.md): Deprecated. The string representation of the original URL for the receiver’s page.

### Getting and setting page titles

- [title](webhistoryitem/title.md): Deprecated. The receiver’s original page title.
- [alternateTitle](webhistoryitem/alternatetitle.md): Deprecated. An alternate title that may be used in place of the receiver’s page title.

### Getting other attributes

- [icon](webhistoryitem/icon.md): Deprecated. The icon for the receiver’s page, or `nil` if none exists.
- [lastVisitedTimeInterval](webhistoryitem/lastvisitedtimeinterval.md): Deprecated. The last time and date the receiver’s page was visited.

### Initializers

- [init(URLString:title:lastVisitedTimeInterval:)](webhistoryitem/init%28urlstring_title_lastvisitedtimeinterval_%29-d9r0.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Accessing Previous Webpages (Legacy)

- [WebBackForwardList](webbackforwardlist.md): Deprecated. A `WebBackForwardList` object maintains a list of visited pages used to go back and forward to the most recent page. A `WebBackForwardList` object maintains only the list data—it does not perform actual page loads (in other words, it does not make any client requests). If you need to perform a page load, see the [load(\_:)](webframe/load%28__%29-47p2s.md) method in [WebFrame](webframe.md) to find out how to do this.
- [WebHistory](webhistory.md): Deprecated. `WebHistory` objects are used to maintain the pages visited by users. Visited pages are represented by [WebHistoryItem](webhistoryitem.md) objects. You add and remove history items using the [addItems(\_:)](webhistory/additems%28__%29.md) and [removeItems(\_:)](webhistory/removeitems%28__%29.md) methods. These methods post appropriate notifications when items are added or removed so you can update the display. `WebHistory` organizes the `WebHistoryItem` objects by the day they were visited, ordered from most recent to oldest. You can request all the days that contain history items using the [orderedLastVisitedDays](webhistory/orderedlastvisiteddays.md) method or request the items visited on a particular day using the [orderedItemsLastVisited(onDay:)](webhistory/ordereditemslastvisited%28onday_%29.md) method. `WebHistory` objects can be loaded and saved by specifying a file URL (see [load(from:)](webhistory/load%28from_%29.md)).

# WebHistoryItem (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

WebHistoryItem objects encapsulate information about visiting a page so that users can return to that page. WebHistory and WebBackForwardList objects manage lists of WebHistoryItem objects. WebHistoryItem objects are created and added to these lists automatically when loading pages, so you do not need to create WebHistoryItem objects directly.

## Declaration

```objectivec
@interface WebHistoryItem : NSObject
```

## Topics

### Initializing WebHistoryItem objects

- [initWithURLString:title:lastVisitedTimeInterval:](webhistoryitem/init%28urlstring_title_lastvisitedtimeinterval_%29-5amr.md): Deprecated. Initializes the receiver with a URL,`URLString`, a title specified by `title` and the last time this item was visited specified by `time` title, and time last visited.

### Getting URL information

- [URLString](webhistoryitem/urlstring.md): Deprecated. The string representation of the URL for the receiver’s page.
- [originalURLString](webhistoryitem/originalurlstring.md): Deprecated. The string representation of the original URL for the receiver’s page.

### Getting and setting page titles

- [title](webhistoryitem/title.md): Deprecated. The receiver’s original page title.
- [alternateTitle](webhistoryitem/alternatetitle.md): Deprecated. An alternate title that may be used in place of the receiver’s page title.

### Getting other attributes

- [icon](webhistoryitem/icon.md): Deprecated. The icon for the receiver’s page, or `nil` if none exists.
- [lastVisitedTimeInterval](webhistoryitem/lastvisitedtimeinterval.md): Deprecated. The last time and date the receiver’s page was visited.

### Notifications

- [WebHistoryItemChangedNotification](webhistoryitemchangednotification.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Accessing Previous Webpages (Legacy)

- [WebBackForwardList](webbackforwardlist.md): Deprecated. A `WebBackForwardList` object maintains a list of visited pages used to go back and forward to the most recent page. A `WebBackForwardList` object maintains only the list data—it does not perform actual page loads (in other words, it does not make any client requests). If you need to perform a page load, see the [loadRequest:](webframe/load%28__%29-47p2s.md) method in [WebFrame](webframe.md) to find out how to do this.
- [WebHistory](webhistory.md): Deprecated. `WebHistory` objects are used to maintain the pages visited by users. Visited pages are represented by [WebHistoryItem](webhistoryitem.md) objects. You add and remove history items using the [addItems:](webhistory/additems%28__%29.md) and [removeItems:](webhistory/removeitems%28__%29.md) methods. These methods post appropriate notifications when items are added or removed so you can update the display. `WebHistory` organizes the `WebHistoryItem` objects by the day they were visited, ordered from most recent to oldest. You can request all the days that contain history items using the [orderedLastVisitedDays](webhistory/orderedlastvisiteddays.md) method or request the items visited on a particular day using the [orderedItemsLastVisitedOnDay:](webhistory/ordereditemslastvisited%28onday_%29.md) method. `WebHistory` objects can be loaded and saved by specifying a file URL (see [loadFromURL:error:](webhistory/load%28from_%29.md)).
