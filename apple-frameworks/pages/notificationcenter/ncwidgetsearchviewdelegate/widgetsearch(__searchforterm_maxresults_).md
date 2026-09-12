> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetsearchviewdelegate/widgetsearch(_:searchforterm:maxresults:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetsearchviewdelegate/widgetsearch(_:searchforterm:maxresults:))

# widgetSearch(\_:searchForTerm:maxResults:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate to search using the specified term.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
func widgetSearch(_ controller: NCWidgetSearchViewController, searchForTerm searchTerm: String, maxResults max: Int)
```

## Parameters

- `controller`: The widget’s search view controller.
- `searchTerm`: The term a user entered into the search field.
- `max`: The maximum number of results the search view controller can display.

<a id="Discussion"></a>

## Discussion

The search view controller calls this method as soon as a user begins to type. If there is a maximum number of results the search view controller can display, it specifies this number in `max`. The delegate can use `max` to decide how many search results to return.

The delegate sets the search view controller’s [searchResults](../ncwidgetsearchviewcontroller/searchresults.md) property to the array of search result objects.

# widgetSearch:searchForTerm:maxResults: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate to search using the specified term.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetSearch:(NCWidgetSearchViewController *) controller searchForTerm:(NSString *) searchTerm maxResults:(NSUInteger) max;
```

## Parameters

- `controller`: The widget’s search view controller.
- `searchTerm`: The term a user entered into the search field.
- `max`: The maximum number of results the search view controller can display.

<a id="Discussion"></a>

## Discussion

The search view controller calls this method as soon as a user begins to type. If there is a maximum number of results the search view controller can display, it specifies this number in `max`. The delegate can use `max` to decide how many search results to return.

The delegate sets the search view controller’s [searchResults](../ncwidgetsearchviewcontroller/searchresults.md) property to the array of search result objects.
