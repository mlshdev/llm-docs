> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchdisplaydelegate/searchdisplaycontroller(_:didloadsearchresultstableview:)

# searchDisplayController(\_:didLoadSearchResultsTableView:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller has loaded its table view.

## Declaration

```swift
optional func searchDisplayController(_ controller: UISearchDisplayController, didLoadSearchResultsTableView tableView: UITableView)
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.
- `tableView`: The search display controller’s table view.

## See Also

### Loading and unloading the table view

- [searchDisplayController(\_:willUnloadSearchResultsTableView:)](searchdisplaycontroller%28__willunloadsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to unload its table view.

# searchDisplayController:didLoadSearchResultsTableView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller has loaded its table view.

## Declaration

```objectivec
- (void) searchDisplayController:(UISearchDisplayController *) controller didLoadSearchResultsTableView:(UITableView *) tableView;
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.
- `tableView`: The search display controller’s table view.

## See Also

### Loading and unloading the table view

- [searchDisplayController:willUnloadSearchResultsTableView:](searchdisplaycontroller%28__willunloadsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to unload its table view.
