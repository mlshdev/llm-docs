> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetsearchviewdelegate](https://developer.apple.com/documentation/notificationcenter/ncwidgetsearchviewdelegate)

# NCWidgetSearchViewDelegate (Swift)

**Framework:** Notification Center  
**Kind:** Protocol  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The interface for enabling user searches in the search view controller of a macOS Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```swift
protocol NCWidgetSearchViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The `NCWidgetSearchViewDelegate` protocol defines methods that enable user searches in the search view controller of a Today widget. The [delegate](ncwidgetsearchviewcontroller/delegate.md) of an [NCWidgetSearchViewController](ncwidgetsearchviewcontroller.md) must adopt the [NCWidgetSearchViewDelegate](ncwidgetsearchviewdelegate.md) protocol.

The search view controller tells its delegate to perform a search on a user’s input and the delegate returns the results by setting the controller’s [searchResults](ncwidgetsearchviewcontroller/searchresults.md) property. The search view controller also tells its delegate when a user clears the search field or chooses a search result, so that the delegate can prepare for a new search or dismissal.

## Topics

### Searching Your Content

- [widgetSearch(\_:searchForTerm:maxResults:)](ncwidgetsearchviewdelegate/widgetsearch%28__searchforterm_maxresults_%29.md): Deprecated. Asks the delegate to search using the specified term.

### Responding to User Choices

- [widgetSearch(\_:resultSelected:)](ncwidgetsearchviewdelegate/widgetsearch%28__resultselected_%29.md): Deprecated. Tells the delegate that a user chose the specified search result.
- [widgetSearchTermCleared(\_:)](ncwidgetsearchviewdelegate/widgetsearchtermcleared%28__%29.md): Deprecated. Tells the delegate that a user cleared the search field.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Search View

- [NCWidgetSearchViewController](ncwidgetsearchviewcontroller.md): Deprecated. An object that provides a default search view within a macOS Today widget.

# NCWidgetSearchViewDelegate (Objective-C)

**Framework:** Notification Center  
**Kind:** Protocol  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The interface for enabling user searches in the search view controller of a macOS Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```objectivec
@protocol NCWidgetSearchViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The `NCWidgetSearchViewDelegate` protocol defines methods that enable user searches in the search view controller of a Today widget. The [delegate](ncwidgetsearchviewcontroller/delegate.md) of an [NCWidgetSearchViewController](ncwidgetsearchviewcontroller.md) must adopt the [NCWidgetSearchViewDelegate](ncwidgetsearchviewdelegate.md) protocol.

The search view controller tells its delegate to perform a search on a user’s input and the delegate returns the results by setting the controller’s [searchResults](ncwidgetsearchviewcontroller/searchresults.md) property. The search view controller also tells its delegate when a user clears the search field or chooses a search result, so that the delegate can prepare for a new search or dismissal.

## Topics

### Searching Your Content

- [widgetSearch:searchForTerm:maxResults:](ncwidgetsearchviewdelegate/widgetsearch%28__searchforterm_maxresults_%29.md): Deprecated. Asks the delegate to search using the specified term.

### Responding to User Choices

- [widgetSearch:resultSelected:](ncwidgetsearchviewdelegate/widgetsearch%28__resultselected_%29.md): Deprecated. Tells the delegate that a user chose the specified search result.
- [widgetSearchTermCleared:](ncwidgetsearchviewdelegate/widgetsearchtermcleared%28__%29.md): Deprecated. Tells the delegate that a user cleared the search field.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Search View

- [NCWidgetSearchViewController](ncwidgetsearchviewcontroller.md): Deprecated. An object that provides a default search view within a macOS Today widget.
