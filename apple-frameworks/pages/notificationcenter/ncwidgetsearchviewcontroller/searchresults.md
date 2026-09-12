> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetsearchviewcontroller/searchresults](https://developer.apple.com/documentation/notificationcenter/ncwidgetsearchviewcontroller/searchresults)

# searchResults (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An array of search results.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
var searchResults: [Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

The [delegate](delegate.md) updates this property with the results of the search. For each object in `searchResults`, the search view controller uses the [searchResultKeyPath](searchresultkeypath.md) property to find the description of the object to display in search view.

When a user chooses an item in the search view’s results list, the search view controller calls [widgetSearch(\_:resultSelected:)](../ncwidgetsearchviewdelegate/widgetsearch%28__resultselected_%29.md) on its delegate. If the widget presented the search view using `presentViewControllerInWidget:`, this action causes the search view to be dismissed by `dismissViewController:`.

## See Also

### Displaying Search Results

- [searchResultKeyPath](searchresultkeypath.md): Deprecated. A key path for the string property to display for each object in the search results array.

# searchResults (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An array of search results.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (copy, nullable) NSArray<id> * searchResults;
```

<a id="Discussion"></a>

## Discussion

The [delegate](delegate.md) updates this property with the results of the search. For each object in `searchResults`, the search view controller uses the [searchResultKeyPath](searchresultkeypath.md) property to find the description of the object to display in search view.

When a user chooses an item in the search view’s results list, the search view controller calls [widgetSearch:resultSelected:](../ncwidgetsearchviewdelegate/widgetsearch%28__resultselected_%29.md) on its delegate. If the widget presented the search view using `presentViewControllerInWidget:`, this action causes the search view to be dismissed by `dismissViewController:`.

## See Also

### Displaying Search Results

- [searchResultKeyPath](searchresultkeypath.md): Deprecated. A key path for the string property to display for each object in the search results array.
