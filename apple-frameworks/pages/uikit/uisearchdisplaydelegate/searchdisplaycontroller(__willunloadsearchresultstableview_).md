> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaydelegate/searchdisplaycontroller(_:willunloadsearchresultstableview:)](https://developer.apple.com/documentation/uikit/uisearchdisplaydelegate/searchdisplaycontroller(_:willunloadsearchresultstableview:))

# searchDisplayController(\_:willUnloadSearchResultsTableView:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller is about to unload its table view.

## Declaration

```swift
optional func searchDisplayController(_ controller: UISearchDisplayController, willUnloadSearchResultsTableView tableView: UITableView)
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.
- `tableView`: The search display controller’s table view.

## See Also

### Loading and unloading the table view

- [searchDisplayController(\_:didLoadSearchResultsTableView:)](searchdisplaycontroller%28__didloadsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller has loaded its table view.

# searchDisplayController:willUnloadSearchResultsTableView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller is about to unload its table view.

## Declaration

```objectivec
- (void) searchDisplayController:(UISearchDisplayController *) controller willUnloadSearchResultsTableView:(UITableView *) tableView;
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.
- `tableView`: The search display controller’s table view.

## See Also

### Loading and unloading the table view

- [searchDisplayController:didLoadSearchResultsTableView:](searchdisplaycontroller%28__didloadsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller has loaded its table view.
