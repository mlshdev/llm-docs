> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaycontroller/navigationitem](https://developer.apple.com/documentation/uikit/uisearchdisplaycontroller/navigationitem)

# navigationItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Represents the search display controller in a navigation controller’s navigation bar.

## Declaration

```swift
var navigationItem: UINavigationItem? { get }
```

<a id="Discussion"></a>

## Discussion

You can configure the navigation item as described in the [UINavigationItem](../uinavigationitem.md), with the exception of configuring the title view.

> **Important**

>  The system raises an exception if you attempt to set the [titleView](../uinavigationitem/titleview.md) property for a search display controller’s navigation item.

## See Also

### Configuring a search bar

- [delegate](delegate.md): Deprecated. The controller’s delegate.
- [searchBar](searchbar.md): Deprecated. The search bar.
- [searchContentsController](searchcontentscontroller.md): Deprecated. The view controller that manages the contents being searched.
- [searchResultsTableView](searchresultstableview.md): Deprecated. The table view in which the search results are displayed.
- [searchResultsDataSource](searchresultsdatasource.md): Deprecated. The data source for the table view in which the search results are displayed.
- [searchResultsDelegate](searchresultsdelegate.md): Deprecated. The delegate for the table view in which the search results are displayed.
- [searchResultsTitle](searchresultstitle.md): Deprecated. The title for the search results view.
- [displaysSearchBarInNavigationBar](displayssearchbarinnavigationbar.md): Deprecated. Specifies that the navigation bar contains a search bar.

# navigationItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Represents the search display controller in a navigation controller’s navigation bar.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UINavigationItem * navigationItem;
```

<a id="Discussion"></a>

## Discussion

You can configure the navigation item as described in the [UINavigationItem](../uinavigationitem.md), with the exception of configuring the title view.

> **Important**

>  The system raises an exception if you attempt to set the [titleView](../uinavigationitem/titleview.md) property for a search display controller’s navigation item.

## See Also

### Configuring a search bar

- [delegate](delegate.md): Deprecated. The controller’s delegate.
- [searchBar](searchbar.md): Deprecated. The search bar.
- [searchContentsController](searchcontentscontroller.md): Deprecated. The view controller that manages the contents being searched.
- [searchResultsTableView](searchresultstableview.md): Deprecated. The table view in which the search results are displayed.
- [searchResultsDataSource](searchresultsdatasource.md): Deprecated. The data source for the table view in which the search results are displayed.
- [searchResultsDelegate](searchresultsdelegate.md): Deprecated. The delegate for the table view in which the search results are displayed.
- [searchResultsTitle](searchresultstitle.md): Deprecated. The title for the search results view.
- [displaysSearchBarInNavigationBar](displayssearchbarinnavigationbar.md): Deprecated. Specifies that the navigation bar contains a search bar.
