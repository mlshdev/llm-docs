> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaydelegate/searchdisplaycontroller(_:willshowsearchresultstableview:)](https://developer.apple.com/documentation/uikit/uisearchdisplaydelegate/searchdisplaycontroller(_:willshowsearchresultstableview:))

# searchDisplayController(\_:willShowSearchResultsTableView:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller is about to display its table view.

## Declaration

```swift
optional func searchDisplayController(_ controller: UISearchDisplayController, willShowSearchResultsTableView tableView: UITableView)
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.
- `tableView`: The search display controller’s table view.

## See Also

### Showing and hiding the table view

- [searchDisplayController(\_:didShowSearchResultsTableView:)](searchdisplaycontroller%28__didshowsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller just displayed its table view.
- [searchDisplayController(\_:willHideSearchResultsTableView:)](searchdisplaycontroller%28__willhidesearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to hide its table view.
- [searchDisplayController(\_:didHideSearchResultsTableView:)](searchdisplaycontroller%28__didhidesearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller just hid its table view.

# searchDisplayController:willShowSearchResultsTableView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller is about to display its table view.

## Declaration

```objectivec
- (void) searchDisplayController:(UISearchDisplayController *) controller willShowSearchResultsTableView:(UITableView *) tableView;
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.
- `tableView`: The search display controller’s table view.

## See Also

### Showing and hiding the table view

- [searchDisplayController:didShowSearchResultsTableView:](searchdisplaycontroller%28__didshowsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller just displayed its table view.
- [searchDisplayController:willHideSearchResultsTableView:](searchdisplaycontroller%28__willhidesearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to hide its table view.
- [searchDisplayController:didHideSearchResultsTableView:](searchdisplaycontroller%28__didhidesearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller just hid its table view.
