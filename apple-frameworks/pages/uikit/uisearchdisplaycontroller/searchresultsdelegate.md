> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaycontroller/searchresultsdelegate](https://developer.apple.com/documentation/uikit/uisearchdisplaycontroller/searchresultsdelegate)

# searchResultsDelegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The delegate for the table view in which the search results are displayed.

> For more information, see [UISearchDisplayController](../uisearchdisplaycontroller.md).

## Declaration

```swift
weak var searchResultsDelegate: (any UITableViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The default is `nil`.

## See Also

### Configuring a search bar

- [delegate](delegate.md): Deprecated. The controller’s delegate.
- [searchBar](searchbar.md): Deprecated. The search bar.
- [searchContentsController](searchcontentscontroller.md): Deprecated. The view controller that manages the contents being searched.
- [searchResultsTableView](searchresultstableview.md): Deprecated. The table view in which the search results are displayed.
- [searchResultsDataSource](searchresultsdatasource.md): Deprecated. The data source for the table view in which the search results are displayed.
- [searchResultsTitle](searchresultstitle.md): Deprecated. The title for the search results view.
- [displaysSearchBarInNavigationBar](displayssearchbarinnavigationbar.md): Deprecated. Specifies that the navigation bar contains a search bar.
- [navigationItem](navigationitem.md): Deprecated. Represents the search display controller in a navigation controller’s navigation bar.

# searchResultsDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The delegate for the table view in which the search results are displayed.

> For more information, see [UISearchDisplayController](../uisearchdisplaycontroller.md).

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITableViewDelegate> searchResultsDelegate;
```

<a id="Discussion"></a>

## Discussion

The default is `nil`.

## See Also

### Configuring a search bar

- [delegate](delegate.md): Deprecated. The controller’s delegate.
- [searchBar](searchbar.md): Deprecated. The search bar.
- [searchContentsController](searchcontentscontroller.md): Deprecated. The view controller that manages the contents being searched.
- [searchResultsTableView](searchresultstableview.md): Deprecated. The table view in which the search results are displayed.
- [searchResultsDataSource](searchresultsdatasource.md): Deprecated. The data source for the table view in which the search results are displayed.
- [searchResultsTitle](searchresultstitle.md): Deprecated. The title for the search results view.
- [displaysSearchBarInNavigationBar](displayssearchbarinnavigationbar.md): Deprecated. Specifies that the navigation bar contains a search bar.
- [navigationItem](navigationitem.md): Deprecated. Represents the search display controller in a navigation controller’s navigation bar.
