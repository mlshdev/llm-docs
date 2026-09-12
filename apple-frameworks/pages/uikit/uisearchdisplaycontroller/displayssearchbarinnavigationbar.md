> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaycontroller/displayssearchbarinnavigationbar](https://developer.apple.com/documentation/uikit/uisearchdisplaycontroller/displayssearchbarinnavigationbar)

# displaysSearchBarInNavigationBar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies that the navigation bar contains a search bar.

## Declaration

```swift
var displaysSearchBarInNavigationBar: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When you return [true](https://developer.apple.com/documentation/swift/true) to display the search bar in a navigation bar, the system uses the search display controller’s [navigationItem](navigationitem.md) property and ignores the navigation item, if set, of the [searchContentsController](searchcontentscontroller.md) view controller. The displayed search field occupies as much width in the navigation bar as possible.

A search bar displayed in a navigation bar cannot have a scope bar.

> **Important**

>  The system raises an exception if you set the [showsScopeBar](../uisearchbar/showsscopebar.md) property to [true](https://developer.apple.com/documentation/swift/true) in a search bar that is displayed in a navigation bar.

## See Also

### Configuring a search bar

- [delegate](delegate.md): Deprecated. The controller’s delegate.
- [searchBar](searchbar.md): Deprecated. The search bar.
- [searchContentsController](searchcontentscontroller.md): Deprecated. The view controller that manages the contents being searched.
- [searchResultsTableView](searchresultstableview.md): Deprecated. The table view in which the search results are displayed.
- [searchResultsDataSource](searchresultsdatasource.md): Deprecated. The data source for the table view in which the search results are displayed.
- [searchResultsDelegate](searchresultsdelegate.md): Deprecated. The delegate for the table view in which the search results are displayed.
- [searchResultsTitle](searchresultstitle.md): Deprecated. The title for the search results view.
- [navigationItem](navigationitem.md): Deprecated. Represents the search display controller in a navigation controller’s navigation bar.

# displaysSearchBarInNavigationBar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies that the navigation bar contains a search bar.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL displaysSearchBarInNavigationBar;
```

<a id="Discussion"></a>

## Discussion

When you return [true](https://developer.apple.com/documentation/swift/true) to display the search bar in a navigation bar, the system uses the search display controller’s [navigationItem](navigationitem.md) property and ignores the navigation item, if set, of the [searchContentsController](searchcontentscontroller.md) view controller. The displayed search field occupies as much width in the navigation bar as possible.

A search bar displayed in a navigation bar cannot have a scope bar.

> **Important**

>  The system raises an exception if you set the [showsScopeBar](../uisearchbar/showsscopebar.md) property to [true](https://developer.apple.com/documentation/swift/true) in a search bar that is displayed in a navigation bar.

## See Also

### Configuring a search bar

- [delegate](delegate.md): Deprecated. The controller’s delegate.
- [searchBar](searchbar.md): Deprecated. The search bar.
- [searchContentsController](searchcontentscontroller.md): Deprecated. The view controller that manages the contents being searched.
- [searchResultsTableView](searchresultstableview.md): Deprecated. The table view in which the search results are displayed.
- [searchResultsDataSource](searchresultsdatasource.md): Deprecated. The data source for the table view in which the search results are displayed.
- [searchResultsDelegate](searchresultsdelegate.md): Deprecated. The delegate for the table view in which the search results are displayed.
- [searchResultsTitle](searchresultstitle.md): Deprecated. The title for the search results view.
- [navigationItem](navigationitem.md): Deprecated. Represents the search display controller in a navigation controller’s navigation bar.
