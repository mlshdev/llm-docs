> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasourcereferencecellprovider](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasourcereferencecellprovider)

# UITableViewDiffableDataSourceReferenceCellProvider (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure that configures and returns a cell for a table view from its diffable data source.

## Declaration

```swift
typealias UITableViewDiffableDataSourceReferenceCellProvider = (UITableView, IndexPath, Any) -> UITableViewCell?
```

## Parameters

- `tableView`: The table view to configure this cell for.
- `indexPath`: The index path that specifies the location of the cell in the table view.
- `itemIdentifier`: The identifier of the item for this cell.

<a id="return-value"></a>

## Return Value

A non-`nil` configured cell object. The cell provider must return a valid cell object to the table view.

## See Also

### Creating a diffable data source

- [init(tableView:cellProvider:)](uitableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.

# UITableViewDiffableDataSourceCellProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure that configures and returns a cell for a table view from its diffable data source.

## Declaration

```objectivec
typedef UITableViewCell *(^)(UITableView *, NSIndexPath *, id) UITableViewDiffableDataSourceCellProvider;
```

## Parameters

- `tableView`: The table view to configure this cell for.
- `indexPath`: The index path that specifies the location of the cell in the table view.
- `itemIdentifier`: The identifier of the item for this cell.

<a id="return-value"></a>

## Return Value

A non-`nil` configured cell object. The cell provider must return a valid cell object to the table view.

## See Also

### Creating a diffable data source

- [initWithTableView:cellProvider:](uitableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.
