> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist](https://developer.apple.com/documentation/webkit/webbackforwardlist)

# WebBackForwardList (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.14)

A `WebBackForwardList` object maintains a list of visited pages used to go back and forward to the most recent page. A `WebBackForwardList` object maintains only the list data—it does not perform actual page loads (in other words, it does not make any client requests). If you need to perform a page load, see the [load(\_:)](webframe/load%28__%29-47p2s.md) method in [WebFrame](webframe.md) to find out how to do this.

## Declaration

```swift
class WebBackForwardList
```

<a id="overview"></a>

## Overview

Items are typically inserted in a back-forward list in the order they are visited. A `WebBackForwardList` object also maintains the notion of the current item (which is always at index `0`), the preceding item (which is at index `-1`), and the following item (which is at index `1`). The [goBack()](webbackforwardlist/goback%28%29.md) and [goForward()](webbackforwardlist/goforward%28%29.md) methods move the current item backward or forward by one. The [go(to:)](webbackforwardlist/go%28to_%29.md) method sets the current item to the specified item. All other methods that return [WebHistoryItem](webhistoryitem.md) objects do not change the value of the current item, they just return the requested item or items. You can also limit the number of history items stored in the back-forward list using [capacity](webbackforwardlist/capacity.md).

`WebBackForwardList` objects also control the number of pages cached. You can turn page caching off by setting the page cache size to `0` using the [pageCacheSize()](webbackforwardlist/pagecachesize%28%29.md) method, or limit the number of pages cached by passing a value greater than 0.

## Topics

### Adding and Removing Items

- [add(\_:)](webbackforwardlist/add%28__%29.md): Deprecated. Inserts an item into the back-forward list, immediately after the current item.

### Moving Backward and Forward

- [goBack()](webbackforwardlist/goback%28%29.md): Deprecated. Moves backward one item in the back-forward list.
- [goForward()](webbackforwardlist/goforward%28%29.md): Deprecated. Moves forward one item in the back-forward list.
- [go(to:)](webbackforwardlist/go%28to_%29.md): Deprecated. Makes the specified item in the back-forward list the current item.

### Querying the Back-Forward List

- [backItem](webbackforwardlist/backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](webbackforwardlist/backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [back(withLimit:)](webbackforwardlist/back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [contains(\_:)](webbackforwardlist/contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [currentItem](webbackforwardlist/currentitem.md): Deprecated. The current item in the back-forward list.
- [item(at:)](webbackforwardlist/item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](webbackforwardlist/forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](webbackforwardlist/forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardList(withLimit:)](webbackforwardlist/forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.

### Page Caching

- [pageCacheSize()](webbackforwardlist/pagecachesize%28%29.md): Deprecated. Returns the maximum number of pages that the receiver can cache.
- [setPageCacheSize(\_:)](webbackforwardlist/setpagecachesize%28__%29.md): Deprecated. Sets the maximum number of pages the receiver can cache.

### Setting Attributes

- [capacity](webbackforwardlist/capacity.md): Deprecated. The maximum number of items that the back-forward list can contain.

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

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Accessing Previous Webpages (Legacy)

- [WebHistory](webhistory.md): Deprecated. `WebHistory` objects are used to maintain the pages visited by users. Visited pages are represented by [WebHistoryItem](webhistoryitem.md) objects. You add and remove history items using the [addItems(\_:)](webhistory/additems%28__%29.md) and [removeItems(\_:)](webhistory/removeitems%28__%29.md) methods. These methods post appropriate notifications when items are added or removed so you can update the display. `WebHistory` organizes the `WebHistoryItem` objects by the day they were visited, ordered from most recent to oldest. You can request all the days that contain history items using the [orderedLastVisitedDays](webhistory/orderedlastvisiteddays.md) method or request the items visited on a particular day using the [orderedItemsLastVisited(onDay:)](webhistory/ordereditemslastvisited%28onday_%29.md) method. `WebHistory` objects can be loaded and saved by specifying a file URL (see [load(from:)](webhistory/load%28from_%29.md)).
- [WebHistoryItem](webhistoryitem.md): Deprecated. WebHistoryItem objects encapsulate information about visiting a page so that users can return to that page. WebHistory and WebBackForwardList objects manage lists of WebHistoryItem objects. WebHistoryItem objects are created and added to these lists automatically when loading pages, so you do not need to create WebHistoryItem objects directly.

# WebBackForwardList (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.14)

A `WebBackForwardList` object maintains a list of visited pages used to go back and forward to the most recent page. A `WebBackForwardList` object maintains only the list data—it does not perform actual page loads (in other words, it does not make any client requests). If you need to perform a page load, see the [loadRequest:](webframe/load%28__%29-47p2s.md) method in [WebFrame](webframe.md) to find out how to do this.

## Declaration

```objectivec
@interface WebBackForwardList : NSObject
```

<a id="overview"></a>

## Overview

Items are typically inserted in a back-forward list in the order they are visited. A `WebBackForwardList` object also maintains the notion of the current item (which is always at index `0`), the preceding item (which is at index `-1`), and the following item (which is at index `1`). The [goBack](webbackforwardlist/goback%28%29.md) and [goForward](webbackforwardlist/goforward%28%29.md) methods move the current item backward or forward by one. The [goToItem:](webbackforwardlist/go%28to_%29.md) method sets the current item to the specified item. All other methods that return [WebHistoryItem](webhistoryitem.md) objects do not change the value of the current item, they just return the requested item or items. You can also limit the number of history items stored in the back-forward list using [capacity](webbackforwardlist/capacity.md).

`WebBackForwardList` objects also control the number of pages cached. You can turn page caching off by setting the page cache size to `0` using the [pageCacheSize](webbackforwardlist/pagecachesize%28%29.md) method, or limit the number of pages cached by passing a value greater than 0.

## Topics

### Adding and Removing Items

- [addItem:](webbackforwardlist/add%28__%29.md): Deprecated. Inserts an item into the back-forward list, immediately after the current item.

### Moving Backward and Forward

- [goBack](webbackforwardlist/goback%28%29.md): Deprecated. Moves backward one item in the back-forward list.
- [goForward](webbackforwardlist/goforward%28%29.md): Deprecated. Moves forward one item in the back-forward list.
- [goToItem:](webbackforwardlist/go%28to_%29.md): Deprecated. Makes the specified item in the back-forward list the current item.

### Querying the Back-Forward List

- [backItem](webbackforwardlist/backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](webbackforwardlist/backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [backListWithLimit:](webbackforwardlist/back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [containsItem:](webbackforwardlist/contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [currentItem](webbackforwardlist/currentitem.md): Deprecated. The current item in the back-forward list.
- [itemAtIndex:](webbackforwardlist/item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](webbackforwardlist/forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](webbackforwardlist/forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardListWithLimit:](webbackforwardlist/forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.

### Page Caching

- [pageCacheSize](webbackforwardlist/pagecachesize%28%29.md): Deprecated. Returns the maximum number of pages that the receiver can cache.
- [setPageCacheSize:](webbackforwardlist/setpagecachesize%28__%29.md): Deprecated. Sets the maximum number of pages the receiver can cache.

### Setting Attributes

- [capacity](webbackforwardlist/capacity.md): Deprecated. The maximum number of items that the back-forward list can contain.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Accessing Previous Webpages (Legacy)

- [WebHistory](webhistory.md): Deprecated. `WebHistory` objects are used to maintain the pages visited by users. Visited pages are represented by [WebHistoryItem](webhistoryitem.md) objects. You add and remove history items using the [addItems:](webhistory/additems%28__%29.md) and [removeItems:](webhistory/removeitems%28__%29.md) methods. These methods post appropriate notifications when items are added or removed so you can update the display. `WebHistory` organizes the `WebHistoryItem` objects by the day they were visited, ordered from most recent to oldest. You can request all the days that contain history items using the [orderedLastVisitedDays](webhistory/orderedlastvisiteddays.md) method or request the items visited on a particular day using the [orderedItemsLastVisitedOnDay:](webhistory/ordereditemslastvisited%28onday_%29.md) method. `WebHistory` objects can be loaded and saved by specifying a file URL (see [loadFromURL:error:](webhistory/load%28from_%29.md)).
- [WebHistoryItem](webhistoryitem.md): Deprecated. WebHistoryItem objects encapsulate information about visiting a page so that users can return to that page. WebHistory and WebBackForwardList objects manage lists of WebHistoryItem objects. WebHistoryItem objects are created and added to these lists automatically when loading pages, so you do not need to create WebHistoryItem objects directly.
